import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, GraduationCap, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThreeScene from "../../components/ThreeScene/ThreeScene";

const destinations = {
  1: "/student-admin",
  2: "/teacher-admin",
  4: "/school-admin",
  5: "/super-admin",
  6: "/viewer-school",
};

const fetchWithTimeout = async (url, options = {}, timeoutMs = 15000) => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
};

const readJsonResponse = async (response, fallbackMessage) => {
  const responseText = await response.text();
  try {
    return responseText ? JSON.parse(responseText) : {};
  } catch {
    throw new Error(`${fallbackMessage} The server returned an invalid response.`);
  }
};

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [userCode, setUserCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const loginResponse = await fetchWithTimeout(`${process.env.REACT_APP_NODE_API}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_code: userCode, password }),
      });
      const loginData = await readJsonResponse(loginResponse, "Sign-in failed.");
      if (!loginData.accessToken || !loginData.user_type_id) {
        throw new Error(
          loginData.errorMsg ||
          loginData.message ||
          loginData.error ||
          `Sign-in failed${loginResponse.status ? ` (HTTP ${loginResponse.status})` : ""}.`
        );
      }

      const profileResponse = await fetchWithTimeout(
        `${process.env.REACT_APP_NODE_API}/api/users/user_id?user_code=${userCode}&user_type=${loginData.user_type_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: "bearer " + loginData.accessToken,
          },
        }
      );
      const profile = await readJsonResponse(profileResponse, "Unable to load your school profile.");
      if (!profile || profile.errorMsg || profile.error) {
        throw new Error(
          profile?.errorMsg ||
          profile?.message ||
          profile?.error ||
          "Your account was verified, but its school profile could not be found."
        );
      }
      localStorage.setItem("user_code", profile.id);
      localStorage.setItem("user_type", loginData.user_type_id);
      localStorage.setItem("u_id", loginData.user_code);
      localStorage.setItem("school_id", profile.school_id);
      localStorage.setItem("school_type", profile.school_type);
      localStorage.setItem("class", profile.class);
      localStorage.setItem("admin_code", profile.admin_code);
      localStorage.setItem("first_name", profile.first_name);
      localStorage.setItem("last_name", profile.last_name);
      localStorage.setItem("school_name", profile.school_name);
      localStorage.setItem("school_info_id", profile.school_info_id);
      localStorage.setItem("access_token", loginData.accessToken);
      setUser?.[0]?.(profile.id);
      setUser?.[1]?.(loginData.user_type_id);
      navigate(destinations[loginData.user_type_id] || "/login");
    } catch (error) {
      const isNetworkError = error instanceof TypeError;
      const isTimeout = error?.name === "AbortError";
      setErrorMsg(
        isTimeout
          ? "The login service timed out. The backend is online, but its login route or database is not responding."
          : isNetworkError
          ? "The school server is unavailable or blocked by CORS. Please contact the server administrator."
          : error.message || "Sign-in failed. Please check your account details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="tw-grid tw-min-h-screen tw-bg-white lg:tw-grid-cols-[1.08fr_0.92fr]">
      <section className="tw-relative tw-hidden tw-overflow-hidden tw-bg-gradient-to-br tw-from-[#17134f] tw-via-indigo-700 tw-to-cyan-500 tw-p-12 tw-text-white lg:tw-flex lg:tw-flex-col lg:tw-justify-between">
        <ThreeScene />
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-indigo-950/60 tw-via-transparent tw-to-transparent" />
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="tw-relative tw-z-10 tw-flex tw-items-center tw-gap-3">
          <span className="tw-grid tw-h-12 tw-w-12 tw-place-items-center tw-rounded-2xl tw-bg-white/15 tw-backdrop-blur-xl"><GraduationCap size={25} /></span>
          <div>
            <p className="tw-m-0 tw-font-['Manrope'] tw-text-xl tw-font-extrabold">EduFlow</p>
            <p className="tw-m-0 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.2em] tw-text-indigo-200">School OS</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="tw-relative tw-z-10 tw-max-w-xl">
          <span className="tw-mb-5 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-solid tw-border-white/20 tw-bg-white/10 tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-backdrop-blur-xl">
            <ShieldCheck size={15} /> One connected school community
          </span>
          <h1 className="tw-m-0 tw-font-['Manrope'] tw-text-5xl tw-font-extrabold tw-leading-[1.12] xl:tw-text-6xl">
            Learning moves better when everything flows.
          </h1>
          <p className="tw-mb-0 tw-mt-6 tw-max-w-lg tw-text-lg tw-leading-8 tw-text-indigo-100">
            A focused digital workspace for students, teachers, families and school leaders.
          </p>
        </motion.div>
        <p className="tw-relative tw-z-10 tw-m-0 tw-text-xs tw-text-indigo-200">Secure access · Role-based workspace · Any device</p>
      </section>

      <section className="tw-relative tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-bg-[#f8fafc] tw-p-5 sm:tw-p-10">
        <div className="tw-absolute tw-left-0 tw-top-0 tw-h-52 tw-w-52 tw-rounded-full tw-bg-indigo-100/60 tw-blur-3xl lg:tw-hidden" />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="tw-relative tw-z-10 tw-w-full tw-max-w-[440px]">
          <div className="tw-mb-9 tw-flex tw-items-center tw-gap-3 lg:tw-hidden">
            <span className="tw-grid tw-h-11 tw-w-11 tw-place-items-center tw-rounded-2xl tw-bg-indigo-600 tw-text-white"><GraduationCap size={23} /></span>
            <span className="tw-font-['Manrope'] tw-text-xl tw-font-extrabold">EduFlow</span>
          </div>
          <p className="tw-mb-2 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-indigo-600">Welcome back</p>
          <h2 className="tw-m-0 tw-font-['Manrope'] tw-text-3xl tw-font-extrabold tw-text-slate-950 sm:tw-text-4xl">Sign in to your school</h2>
          <p className="tw-mb-8 tw-mt-3 tw-text-sm tw-leading-6 tw-text-slate-500">Use the account details provided by your school administrator.</p>

          <form onSubmit={handleSubmit} className="tw-m-0 tw-p-0">
            <label className="tw-mb-2 tw-block tw-text-sm tw-font-bold tw-text-slate-700" htmlFor="user_id">User ID, email or phone</label>
            <div className="tw-relative tw-mb-5">
              <UserRound className="tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" size={19} />
              <input
                autoComplete="username"
                id="user_id"
                type="text"
                className="tw-h-14 tw-w-full tw-rounded-2xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-pl-12 tw-pr-4 tw-text-[15px] tw-text-slate-900 tw-shadow-sm tw-outline-none tw-transition placeholder:tw-text-slate-400 focus:tw-border-indigo-400 focus:tw-ring-4 focus:tw-ring-indigo-100"
                placeholder="Enter your user ID"
                value={userCode}
                onChange={(event) => setUserCode(event.target.value)}
                required
              />
            </div>

            <div className="tw-mb-2 tw-flex tw-items-center tw-justify-between">
              <label className="tw-text-sm tw-font-bold tw-text-slate-700" htmlFor="password">Password</label>
              <span className="tw-text-xs tw-font-semibold tw-text-indigo-600">Contact school for access</span>
            </div>
            <div className="tw-relative tw-mb-5">
              <LockKeyhole className="tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" size={19} />
              <input
                autoComplete="current-password"
                id="password"
                type={showPassword ? "text" : "password"}
                className="tw-h-14 tw-w-full tw-rounded-2xl tw-border tw-border-solid tw-border-slate-200 tw-bg-white tw-pl-12 tw-pr-12 tw-text-[15px] tw-text-slate-900 tw-shadow-sm tw-outline-none tw-transition placeholder:tw-text-slate-400 focus:tw-border-indigo-400 focus:tw-ring-4 focus:tw-ring-indigo-100"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="tw-absolute tw-right-3 tw-top-1/2 tw-grid tw-h-9 tw-w-9 -tw-translate-y-1/2 tw-place-items-center tw-rounded-xl tw-border-0 tw-bg-transparent tw-text-slate-400 hover:tw-bg-slate-100">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errorMsg && <div role="alert" className="tw-mb-5 tw-rounded-xl tw-bg-rose-50 tw-p-3 tw-text-sm tw-font-medium tw-text-rose-700">{errorMsg}</div>}
            <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} disabled={loading} type="submit" className="tw-flex tw-h-14 tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-2xl tw-border-0 tw-bg-indigo-600 tw-text-[15px] tw-font-bold tw-text-white tw-shadow-lg tw-shadow-indigo-200 tw-transition hover:tw-bg-indigo-700 disabled:tw-cursor-wait disabled:tw-opacity-70">
              {loading ? "Signing you in…" : <>Continue <ArrowRight size={18} /></>}
            </motion.button>
          </form>
          <p className="tw-mb-0 tw-mt-8 tw-text-center tw-text-xs tw-leading-5 tw-text-slate-400">By continuing, you agree to your school’s acceptable-use and privacy policies.</p>
        </motion.div>
      </section>
    </main>
  );
};

export default Login;
