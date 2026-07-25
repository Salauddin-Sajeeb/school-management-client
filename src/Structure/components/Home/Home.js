import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, BellRing, BookOpenCheck, CalendarCheck,
  CheckCircle2, ChevronRight, ClipboardCheck, CreditCard, FileCheck2,
  GraduationCap, Home as HomeIcon, LibraryBig, Megaphone, ShieldCheck,
  Sparkles, Timer, UserCog, UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import brandLogo from "../../../logo.svg";
import ThreeScene from "../ThreeScene/ThreeScene";

const features = [
  { icon: CalendarCheck, title: "One academic rhythm", text: "Timetables, attendance, homework and calendars stay connected across every role." },
  { icon: BarChart3, title: "Clarity at a glance", text: "Turn daily school activity into focused information leaders can act on." },
  { icon: UsersRound, title: "Built for everyone", text: "Purposeful workspaces for administrators, teachers, students and families." },
];

const roles = [
  ["School leaders", "Organize people, classes, exams, payments and communication."],
  ["Teachers", "Move from attendance to homework and assessment without losing focus."],
  ["Students & families", "See the day ahead, important updates and learning progress."],
];

const modules = [
  { icon: CalendarCheck, title: "Routine & calendar", text: "Keep classes, periods and academic events in one dependable rhythm.", tone: "tw-bg-violet-50 tw-text-violet-700" },
  { icon: ClipboardCheck, title: "Attendance", text: "Record attendance and make student absence information easy to review.", tone: "tw-bg-emerald-50 tw-text-emerald-700" },
  { icon: BookOpenCheck, title: "Homework", text: "Create, share, submit and review learning tasks from role-specific views.", tone: "tw-bg-blue-50 tw-text-blue-700" },
  { icon: FileCheck2, title: "Exams & results", text: "Manage examinations, mark entry, grade sheets and student evaluation.", tone: "tw-bg-amber-50 tw-text-amber-700" },
  { icon: Megaphone, title: "Notices", text: "Publish school and classroom updates to the people who need them.", tone: "tw-bg-rose-50 tw-text-rose-700" },
  { icon: CreditCard, title: "Payments", text: "Give students a clear view of due, paid and payment-option information.", tone: "tw-bg-cyan-50 tw-text-cyan-700" },
  { icon: LibraryBig, title: "Learning resources", text: "Bring together library items, e-books, e-school and important links.", tone: "tw-bg-indigo-50 tw-text-indigo-700" },
  { icon: UserCog, title: "People & structure", text: "Organize schools, classes, sections, subjects, teachers and students.", tone: "tw-bg-slate-100 tw-text-slate-700" },
];

const workflow = [
  ["Plan", "Build the academic structure, calendar and class routine."],
  ["Teach", "Share homework, resources, notices and daily direction."],
  ["Track", "Capture attendance, marks, grades and student progress."],
  ["Connect", "Give every role a focused view of the same school day."],
];

const roleShowcases = [
  { label: "Administrator", headline: "Lead the whole school from one calm view.", text: "Coordinate academic structure, people, exams, notices, routines and payments.", items: ["School structure", "Student & teacher records", "Academic operations"] },
  { label: "Teacher", headline: "Spend less time navigating and more time teaching.", text: "Move through routines, attendance, homework, notices and mark entry without losing context.", items: ["Daily class routine", "Attendance & homework", "Marks and evaluations"] },
  { label: "Student", headline: "Know what matters today—and what comes next.", text: "A focused space for classes, tasks, attendance, results, notices and learning resources.", items: ["Homework & calendar", "Results & attendance", "Resources & payments"] },
  { label: "Family", headline: "Stay connected to the student journey.", text: "Review school updates, routines, attendance, homework and evaluation through a clear viewer experience.", items: ["Relevant notices", "Progress visibility", "Academic schedule"] },
];

const questions = [
  ["Who can use ePathshala?", "The current project includes dedicated experiences for super administrators, school administrators, teachers, students and parent/viewer accounts."],
  ["Does every role see the same information?", "No. Navigation and tools are organized around each role so users see the workflows relevant to their responsibilities."],
  ["Which academic workflows are included?", "The project covers routines, calendars, attendance, homework, examinations, results, notices, learning resources and student payments."],
  ["Will it work on phones and tablets?", "The redesigned interface uses responsive layouts, mobile navigation and touch-friendly controls across the home page and shared application shell."],
];

