import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Edit3, Plus, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AcademicCalender = () => {
  const navigate = useNavigate();
  const [calendar, setCalendar] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const schoolId = localStorage.getItem("school_id");
  const token = localStorage.getItem("access_token");

  const loadCalendar = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_NODE_API}/api/calender/teacher?school_info_id=${schoolId}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then(({ data }) => setCalendar(Array.isArray(data) ? data : []))
      .catch(() => toast.error("Unable to load the academic calendar"));
  }, [schoolId, token]);

  useEffect(() => {
    if (localStorage.getItem("user_type") !== "4") {
      navigate("/login");
      return;
    }
    loadCalendar();
  }, [loadCalendar, navigate]);

  const closeForm = () => {
    setFormOpen(false);
    setEditing(null);
    setTopic("");
    setDate("");
  };

  const openEdit = (item) => {
    setEditing(item);
    setTopic(item.topics || "");
    setDate(item.date || "");
    setFormOpen(true);
  };

  const save = async (event) => {
    event.preventDefault();
    if (!topic.trim() || !date.trim()) return;
    const url = editing
      ? `${process.env.REACT_APP_NODE_API}/api/calender/update?id=${editing.id}`
      : `${process.env.REACT_APP_NODE_API}/api/calender`;
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: `bearer ${token}` },
        body: JSON.stringify(editing ? { date, topics: topic } : { school_info_id: schoolId, date, topics: topic, id: "" }),
      });
      toast.success(editing ? "Calendar entry updated" : "Calendar entry added");
      closeForm();
      loadCalendar();
    } catch {
      toast.error("Unable to save this calendar entry");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this calendar entry?")) return;
    try {
      await axios.post(`${process.env.REACT_APP_NODE_API}/api/calender/delete?id=${id}`, null, {
        headers: { authorization: `bearer ${token}` },
      });
      toast.success("Calendar entry deleted");
      loadCalendar();
    } catch {
      toast.error("Unable to delete this entry");
    }
  };

  return (
    <div className="tw-space-y-6">
      <section className="tw-relative tw-overflow-hidden tw-rounded-3xl tw-bg-gradient-to-br tw-from-indigo-700 tw-to-cyan-500 tw-p-6 tw-text-white tw-shadow-soft sm:tw-p-8">
        <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-justify-between tw-gap-5 sm:tw-flex-row sm:tw-items-center">
          <div>
            <p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-indigo-100">School planning</p>
            <h2 className="route-hero-title tw-mb-0 tw-mt-2 tw-font-['Manrope'] tw-text-3xl tw-font-extrabold tw-text-white">Academic calendar</h2>
            <p className="tw-mb-0 tw-mt-2 tw-text-sm tw-text-indigo-100">Manage important dates, examinations, holidays and school events.</p>
          </div>
          <button onClick={() => setFormOpen(true)} className="tw-inline-flex tw-h-12 tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border-0 tw-bg-white tw-px-5 tw-font-bold tw-text-indigo-700 tw-shadow-lg"><Plus size={18} /> Add event</button>
        </div>
        <CalendarDays className="tw-absolute -tw-bottom-10 -tw-right-5 tw-text-white/10" size={180} />
      </section>

      <section className="tw-rounded-3xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-p-0 tw-shadow-soft">
        <div className="tw-flex tw-items-center tw-justify-between tw-border-0 tw-border-b tw-border-solid tw-border-slate-100 tw-p-5 sm:tw-px-6">
          <div><h3 className="tw-m-0 tw-font-['Manrope'] tw-text-xl tw-font-extrabold tw-text-slate-900">Scheduled events</h3><p className="tw-mb-0 tw-mt-1 tw-text-sm tw-text-slate-500">{calendar.length} calendar entries</p></div>
        </div>
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-min-w-[620px] tw-border-collapse">
            <thead><tr className="tw-bg-slate-50"><th className="tw-px-6 tw-py-4 tw-text-left tw-text-xs tw-uppercase tw-tracking-wider tw-text-slate-500">Event</th><th className="tw-px-6 tw-py-4 tw-text-left tw-text-xs tw-uppercase tw-tracking-wider tw-text-slate-500">Date</th><th className="tw-px-6 tw-py-4 tw-text-right tw-text-xs tw-uppercase tw-tracking-wider tw-text-slate-500">Actions</th></tr></thead>
            <tbody>
              {calendar.slice().sort((a, b) => b.id - a.id).map((item) => (
                <tr key={item.id} className="tw-border-0 tw-border-t tw-border-solid tw-border-slate-100 hover:tw-bg-indigo-50/30">
                  <td className="tw-px-6 tw-py-4 tw-font-semibold tw-text-slate-800">{item.topics}</td>
                  <td className="tw-px-6 tw-py-4 tw-text-slate-500">{item.date}</td>
                  <td className="tw-px-6 tw-py-4"><div className="tw-flex tw-justify-end tw-gap-2"><button onClick={() => openEdit(item)} className="tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-lg tw-border-0 tw-bg-indigo-50 tw-text-indigo-600" aria-label="Edit event"><Edit3 size={16} /></button><button onClick={() => remove(item.id)} className="tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-lg tw-border-0 tw-bg-rose-50 tw-text-rose-600" aria-label="Delete event"><Trash2 size={16} /></button></div></td>
                </tr>
              ))}
              {!calendar.length && <tr><td colSpan="3" className="tw-p-12 tw-text-center tw-text-sm tw-text-slate-400">No calendar events have been added yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>

      <AnimatePresence>
        {formOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="tw-fixed tw-inset-0 tw-z-50 tw-grid tw-place-items-center tw-bg-slate-950/40 tw-p-4 tw-backdrop-blur-sm">
          <motion.form initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }} onSubmit={save} className="tw-relative tw-m-0 tw-w-full tw-max-w-lg tw-rounded-3xl tw-bg-white tw-p-6 tw-shadow-2xl sm:tw-p-8">
            <button type="button" onClick={closeForm} className="tw-absolute tw-right-5 tw-top-5 tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-xl tw-border-0 tw-bg-slate-100 tw-text-slate-500"><X size={18} /></button>
            <p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-indigo-600">Calendar event</p>
            <h3 className="tw-mb-6 tw-mt-1 tw-font-['Manrope'] tw-text-2xl tw-font-extrabold tw-text-slate-900">{editing ? "Edit event" : "Add a new event"}</h3>
            <label htmlFor="event-topic">Event title</label><input id="event-topic" className="form-control tw-mb-5" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="For example: Final examination" required />
            <label htmlFor="event-date">Date or date range</label><input id="event-date" className="form-control tw-mb-6" value={date} onChange={(e) => setDate(e.target.value)} placeholder="For example: 21 July 2026" required />
            <button className="tw-flex tw-h-12 tw-w-full tw-items-center tw-justify-center tw-rounded-xl tw-border-0 tw-bg-indigo-600 tw-font-bold tw-text-white hover:tw-bg-indigo-700">{editing ? "Save changes" : "Add to calendar"}</button>
          </motion.form>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default AcademicCalender;
