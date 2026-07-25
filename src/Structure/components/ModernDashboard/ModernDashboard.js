import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  ChevronRight,
  Command,
  LogOut,
  Menu,
  Search,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

const MotionButton = motion.button;

const NavContent = ({ actions, activeLabel, onNavigate, onLogout }) => (
  <>
    <div className="tw-flex tw-h-20 tw-items-center tw-gap-3 tw-px-5">
      <div className="tw-grid tw-h-11 tw-w-11 tw-place-items-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-indigo-500 tw-to-cyan-400 tw-text-white tw-shadow-lg">
        <Sparkles size={21} />
      </div>
      <div>
        <p className="tw-m-0 tw-font-['Manrope'] tw-text-[17px] tw-font-extrabold tw-text-slate-900">EduFlow</p>
        <p className="tw-m-0 tw-text-[11px] tw-font-semibold tw-uppercase tw-tracking-[0.18em] tw-text-slate-400">School OS</p>
      </div>
    </div>
    <nav className="tw-flex-1 tw-overflow-y-auto tw-px-3 tw-py-4">
      <p className="tw-mb-3 tw-px-3 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-slate-400">
        Workspace
      </p>
      <button className="tw-mb-1 tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-bg-indigo-50 tw-px-3 tw-py-3 tw-text-left tw-font-semibold tw-text-indigo-700">
        <Command size={18} /> Overview
      </button>
      {actions.map(({ label, icon: Icon, path }) => (
        <button
          key={label}
          onClick={() => onNavigate(path)}
          className={`tw-mb-1 tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-px-3 tw-py-3 tw-text-left tw-text-sm tw-font-medium tw-transition ${
            activeLabel === label
              ? "tw-bg-slate-100 tw-text-slate-900"
              : "tw-bg-transparent tw-text-slate-500 hover:tw-bg-slate-50 hover:tw-text-slate-900"
          }`}
        >
          <Icon size={18} /> {label}
        </button>
      ))}
    </nav>
    <div className="tw-border-0 tw-border-t tw-border-solid tw-border-slate-100 tw-p-3">
      <button
        onClick={onLogout}
        className="tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-bg-transparent tw-px-3 tw-py-3 tw-text-sm tw-font-semibold tw-text-slate-500 hover:tw-bg-rose-50 hover:tw-text-rose-600"
      >
        <LogOut size={18} /> Sign out
      </button>
    </div>
  </>
);