const demoViews = [
  { key: "dashboard", label: "Dashboard", icon: HomeIcon, title: "Good morning, Ayesha", subtitle: "Here is what is happening across your school today." },
  { key: "attendance", label: "Attendance", icon: ClipboardCheck, title: "Attendance overview", subtitle: "Follow daily presence and spot students needing attention." },
  { key: "routine", label: "Routine", icon: CalendarCheck, title: "Weekly class routine", subtitle: "Keep periods, rooms and teachers aligned throughout the week." },
  { key: "homework", label: "Homework", icon: BookOpenCheck, title: "Homework workspace", subtitle: "Publish learning tasks and follow the submission journey." },
  { key: "results", label: "Results", icon: BarChart3, title: "Results & progress", subtitle: "Review assessment performance in a clear student-focused view." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [activeDemo, setActiveDemo] = useState("dashboard");
  const role = roleShowcases[activeRole];
  const demo = demoViews.find(({ key }) => key === activeDemo);

  return (
  <main className="tw-min-h-screen tw-overflow-hidden tw-bg-[#f7f8fc] tw-text-slate-950">
    <nav className="tw-fixed tw-inset-x-0 tw-top-0 tw-z-50 tw-border-0 tw-border-b tw-border-solid tw-border-white/60 tw-bg-white/80 tw-backdrop-blur-xl">
      <div className="tw-mx-auto tw-flex tw-h-20 tw-max-w-[1240px] tw-items-center tw-justify-between tw-px-5 sm:tw-px-8">
        <Link to="/" className="tw-flex tw-items-center tw-gap-3 tw-text-slate-950 tw-no-underline">
          <img src={brandLogo} alt="ePathshala home" className="tw-h-14 tw-w-14 tw-object-contain" />
          <span><strong className="tw-block tw-font-['Manrope'] tw-text-lg tw-font-extrabold">ePathshala</strong><small className="tw-block tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-slate-400">School management</small></span>
        </Link>
        <div className="tw-hidden tw-items-center tw-gap-8 md:tw-flex">
          <a href="#platform" className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-no-underline hover:tw-text-indigo-700">Platform</a>
          <a href="#modules" className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-no-underline hover:tw-text-indigo-700">Modules</a>
          <a href="#demo" className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-no-underline hover:tw-text-indigo-700">Live preview</a>
          <a href="#community" className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-no-underline hover:tw-text-indigo-700">Community</a>
          <a href="#why-us" className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-no-underline hover:tw-text-indigo-700">Why ePathshala</a>
        </div>
        <Link to="/login" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-xl tw-bg-slate-950 tw-px-4 tw-py-3 tw-text-sm tw-font-bold tw-text-white tw-no-underline tw-shadow-lg hover:tw-bg-indigo-700">
          Sign in <ArrowRight size={16} />
        </Link>
      </div>
    </nav>

    <section className="tw-relative tw-flex tw-min-h-[760px] tw-items-center tw-overflow-hidden tw-bg-gradient-to-br tw-from-[#100d47] tw-via-[#292081] tw-to-[#147fa7] tw-pb-20 tw-pt-32 tw-text-white">
      <ThreeScene />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_24%_42%,rgba(99,102,241,.25),transparent_38%),linear-gradient(to_top,rgba(7,10,35,.7),transparent)]" />
      <div className="tw-relative tw-z-10 tw-mx-auto tw-grid tw-w-full tw-max-w-[1240px] tw-items-center tw-gap-12 tw-px-5 sm:tw-px-8 lg:tw-grid-cols-[1.1fr_.9fr]">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
          <motion.span variants={fadeUp} className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-solid tw-border-white/20 tw-bg-white/10 tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-backdrop-blur-lg"><Sparkles size={15} /> A calmer way to run your school</motion.span>
          <motion.h1 variants={fadeUp} className="tw-mb-0 tw-mt-7 tw-max-w-3xl tw-font-['Manrope'] tw-text-5xl tw-font-extrabold tw-leading-[1.04] sm:tw-text-6xl xl:tw-text-7xl">Every school day, beautifully connected.</motion.h1>
          <motion.p variants={fadeUp} className="tw-mb-0 tw-mt-6 tw-max-w-2xl tw-text-base tw-leading-8 tw-text-indigo-100 sm:tw-text-lg">One modern workspace where school leaders, teachers, students and families move learning forward together.</motion.p>
          <motion.div variants={fadeUp} className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
            <Link to="/login" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-2xl tw-bg-[#ffb52e] tw-px-6 tw-py-4 tw-font-extrabold tw-text-slate-950 tw-no-underline tw-shadow-xl hover:tw-bg-amber-300">Enter your workspace <ArrowRight size={19} /></Link>
            <a href="#platform" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-2xl tw-border tw-border-solid tw-border-white/25 tw-bg-white/10 tw-px-6 tw-py-4 tw-font-bold tw-text-white tw-no-underline tw-backdrop-blur-lg hover:tw-bg-white/20">Explore the platform</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="tw-relative tw-hidden lg:tw-block">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="tw-absolute -tw-left-16 tw-top-12 tw-z-20 tw-rounded-2xl tw-border tw-border-solid tw-border-white/20 tw-bg-white/90 tw-px-4 tw-py-3 tw-text-sm tw-font-extrabold tw-text-indigo-800 tw-shadow-xl tw-backdrop-blur-xl"><span className="tw-mr-2 tw-inline-block tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-500" />Live school pulse</motion.div>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 5, repeat: Infinity }} className="tw-absolute -tw-bottom-7 -tw-right-5 tw-z-20 tw-rounded-2xl tw-border tw-border-solid tw-border-white/20 tw-bg-slate-950/80 tw-px-4 tw-py-3 tw-text-xs tw-font-bold tw-text-white tw-shadow-xl tw-backdrop-blur-xl">5 roles · one connected day</motion.div>
          <div className="tw-rounded-[32px] tw-border tw-border-solid tw-border-white/15 tw-bg-white/10 tw-p-5 tw-shadow-2xl tw-backdrop-blur-xl">
            <div className="tw-rounded-[24px] tw-bg-white tw-p-6 tw-text-slate-950">
              <div className="tw-flex tw-items-center tw-justify-between"><div><p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-widest tw-text-indigo-600">Today at school</p><h2 className="tw-mb-0 tw-mt-1 tw-font-['Manrope'] tw-text-2xl tw-font-extrabold">A focused day ahead</h2></div><span className="tw-grid tw-h-12 tw-w-12 tw-place-items-center tw-rounded-2xl tw-bg-amber-100 tw-text-amber-600"><GraduationCap /></span></div>
              <div className="tw-mt-7 tw-grid tw-grid-cols-2 tw-gap-3">{[["92%", "Attendance"], ["8", "Classes today"], ["14", "Assignments"], ["3", "New notices"]].map(([value, label]) => <div key={label} className="tw-rounded-2xl tw-bg-slate-50 tw-p-4"><strong className="tw-block tw-text-2xl tw-font-extrabold">{value}</strong><span className="tw-text-xs tw-font-semibold tw-text-slate-500">{label}</span></div>)}</div>
              <div className="tw-mt-5 tw-rounded-2xl tw-bg-indigo-50 tw-p-4"><p className="tw-m-0 tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-bold tw-text-indigo-900"><CheckCircle2 size={18} /> All systems ready for learning</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="tw-relative tw-z-20 tw-mx-auto -tw-mt-10 tw-max-w-[1100px] tw-px-5 sm:tw-px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="tw-grid tw-overflow-hidden tw-rounded-[26px] tw-border tw-border-solid tw-border-slate-200/80 tw-bg-white tw-shadow-2xl sm:tw-grid-cols-3">
        {[["5", "purpose-built role workspaces"], ["8", "connected core workflows"], ["1", "shared school experience"]].map(([value, label], index) => <div key={label} className={`tw-flex tw-items-center tw-gap-4 tw-p-6 sm:tw-p-7 ${index ? "tw-border-0 tw-border-t tw-border-solid tw-border-slate-100 sm:tw-border-l sm:tw-border-t-0" : ""}`}><strong className="tw-font-['Manrope'] tw-text-4xl tw-font-extrabold tw-text-indigo-700">{value}</strong><span className="tw-max-w-36 tw-text-sm tw-font-semibold tw-leading-5 tw-text-slate-500">{label}</span></div>)}
      </motion.div>
    </section>

    <section id="platform" className="tw-mx-auto tw-max-w-[1240px] tw-px-5 tw-py-24 sm:tw-px-8">
      <div className="tw-mx-auto tw-mb-12 tw-max-w-2xl tw-text-center"><p className="tw-m-0 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600">Designed around the school day</p><h2 className="tw-mb-0 tw-mt-3 tw-font-['Manrope'] tw-text-4xl tw-font-extrabold">Less switching. More meaningful progress.</h2><p className="tw-mb-0 tw-mt-4 tw-leading-7 tw-text-slate-500">The system brings everyday academic and operational work into a consistent, responsive experience.</p></div>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="tw-grid tw-gap-5 md:tw-grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => <motion.article variants={fadeUp} whileHover={{ y: -6 }} key={title} className="tw-rounded-[26px] tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-p-7 tw-shadow-soft"><span className="tw-grid tw-h-13 tw-w-13 tw-place-items-center tw-rounded-2xl tw-bg-indigo-50 tw-text-indigo-700"><Icon size={25} /></span><h2 className="tw-mb-0 tw-mt-6 tw-font-['Manrope'] tw-text-xl tw-font-extrabold">{title}</h2><p className="tw-mb-0 tw-mt-3 tw-leading-7 tw-text-slate-500">{text}</p></motion.article>)}
      </motion.div>
    </section>

    <section id="modules" className="tw-bg-slate-950 tw-py-24 tw-text-white">
      <div className="tw-mx-auto tw-max-w-[1240px] tw-px-5 sm:tw-px-8">
        <div className="tw-flex tw-flex-col tw-justify-between tw-gap-5 lg:tw-flex-row lg:tw-items-end">
          <div><p className="tw-m-0 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-amber-300">Inside ePathshala</p><h2 className="tw-mb-0 tw-mt-3 tw-max-w-2xl tw-font-['Manrope'] tw-text-4xl tw-font-extrabold">Everything your project already brings together.</h2></div>
          <p className="tw-m-0 tw-max-w-md tw-leading-7 tw-text-slate-400">Eight connected areas turn scattered school tasks into one coherent digital workspace.</p>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={{ show: { transition: { staggerChildren: 0.05 } } }} className="tw-mt-12 tw-grid tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
          {modules.map(({ icon: Icon, title, text, tone }) => <motion.article variants={fadeUp} whileHover={{ y: -5 }} key={title} className="tw-rounded-[24px] tw-border tw-border-solid tw-border-white/10 tw-bg-white/[.06] tw-p-6 tw-backdrop-blur-lg"><span className={`tw-grid tw-h-12 tw-w-12 tw-place-items-center tw-rounded-2xl ${tone}`}><Icon size={23} /></span><h3 className="tw-mb-0 tw-mt-5 tw-font-['Manrope'] tw-text-lg tw-font-extrabold">{title}</h3><p className="tw-mb-0 tw-mt-2 tw-text-sm tw-leading-6 tw-text-slate-400">{text}</p></motion.article>)}
        </motion.div>
      </div>
    </section>

    <section className="tw-py-24">
      <div className="tw-mx-auto tw-grid tw-max-w-[1240px] tw-gap-14 tw-px-5 sm:tw-px-8 lg:tw-grid-cols-[1fr_1.05fr] lg:tw-items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tw-relative tw-overflow-hidden tw-rounded-[30px] tw-bg-gradient-to-br tw-from-indigo-700 tw-to-cyan-600 tw-p-6 tw-shadow-2xl sm:tw-p-9">
          <div className="tw-absolute -tw-right-16 -tw-top-16 tw-h-48 tw-w-48 tw-rounded-full tw-bg-white/10 tw-blur-2xl" />
          <div className="tw-relative tw-rounded-[22px] tw-bg-white tw-p-5">
            <div className="tw-flex tw-items-center tw-justify-between"><div><p className="tw-m-0 tw-text-[10px] tw-font-extrabold tw-uppercase tw-tracking-widest tw-text-indigo-600">Monday overview</p><h3 className="tw-mb-0 tw-mt-1 tw-font-['Manrope'] tw-text-xl tw-font-extrabold">School pulse</h3></div><BellRing className="tw-text-indigo-600" /></div>
            <div className="tw-mt-5 tw-h-2 tw-overflow-hidden tw-rounded-full tw-bg-slate-100"><motion.div initial={{ width: 0 }} whileInView={{ width: "86%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="tw-h-full tw-rounded-full tw-bg-gradient-to-r tw-from-indigo-600 tw-to-cyan-500" /></div>
            <div className="tw-mt-5 tw-grid tw-gap-3">{[["08:30", "Morning attendance", "Ready"], ["10:15", "Science homework", "Published"], ["13:00", "Academic calendar", "Updated"]].map(([time, item, status]) => <div key={item} className="tw-flex tw-items-center tw-gap-3 tw-rounded-xl tw-bg-slate-50 tw-p-3"><span className="tw-text-xs tw-font-extrabold tw-text-slate-400">{time}</span><span className="tw-flex-1 tw-text-sm tw-font-bold">{item}</span><span className="tw-rounded-full tw-bg-emerald-100 tw-px-2.5 tw-py-1 tw-text-[10px] tw-font-extrabold tw-text-emerald-700">{status}</span></div>)}</div>
          </div>
        </motion.div>
        <div>
          <p className="tw-m-0 tw-flex tw-items-center tw-gap-2 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600"><Timer size={16} /> From plan to progress</p>
          <h2 className="tw-mb-0 tw-mt-3 tw-font-['Manrope'] tw-text-4xl tw-font-extrabold">A connected flow for every academic day.</h2>
          <div className="tw-mt-8 tw-grid tw-gap-6">{workflow.map(([title, text], index) => <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} key={title} className="tw-flex tw-gap-4"><span className="tw-grid tw-h-10 tw-w-10 tw-shrink-0 tw-place-items-center tw-rounded-xl tw-bg-amber-100 tw-font-extrabold tw-text-amber-700">{index + 1}</span><div><h3 className="tw-m-0 tw-font-['Manrope'] tw-text-lg tw-font-extrabold">{title}</h3><p className="tw-mb-0 tw-mt-1 tw-leading-6 tw-text-slate-500">{text}</p></div></motion.div>)}</div>
        </div>
      </div>
    </section>

    <section id="demo" className="tw-relative tw-overflow-hidden tw-bg-white tw-py-24">
      <div className="tw-absolute tw-left-1/2 tw-top-20 tw-h-96 tw-w-96 -tw-translate-x-1/2 tw-rounded-full tw-bg-indigo-100/60 tw-blur-3xl" />
      <div className="tw-relative tw-z-10 tw-mx-auto tw-max-w-[1320px] tw-px-4 sm:tw-px-8">
        <div className="tw-mx-auto tw-max-w-3xl tw-text-center">
          <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-emerald-50 tw-px-4 tw-py-2 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.18em] tw-text-emerald-700"><span className="tw-h-2 tw-w-2 tw-animate-pulse tw-rounded-full tw-bg-emerald-500" /> Interactive product tour</span>
          <h2 className="tw-mb-0 tw-mt-5 tw-font-['Manrope'] tw-text-4xl tw-font-extrabold sm:tw-text-5xl">See what is waiting inside.</h2>
          <p className="tw-mb-0 tw-mt-4 tw-text-base tw-leading-7 tw-text-slate-500">Explore five core areas using a realistic, privacy-safe preview. No account or login required.</p>
        </div>

        <div className="tw-mx-auto tw-mt-9 tw-flex tw-max-w-4xl tw-gap-2 tw-overflow-x-auto tw-pb-2">
          {demoViews.map(({ key, label, icon: Icon }) => <button key={key} onClick={() => setActiveDemo(key)} className={`tw-flex tw-shrink-0 tw-items-center tw-gap-2 tw-rounded-xl tw-border tw-border-solid tw-px-4 tw-py-3 tw-text-sm tw-font-extrabold tw-transition ${activeDemo === key ? "tw-border-indigo-600 tw-bg-indigo-600 tw-text-white tw-shadow-lg tw-shadow-indigo-200" : "tw-border-slate-200 tw-bg-white tw-text-slate-500 hover:tw-border-indigo-200 hover:tw-text-indigo-700"}`}><Icon size={17} />{label}</button>)}
        </div>

        <motion.div layout className="tw-mt-7 tw-overflow-hidden tw-rounded-[26px] tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-shadow-2xl">
          <div className="tw-flex tw-h-12 tw-items-center tw-gap-2 tw-border-0 tw-border-b tw-border-solid tw-border-slate-200 tw-bg-slate-50 tw-px-4">
            <span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-rose-400" /><span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-amber-400" /><span className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-emerald-400" />
            <div className="tw-mx-auto tw-hidden tw-w-1/2 tw-rounded-lg tw-bg-white tw-px-4 tw-py-1.5 tw-text-center tw-text-[10px] tw-font-semibold tw-text-slate-400 sm:tw-block">app.epathshala.edu/{activeDemo}</div>
          </div>
          <div className="tw-flex tw-min-h-[610px] tw-bg-[#f4f7fb]">
            <aside className="tw-hidden tw-w-56 tw-shrink-0 tw-border-0 tw-border-r tw-border-solid tw-border-slate-200 tw-bg-white tw-p-4 md:tw-block">
              <div className="tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-3"><img src={brandLogo} alt="" className="tw-h-10 tw-w-10 tw-object-contain" /><div><strong className="tw-block tw-text-sm">ePathshala</strong><span className="tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-wider tw-text-slate-400">School admin</span></div></div>
              <div className="tw-mt-5 tw-grid tw-gap-1">{demoViews.map(({ key, label, icon: Icon }) => <button key={key} onClick={() => setActiveDemo(key)} className={`tw-flex tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-px-3 tw-py-3 tw-text-left tw-text-xs tw-font-bold ${activeDemo === key ? "tw-bg-indigo-50 tw-text-indigo-700" : "tw-bg-transparent tw-text-slate-500"}`}><Icon size={16} />{label}</button>)}</div>
            </aside>
            <div className="tw-min-w-0 tw-flex-1">
              <header className="tw-flex tw-h-16 tw-items-center tw-justify-between tw-border-0 tw-border-b tw-border-solid tw-border-slate-200 tw-bg-white tw-px-4 sm:tw-px-6"><div><span className="tw-block tw-text-[9px] tw-font-extrabold tw-uppercase tw-tracking-widest tw-text-indigo-600">School admin workspace</span><strong className="tw-block tw-text-sm sm:tw-text-base">{demo.label}</strong></div><span className="tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-xl tw-bg-indigo-100 tw-text-xs tw-font-extrabold tw-text-indigo-700">AS</span></header>
              <motion.div key={activeDemo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="tw-p-4 sm:tw-p-6">
                <div><h3 className="tw-m-0 tw-font-['Manrope'] tw-text-xl tw-font-extrabold sm:tw-text-2xl">{demo.title}</h3><p className="tw-mb-0 tw-mt-1 tw-text-xs tw-text-slate-500 sm:tw-text-sm">{demo.subtitle}</p></div>

                {activeDemo === "dashboard" && <div className="tw-mt-6"><div className="tw-grid tw-grid-cols-2 tw-gap-3 xl:tw-grid-cols-4">{[["1,248", "Active students", "tw-bg-indigo-100 tw-text-indigo-700"], ["78", "Teaching staff", "tw-bg-cyan-100 tw-text-cyan-700"], ["94%", "Attendance today", "tw-bg-emerald-100 tw-text-emerald-700"], ["12", "New notices", "tw-bg-amber-100 tw-text-amber-700"]].map(([value, label, tone]) => <div key={label} className="tw-rounded-2xl tw-bg-white tw-p-4 tw-shadow-sm"><span className={`tw-mb-4 tw-block tw-h-2 tw-w-8 tw-rounded-full ${tone.split(" ")[0]}`} /><strong className="tw-block tw-text-2xl tw-font-extrabold">{value}</strong><span className="tw-text-[11px] tw-font-semibold tw-text-slate-400">{label}</span></div>)}</div><div className="tw-mt-4 tw-grid tw-gap-4 xl:tw-grid-cols-[1.5fr_1fr]"><div className="tw-rounded-2xl tw-bg-white tw-p-5 tw-shadow-sm"><strong className="tw-text-sm">Weekly attendance</strong><div className="tw-mt-7 tw-flex tw-h-36 tw-items-end tw-justify-around tw-gap-3">{[72, 88, 80, 94, 86].map((height, index) => <div key={height + index} className="tw-flex tw-h-full tw-flex-1 tw-flex-col tw-justify-end tw-gap-2"><motion.div initial={{ height: 0 }} animate={{ height: `${height}%` }} className="tw-rounded-t-lg tw-bg-gradient-to-t tw-from-indigo-600 tw-to-cyan-400" /><span className="tw-text-center tw-text-[9px] tw-font-bold tw-text-slate-400">{["SUN", "MON", "TUE", "WED", "THU"][index]}</span></div>)}</div></div><div className="tw-rounded-2xl tw-bg-slate-950 tw-p-5 tw-text-white"><span className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-widest tw-text-amber-300">Next event</span><h4 className="tw-mb-0 tw-mt-3 tw-text-lg tw-font-extrabold">Parent–teacher meeting</h4><p className="tw-mb-0 tw-mt-2 tw-text-xs tw-leading-5 tw-text-slate-400">Saturday · 10:00 AM<br />School auditorium</p></div></div></div>}

                {activeDemo === "attendance" && <div className="tw-mt-6 tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-shadow-sm"><div className="tw-grid tw-grid-cols-[1.3fr_.7fr_.7fr] tw-bg-slate-50 tw-p-4 tw-text-[10px] tw-font-extrabold tw-uppercase tw-tracking-wider tw-text-slate-400"><span>Class</span><span>Present</span><span>Status</span></div>{[["Grade 6 · A", "36 / 38", "95%"], ["Grade 7 · B", "31 / 35", "89%"], ["Grade 8 · A", "39 / 40", "98%"], ["Grade 9 · C", "32 / 37", "86%"]].map(([className, count, percent]) => <div key={className} className="tw-grid tw-grid-cols-[1.3fr_.7fr_.7fr] tw-items-center tw-border-0 tw-border-t tw-border-solid tw-border-slate-100 tw-p-4 tw-text-xs"><strong>{className}</strong><span className="tw-text-slate-500">{count}</span><span className="tw-font-extrabold tw-text-emerald-600">{percent}</span></div>)}</div>}

                {activeDemo === "routine" && <div className="tw-mt-6 tw-overflow-x-auto tw-rounded-2xl tw-bg-white tw-p-4 tw-shadow-sm"><div className="tw-grid tw-min-w-[620px] tw-grid-cols-5 tw-gap-2">{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"].map((day, dayIndex) => <div key={day}><strong className="tw-mb-3 tw-block tw-text-center tw-text-xs">{day}</strong>{["Mathematics", "English", "Science"].map((subject, index) => <div key={subject} className={`tw-mb-2 tw-rounded-xl tw-p-3 ${["tw-bg-indigo-50 tw-text-indigo-800", "tw-bg-amber-50 tw-text-amber-800", "tw-bg-cyan-50 tw-text-cyan-800"][(index + dayIndex) % 3]}`}><strong className="tw-block tw-text-[11px]">{subject}</strong><span className="tw-text-[9px]">{9 + index}:00 · R{dayIndex + 1}0{index + 1}</span></div>)}</div>)}</div></div>}

                {activeDemo === "homework" && <div className="tw-mt-6 tw-grid tw-gap-3 sm:tw-grid-cols-2">{[["Physics", "Chapter 4 exercises", "Due tomorrow", "18 / 24"], ["English", "Essay: My community", "Due 28 July", "21 / 24"], ["Mathematics", "Algebra worksheet", "Due 30 July", "16 / 24"], ["ICT", "Presentation slides", "Due 02 August", "12 / 24"]].map(([subject, task, due, submitted]) => <div key={task} className="tw-rounded-2xl tw-bg-white tw-p-4 tw-shadow-sm"><span className="tw-text-[10px] tw-font-extrabold tw-uppercase tw-tracking-wider tw-text-indigo-600">{subject}</span><h4 className="tw-mb-0 tw-mt-2 tw-text-sm tw-font-extrabold">{task}</h4><div className="tw-mt-5 tw-flex tw-justify-between tw-text-[10px] tw-font-bold tw-text-slate-400"><span>{due}</span><span>{submitted} submitted</span></div></div>)}</div>}

                {activeDemo === "results" && <div className="tw-mt-6 tw-grid tw-gap-4 lg:tw-grid-cols-[1fr_1.4fr]"><div className="tw-rounded-2xl tw-bg-gradient-to-br tw-from-indigo-700 tw-to-cyan-500 tw-p-6 tw-text-white"><span className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-widest tw-text-indigo-100">Term average</span><strong className="tw-mt-3 tw-block tw-text-5xl tw-font-extrabold">86%</strong><span className="tw-mt-4 tw-inline-flex tw-rounded-full tw-bg-white/15 tw-px-3 tw-py-1 tw-text-[10px] tw-font-bold">Strong progress</span></div><div className="tw-rounded-2xl tw-bg-white tw-p-5 tw-shadow-sm"><strong className="tw-text-sm">Subject performance</strong><div className="tw-mt-5 tw-grid tw-gap-4">{[["Mathematics", 88], ["English", 82], ["Science", 91], ["ICT", 84]].map(([subject, score]) => <div key={subject}><div className="tw-mb-1 tw-flex tw-justify-between tw-text-[10px] tw-font-bold"><span>{subject}</span><span>{score}%</span></div><div className="tw-h-2 tw-rounded-full tw-bg-slate-100"><motion.div initial={{ width: 0 }} animate={{ width: `${score}%` }} className="tw-h-full tw-rounded-full tw-bg-indigo-600" /></div></div>)}</div></div></div>}
              </motion.div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-start tw-justify-between tw-gap-3 tw-border-0 tw-border-t tw-border-solid tw-border-slate-200 tw-bg-white tw-p-4 sm:tw-flex-row sm:tw-items-center sm:tw-px-6"><span className="tw-text-xs tw-font-semibold tw-text-slate-400">Preview data is illustrative and contains no real student information.</span><Link to="/login" className="tw-inline-flex tw-items-center tw-gap-2 tw-text-sm tw-font-extrabold tw-text-indigo-700 tw-no-underline">Open your real workspace <ChevronRight size={17} /></Link></div>
        </motion.div>
      </div>
    </section>

    <section id="community" className="tw-bg-white tw-py-24">
      <div className="tw-mx-auto tw-grid tw-max-w-[1240px] tw-gap-14 tw-px-5 sm:tw-px-8 lg:tw-grid-cols-[.8fr_1.2fr]">
        <div><p className="tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600">One connected community</p><h2 className="tw-font-['Manrope'] tw-text-4xl tw-font-extrabold tw-leading-tight">The right information, for the right person.</h2><p className="tw-leading-7 tw-text-slate-500">Each role sees a clear workspace shaped around what they need to accomplish—not a maze of unrelated tools.</p></div>
        <div className="tw-grid tw-gap-4">{roles.map(([title, text], index) => <motion.div whileHover={{ x: 5 }} key={title} className="tw-flex tw-gap-5 tw-rounded-2xl tw-bg-[#f7f8fc] tw-p-6"><span className="tw-grid tw-h-11 tw-w-11 tw-shrink-0 tw-place-items-center tw-rounded-xl tw-bg-slate-950 tw-font-extrabold tw-text-white">0{index + 1}</span><div><h3 className="tw-m-0 tw-font-['Manrope'] tw-text-lg tw-font-extrabold">{title}</h3><p className="tw-mb-0 tw-mt-1 tw-text-sm tw-leading-6 tw-text-slate-500">{text}</p></div></motion.div>)}</div>
      </div>
    </section>

    <section className="tw-overflow-hidden tw-bg-[#f7f8fc] tw-py-24">
      <div className="tw-mx-auto tw-max-w-[1240px] tw-px-5 sm:tw-px-8">
        <div className="tw-text-center"><p className="tw-m-0 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600">A workspace that adapts</p><h2 className="tw-mb-0 tw-mt-3 tw-font-['Manrope'] tw-text-4xl tw-font-extrabold">One platform. A better view for every role.</h2></div>
        <div className="tw-mx-auto tw-mt-10 tw-flex tw-max-w-3xl tw-flex-wrap tw-justify-center tw-gap-2">{roleShowcases.map(({ label }, index) => <button key={label} onClick={() => setActiveRole(index)} className={`tw-rounded-full tw-border tw-border-solid tw-px-5 tw-py-3 tw-text-sm tw-font-extrabold tw-transition ${activeRole === index ? "tw-border-slate-950 tw-bg-slate-950 tw-text-white tw-shadow-lg" : "tw-border-slate-200 tw-bg-white tw-text-slate-500 hover:tw-border-indigo-300 hover:tw-text-indigo-700"}`}>{label}</button>)}</div>
        <motion.div key={role.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="tw-mt-8 tw-grid tw-overflow-hidden tw-rounded-[32px] tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-shadow-xl lg:tw-grid-cols-[1fr_.9fr]">
          <div className="tw-p-8 sm:tw-p-12"><span className="tw-inline-flex tw-rounded-full tw-bg-indigo-50 tw-px-3 tw-py-1.5 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-wider tw-text-indigo-700">{role.label} workspace</span><h3 className="tw-mb-0 tw-mt-5 tw-max-w-xl tw-font-['Manrope'] tw-text-3xl tw-font-extrabold tw-leading-tight sm:tw-text-4xl">{role.headline}</h3><p className="tw-mb-0 tw-mt-4 tw-max-w-xl tw-leading-7 tw-text-slate-500">{role.text}</p><div className="tw-mt-7 tw-grid tw-gap-3">{role.items.map((item) => <div key={item} className="tw-flex tw-items-center tw-gap-3 tw-text-sm tw-font-bold tw-text-slate-700"><CheckCircle2 size={19} className="tw-text-emerald-500" />{item}</div>)}</div></div>
          <div className="tw-relative tw-min-h-[390px] tw-overflow-hidden tw-bg-gradient-to-br tw-from-[#211b70] tw-to-[#0f789e] tw-p-7">
            <div className="tw-absolute -tw-right-20 -tw-top-20 tw-h-64 tw-w-64 tw-rounded-full tw-border-[35px] tw-border-solid tw-border-white/10" />
            <div className="tw-relative tw-z-10 tw-rounded-[22px] tw-bg-white/95 tw-p-5 tw-shadow-2xl tw-backdrop-blur">
              <div className="tw-flex tw-items-center tw-gap-3"><span className="tw-grid tw-h-11 tw-w-11 tw-place-items-center tw-rounded-xl tw-bg-indigo-100 tw-text-indigo-700"><UserCog size={21} /></span><div><strong className="tw-block tw-text-sm">{role.label} overview</strong><span className="tw-text-xs tw-text-slate-400">Your day at a glance</span></div></div>
              <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-2">{["Today", "Upcoming", "Updates"].map((label, index) => <div key={label} className="tw-rounded-xl tw-bg-slate-50 tw-p-3"><strong className="tw-block tw-text-xl tw-text-indigo-700">{index * 3 + 2}</strong><span className="tw-text-[10px] tw-font-bold tw-text-slate-400">{label}</span></div>)}</div>
              <div className="tw-mt-4 tw-grid tw-gap-2">{role.items.map((item, index) => <div key={item} className="tw-flex tw-items-center tw-gap-3 tw-rounded-xl tw-border tw-border-solid tw-border-slate-100 tw-p-3"><span className={`tw-h-2.5 tw-w-2.5 tw-rounded-full ${index === 0 ? "tw-bg-amber-400" : index === 1 ? "tw-bg-cyan-500" : "tw-bg-indigo-500"}`} /><span className="tw-flex-1 tw-text-xs tw-font-bold">{item}</span><ArrowRight size={14} className="tw-text-slate-300" /></div>)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="tw-bg-white tw-py-24">
      <div className="tw-mx-auto tw-max-w-[1240px] tw-px-5 sm:tw-px-8">
        <div className="tw-grid tw-gap-4 lg:tw-grid-cols-3">
          {[["01", "Start the day informed", "See routines, calendars, notices and responsibilities without hunting across separate screens."], ["02", "Keep work moving", "Role-focused navigation helps each person move directly to the next important school task."], ["03", "Finish with clarity", "Attendance, homework, marks and updates stay available in the same connected environment."]].map(([number, title, text]) => <motion.article whileHover={{ y: -5 }} key={number} className="tw-group tw-relative tw-overflow-hidden tw-rounded-[28px] tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-p-7 tw-shadow-soft"><span className="tw-absolute -tw-right-2 -tw-top-5 tw-font-['Manrope'] tw-text-8xl tw-font-extrabold tw-text-slate-50 tw-transition group-hover:tw-text-indigo-50">{number}</span><div className="tw-relative"><span className="tw-text-xs tw-font-extrabold tw-text-indigo-600">OUTCOME {number}</span><h3 className="tw-mb-0 tw-mt-12 tw-font-['Manrope'] tw-text-2xl tw-font-extrabold">{title}</h3><p className="tw-mb-0 tw-mt-3 tw-leading-7 tw-text-slate-500">{text}</p></div></motion.article>)}
        </div>
      </div>
    </section>

    <section className="tw-bg-[#f7f8fc] tw-py-24">
      <div className="tw-mx-auto tw-grid tw-max-w-[1100px] tw-gap-12 tw-px-5 sm:tw-px-8 lg:tw-grid-cols-[.7fr_1.3fr]">
        <div><p className="tw-m-0 tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600">Questions, answered</p><h2 className="tw-mb-0 tw-mt-3 tw-font-['Manrope'] tw-text-4xl tw-font-extrabold">A clear platform starts with clear answers.</h2><p className="tw-mb-0 tw-mt-4 tw-leading-7 tw-text-slate-500">The experience is designed around the structure and workflows already supported by this school management project.</p></div>
        <div className="tw-grid tw-gap-3">{questions.map(([question, answer], index) => <details key={question} open={index === 0} className="tw-group tw-rounded-2xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-p-5 tw-shadow-sm"><summary className="tw-flex tw-cursor-pointer tw-list-none tw-items-center tw-justify-between tw-gap-4 tw-font-['Manrope'] tw-font-extrabold">{question}<span className="tw-grid tw-h-8 tw-w-8 tw-shrink-0 tw-place-items-center tw-rounded-full tw-bg-indigo-50 tw-text-lg tw-text-indigo-700 group-open:tw-rotate-45">+</span></summary><p className="tw-mb-0 tw-mt-4 tw-pr-10 tw-text-sm tw-leading-6 tw-text-slate-500">{answer}</p></details>)}</div>
      </div>
    </section>

    <section id="why-us" className="tw-mx-auto tw-max-w-[1240px] tw-px-5 tw-py-24 sm:tw-px-8">
      <div className="tw-relative tw-overflow-hidden tw-rounded-[32px] tw-bg-slate-950 tw-p-8 tw-text-white sm:tw-p-14">
        <div className="tw-absolute -tw-right-24 -tw-top-24 tw-h-72 tw-w-72 tw-rounded-full tw-bg-indigo-600/40 tw-blur-3xl" />
        <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-start tw-justify-between tw-gap-8 lg:tw-flex-row lg:tw-items-center"><div><p className="tw-m-0 tw-flex tw-items-center tw-gap-2 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[.2em] tw-text-amber-300"><ShieldCheck size={16} /> Secure role-based access</p><h2 className="tw-mb-0 tw-mt-3 tw-max-w-2xl tw-font-['Manrope'] tw-text-3xl tw-font-extrabold sm:tw-text-4xl">Ready to bring your school day into focus?</h2></div><Link to="/login" className="tw-inline-flex tw-shrink-0 tw-items-center tw-gap-2 tw-rounded-2xl tw-bg-white tw-px-6 tw-py-4 tw-font-extrabold tw-text-slate-950 tw-no-underline">Sign in now <ArrowRight size={18} /></Link></div>
      </div>
    </section>

    <footer className="tw-border-0 tw-border-t tw-border-solid tw-border-slate-200 tw-bg-white">
      <div className="tw-mx-auto tw-flex tw-max-w-[1240px] tw-flex-col tw-gap-3 tw-px-5 tw-py-8 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between sm:tw-px-8"><span className="tw-flex tw-items-center tw-gap-2 tw-font-extrabold"><BookOpenCheck size={19} className="tw-text-indigo-600" /> ePathshala</span><span className="tw-text-xs tw-text-slate-400">A connected workspace for modern school communities.</span></div>
    </footer>
  </main>
  );
};

export default Home;
