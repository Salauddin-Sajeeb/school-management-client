import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, Bell, BookOpen, CalendarDays, ClipboardCheck, FileText,
  Home, LogOut, Menu, School, UsersRound, X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import brandLogo from "../../../logo.svg";

const dashboardPaths = new Set([
  "/", "/login", "/student-admin", "/teacher-admin", "/school-admin",
  "/super-admin", "/viewer-admin",
]);

const configs = {
  "1": { role: "Student", home: "/student-admin", links: [["Routine", "/studentroutine", BookOpen], ["Attendance", "/studentviewattendance", ClipboardCheck], ["Homework", "/studenthomework", FileText], ["Calendar", "/student-academic-calender", CalendarDays]] },
  "2": { role: "Teacher", home: "/teacher-admin", links: [["Routine", "/routine", BookOpen], ["Attendance", "/teacherattendance", ClipboardCheck], ["Homework", "/teacherhomework", FileText], ["Calendar", "/teacher-calender", CalendarDays]] },
  "4": { role: "School admin", home: "/school-admin", links: [["Calendar", "/academic-calender", CalendarDays], ["Students", "/add-student", School], ["Teachers", "/teacher-feature", UsersRound], ["Routine", "/schooladminroutine", BookOpen]] },
  "5": { role: "Super admin", home: "/super-admin", links: [["Schools", "/add-school", School], ["Organizations", "/add-organization", Home], ["Classes", "/create-class", BookOpen], ["Subjects", "/create-subject", FileText]] },
  "6": { role: "Parent / viewer", home: "/viewer-admin", links: [["Calendar", "/viewer-calender", CalendarDays], ["Routine", "/viewerRoutine", BookOpen], ["Attendance", "/viewershowattendanceview", ClipboardCheck], ["Homework", "/showhomework", FileText]] },
};

const getTitle = (pathname) => {
  const aliases = {
    "academic-calender": "Academic calendar", studentroutine: "Class routine",
    teacherattendance: "Student attendance", studentviewattendance: "Attendance overview",
    teacherhomework: "Homework management", studenthomework: "My homework",
    markentry: "Mark entry", "add-student": "Add student", "add-teacher": "Add teacher",
    "teacher-feature": "Teacher management", "class-create": "Class management",
    "section-create": "Section management", "subject-create": "Subject management",
    "period-create": "Period management", schooladminroutine: "Routine management",
    schooladminnotice: "Notice management",
  };
  const key = pathname.split("/").filter(Boolean).pop() || "workspace";
  return aliases[key] || key.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, (c) => c.toUpperCase());
};

const FeatureShell = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const config = configs[localStorage.getItem("user_type")] || configs["4"];
  const title = useMemo(() => getTitle(location.pathname), [location.pathname]);

  if (dashboardPaths.has(location.pathname)) return children;

  const logout = () => {
    ["access_token", "user_code", "user_type"].forEach((key) => localStorage.removeItem(key));
    navigate("/login");
  };

  const Navigation = () => (
    <>
      <button onClick={() => { navigate("/"); setOpen(false); }} className="tw-flex tw-h-20 tw-w-full tw-items-center tw-gap-3 tw-border-0 tw-border-b tw-border-solid tw-border-slate-100 tw-bg-transparent tw-px-5 tw-text-left">
        <img src={brandLogo} alt="ePathshala" className="tw-h-12 tw-w-12 tw-object-contain" />
        <div><p className="tw-m-0 tw-font-['Manrope'] tw-font-extrabold tw-text-slate-950">ePathshala</p><p className="tw-m-0 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.16em] tw-text-slate-400">{config.role}</p></div>
      </button>
      <nav className="tw-flex-1 tw-p-3">
        <button onClick={() => navigate(config.home)} className="tw-mb-4 tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-bg-indigo-50 tw-px-3 tw-py-3 tw-text-left tw-text-sm tw-font-bold tw-text-indigo-700"><Home size={18} /> Dashboard</button>
        <p className="tw-mb-2 tw-px-3 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-slate-400">Quick access</p>
        {config.links.map(([label, path, Icon]) => <button key={path} onClick={() => { navigate(path); setOpen(false); }} className={`tw-mb-1 tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-px-3 tw-py-3 tw-text-left tw-text-sm tw-font-semibold ${location.pathname === path ? "tw-bg-slate-900 tw-text-white" : "tw-bg-transparent tw-text-slate-500 hover:tw-bg-slate-50"}`}><Icon size={18} /> {label}</button>)}
      </nav>
      <div className="tw-border-0 tw-border-t tw-border-solid tw-border-slate-100 tw-p-3"><button onClick={logout} className="tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-bg-transparent tw-px-3 tw-py-3 tw-text-sm tw-font-bold tw-text-slate-500 hover:tw-bg-rose-50 hover:tw-text-rose-600"><LogOut size={18} /> Sign out</button></div>
    </>
  );

  return (
    <div className="tw-min-h-screen tw-bg-[#f4f7fb]">
      <aside className="tw-fixed tw-inset-y-0 tw-left-0 tw-z-30 tw-hidden tw-w-[240px] tw-flex-col tw-border-0 tw-border-r tw-border-solid tw-border-slate-200 tw-bg-white lg:tw-flex"><Navigation /></aside>
      <AnimatePresence>{open && <><motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="tw-fixed tw-inset-0 tw-z-40 tw-border-0 tw-bg-slate-950/35 lg:tw-hidden" /><motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="tw-fixed tw-inset-y-0 tw-left-0 tw-z-50 tw-flex tw-w-[275px] tw-flex-col tw-bg-white lg:tw-hidden"><button onClick={() => setOpen(false)} className="tw-absolute tw-right-3 tw-top-5 tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-xl tw-border-0 tw-bg-slate-100"><X size={18} /></button><Navigation /></motion.aside></>}</AnimatePresence>
      <div className="lg:tw-pl-[240px]">
        <header className="tw-sticky tw-top-0 tw-z-20 tw-flex tw-h-20 tw-items-center tw-justify-between tw-border-0 tw-border-b tw-border-solid tw-border-slate-200 tw-bg-white/90 tw-px-4 tw-backdrop-blur-xl sm:tw-px-7">
          <div className="tw-flex tw-items-center tw-gap-3"><button onClick={() => setOpen(true)} className="tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white lg:tw-hidden"><Menu size={20} /></button><button onClick={() => navigate(-1)} className="tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-text-slate-500"><ArrowLeft size={19} /></button><div><p className="tw-m-0 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-indigo-600">{config.role} workspace</p><h1 className="tw-m-0 tw-font-['Manrope'] tw-text-lg tw-font-extrabold tw-text-slate-950 sm:tw-text-xl">{title}</h1></div></div>
          <div className="tw-flex tw-items-center tw-gap-2"><button className="tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-text-slate-500"><Bell size={18} /></button><button onClick={logout} title="Sign out" aria-label="Sign out" className="tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-rose-100 tw-bg-rose-50 tw-text-rose-600 hover:tw-bg-rose-100"><LogOut size={18} /></button></div>
        </header>
        <main className="modern-route-content tw-mx-auto tw-w-full tw-max-w-[1500px] tw-p-4 sm:tw-p-7 lg:tw-p-8"><motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>{children}</motion.div></main>
      </div>
    </div>
  );
};

export default FeatureShell;
