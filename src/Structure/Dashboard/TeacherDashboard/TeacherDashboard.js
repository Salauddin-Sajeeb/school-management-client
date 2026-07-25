import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Activity,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LibraryBig,
  UsersRound,
  Video,
} from "lucide-react";
import ModernDashboard from "../../components/ModernDashboard/ModernDashboard";

const actions = [
  { label: "Academic calendar", description: "Events, holidays and academic milestones", icon: CalendarDays, path: "/teacher-calender" },
  { label: "Class routine", description: "Review your daily teaching schedule", icon: BookOpen, path: "/routine" },
  { label: "Attendance", description: "Take and review student attendance", icon: ClipboardCheck, path: "/teacherattendance" },
  { label: "Homework", description: "Create assignments and check submissions", icon: FileText, path: "/teacherhomework" },
  { label: "Notices", description: "Publish and review school updates", icon: GraduationCap, path: "/teachernotice" },
  { label: "Mark entry", description: "Record marks and monitor performance", icon: ChartNoAxesCombined, path: "/markentry" },
  { label: "Students", description: "Quick access to learners in your classes", icon: UsersRound, path: "/teacherattendance" },
  { label: "Resources", description: "Teaching materials and useful references", icon: LibraryBig, path: "/teacherhomework" },
  { label: "Activities", description: "Stay connected with school activities", icon: Activity, path: "/teacher-calender" },
  { label: "Online class", description: "Launch and manage digital lessons", icon: Video, path: "/routine" },
];

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({});
  const userCode = localStorage.getItem("user_code");

  useEffect(() => {
    if (localStorage.getItem("user_type") !== "2") {
      navigate("/login");
      return;
    }
    axios
      .get(`${process.env.REACT_APP_NODE_API}/api/teacher/profile?teacher_id=${userCode}`, {
        headers: { authorization: "bearer " + localStorage.getItem("access_token") },
      })
      .then(({ data }) => setTeacher(data || {}))
      .catch(() => {});
  }, [navigate, userCode]);

  return (
    <ModernDashboard
      role="Teacher"
      schoolName={localStorage.getItem("school_name")}
      userName={teacher.full_name}
      userId={teacher.teacher_code || localStorage.getItem("u_id")}
      actions={actions}
      navigate={navigate}
      profilePath="/teacherprofile"
      eyebrow="Teach · inspire · guide"
    />
  );
};

export default TeacherDashboard;