const ModernDashboard = ({
  role,
  schoolName,
  userName,
  userId,
  actions,
  navigate,
  profilePath,
  eyebrow = "Your workspace",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const onNavigate = (path) => {
    setMenuOpen(false);
    if (path) navigate(path);
  };
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_code");
    localStorage.removeItem("user_type");
    navigate("/login");
  };

  return (
    <div className="tw-min-h-screen tw-bg-[#f4f7fb] tw-text-slate-900">
      <aside className="tw-fixed tw-inset-y-0 tw-left-0 tw-z-30 tw-hidden tw-w-[250px] tw-flex-col tw-border-0 tw-border-r tw-border-solid tw-border-slate-200/70 tw-bg-white lg:tw-flex">
        <NavContent actions={actions} onNavigate={onNavigate} onLogout={logout} />
      </aside>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="tw-fixed tw-inset-0 tw-z-40 tw-border-0 tw-bg-slate-950/30 tw-backdrop-blur-sm lg:tw-hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="tw-fixed tw-inset-y-0 tw-left-0 tw-z-50 tw-flex tw-w-[275px] tw-flex-col tw-bg-white lg:tw-hidden"
            >
              <button onClick={() => setMenuOpen(false)} className="tw-absolute tw-right-3 tw-top-4 tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-xl tw-border-0 tw-bg-slate-100 tw-text-slate-500">
                <X size={18} />
              </button>
              <NavContent actions={actions} onNavigate={onNavigate} onLogout={logout} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="lg:tw-pl-[250px]">
        <header className="tw-sticky tw-top-0 tw-z-20 tw-flex tw-h-20 tw-items-center tw-justify-between tw-border-0 tw-border-b tw-border-solid tw-border-slate-200/70 tw-bg-white/85 tw-px-4 tw-backdrop-blur-xl sm:tw-px-7">
          <div className="tw-flex tw-items-center tw-gap-3">
            <button onClick={() => setMenuOpen(true)} className="tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-text-slate-600 lg:tw-hidden">
              <Menu size={20} />
            </button>
            <div className="tw-relative tw-hidden md:tw-block">
              <Search className="tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" size={17} />
              <input aria-label="Search workspace" placeholder="Search your workspace" className="tw-h-11 tw-w-72 tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-slate-50 tw-pl-10 tw-pr-4 tw-text-sm tw-outline-none focus:tw-border-indigo-400 focus:tw-bg-white" />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2 sm:tw-gap-3">
            <button className="tw-relative tw-grid tw-h-10 tw-w-10 tw-place-items-center tw-rounded-xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-text-slate-500">
              <Bell size={18} />
              <span className="tw-absolute tw-right-2 tw-top-2 tw-h-2 tw-w-2 tw-rounded-full tw-bg-rose-500 tw-ring-2 tw-ring-white" />
            </button>
            <button onClick={() => profilePath && navigate(profilePath)} className="tw-flex tw-items-center tw-gap-3 tw-rounded-xl tw-border-0 tw-bg-slate-50 tw-p-1.5 tw-pr-3 tw-text-left">
              <span className="tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-lg tw-bg-indigo-100 tw-text-indigo-700"><UserRound size={18} /></span>
              <span className="tw-hidden sm:tw-block">
                <span className="tw-block tw-max-w-32 tw-truncate tw-text-xs tw-font-bold">{userName || role}</span>
                <span className="tw-block tw-text-[10px] tw-font-semibold tw-uppercase tw-tracking-wider tw-text-slate-400">{role}</span>
              </span>
            </button>
          </div>
        </header>

        <main className="tw-mx-auto tw-max-w-[1440px] tw-p-4 sm:tw-p-7 xl:tw-p-10">
          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="tw-relative tw-overflow-hidden tw-rounded-[28px] tw-bg-gradient-to-br tw-from-indigo-700 tw-via-indigo-600 tw-to-cyan-500 tw-p-6 tw-text-white tw-shadow-soft sm:tw-p-9">
            <div className="tw-absolute -tw-right-16 -tw-top-24 tw-h-64 tw-w-64 tw-rounded-full tw-border-[36px] tw-border-solid tw-border-white/10" />
            <div className="tw-absolute tw-bottom-0 tw-right-1/4 tw-h-28 tw-w-28 tw-rounded-full tw-bg-white/10 tw-blur-2xl" />
            <div className="tw-relative tw-z-10 tw-max-w-2xl">
              <p className="tw-mb-3 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-indigo-100">{eyebrow} · {today}</p>
              <h1 className="tw-m-0 tw-font-['Manrope'] tw-text-3xl tw-font-extrabold tw-leading-tight sm:tw-text-4xl">
                Welcome back, {userName?.split(" ")[0] || role}
              </h1>
              <p className="tw-mb-0 tw-mt-3 tw-max-w-xl tw-text-sm tw-leading-6 tw-text-indigo-100 sm:tw-text-base">
                Everything you need for {schoolName || "your school"} is organized in one calm, focused workspace.
              </p>
            </div>
          </motion.section>

          <section className="tw-mt-8">
            <div className="tw-mb-5 tw-flex tw-items-end tw-justify-between">
              <div>
                <p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-indigo-600">Quick access</p>
                <h2 className="tw-mb-0 tw-mt-1 tw-font-['Manrope'] tw-text-2xl tw-font-extrabold tw-text-slate-900">Your school tools</h2>
              </div>
              {userId && <span className="tw-hidden tw-rounded-full tw-bg-white tw-px-4 tw-py-2 tw-text-xs tw-font-semibold tw-text-slate-500 tw-shadow-sm sm:tw-block">ID · {userId}</span>}
            </div>
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.055 } } }} className="tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 xl:tw-grid-cols-3">
              {actions.map(({ label, description, icon: Icon, path }) => (
                <MotionButton
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => onNavigate(path)}
                  className="tw-group tw-flex tw-min-h-32 tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-border-solid tw-border-slate-200/80 tw-bg-white tw-p-5 tw-text-left tw-shadow-soft tw-transition hover:tw-border-indigo-200"
                >
                  <span className="tw-grid tw-h-14 tw-w-14 tw-shrink-0 tw-place-items-center tw-rounded-2xl tw-bg-indigo-50 tw-text-indigo-600">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <span className="tw-min-w-0 tw-flex-1">
                    <span className="tw-block tw-font-['Manrope'] tw-text-base tw-font-extrabold tw-text-slate-900">{label}</span>
                    <span className="tw-mt-1 tw-block tw-text-sm tw-leading-5 tw-text-slate-500">{description}</span>
                  </span>
                  <ChevronRight className="tw-shrink-0 tw-text-slate-300 tw-transition group-hover:tw-translate-x-1 group-hover:tw-text-indigo-500" size={19} />
                </MotionButton>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ModernDashboard;
