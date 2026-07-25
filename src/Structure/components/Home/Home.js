import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, BellRing, BookOpenCheck, CalendarCheck,
  CheckCircle2, ClipboardCheck, CreditCard, FileCheck2, GraduationCap,
  LibraryBig, Megaphone, ShieldCheck, Sparkles, Timer, UserCog, UsersRound,
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

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const Home = () => (
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

    <section id="community" className="tw-bg-white tw-py-24">
      <div className="tw-mx-auto tw-grid tw-max-w-[1240px] tw-gap-14 tw-px-5 sm:tw-px-8 lg:tw-grid-cols-[.8fr_1.2fr]">
        <div><p className="tw-text-xs tw-font-extrabold tw-uppercase tw-tracking-[.2em] tw-text-indigo-600">One connected community</p><h2 className="tw-font-['Manrope'] tw-text-4xl tw-font-extrabold tw-leading-tight">The right information, for the right person.</h2><p className="tw-leading-7 tw-text-slate-500">Each role sees a clear workspace shaped around what they need to accomplish—not a maze of unrelated tools.</p></div>
        <div className="tw-grid tw-gap-4">{roles.map(([title, text], index) => <motion.div whileHover={{ x: 5 }} key={title} className="tw-flex tw-gap-5 tw-rounded-2xl tw-bg-[#f7f8fc] tw-p-6"><span className="tw-grid tw-h-11 tw-w-11 tw-shrink-0 tw-place-items-center tw-rounded-xl tw-bg-slate-950 tw-font-extrabold tw-text-white">0{index + 1}</span><div><h3 className="tw-m-0 tw-font-['Manrope'] tw-text-lg tw-font-extrabold">{title}</h3><p className="tw-mb-0 tw-mt-1 tw-text-sm tw-leading-6 tw-text-slate-500">{text}</p></div></motion.div>)}</div>
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

export default Home;
