import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Activity,
  BadgeDollarSign,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LibraryBig,
  Video,
} from "lucide-react";
import ModernDashboard from "../../components/ModernDashboard/ModernDashboard";

const actions = [
  { label: "Academic calendar", description: "Events, holidays and key school dates", icon: CalendarDays, path: "/student-academic-calender" },
  { label: "Class routine", description: "Your daily classes and weekly schedule", icon: BookOpen, path: "/studentroutine" },
  { label: "Attendance", description: "Review presence and absence records", icon: ClipboardCheck, path: "/studentviewattendance" },
  { label: "Homework", description: "View assignments and submit your work", icon: FileText, path: "/studenthomework" },
  { label: "Notices", description: "Important updates from school and teachers", icon: GraduationCap, path: "/student-notice_option" },
  { label: "Evaluation", description: "Results, marksheets and academic progress", icon: ChartNoAxesCombined, path: "/studentEvaluation" },
  { label: "Resources", description: "Library, e-books and useful learning links", icon: LibraryBig, path: "/student-resource" },
  { label: "Activities", description: "Follow co-curricular school activities", icon: Activity, path: "/student-activity" },
  { label: "eSchool", description: "Join your online learning environment", icon: Video, path: "/student-eschool" },
  { label: "Payments", description: "Review paid and outstanding invoices", icon: BadgeDollarSign, path: "/student-payment" },
];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const userCode = localStorage.getItem("user_code");

  useEffect(() => {
    if (localStorage.getItem("user_type") !== "1") {
      navigate("/login");
      return;
    }
    axios
      .get(`${process.env.REACT_APP_NODE_API}/api/student/profile?student_id=${userCode}`, {
        headers: { authorization: "bearer " + localStorage.getItem("access_token") },
      })
      .then(({ data }) => setStudent(data || {}))
      .catch(() => {});
  }, [navigate, userCode]);

  return (
    <ModernDashboard
      role="Student"
      schoolName={localStorage.getItem("school_name")}
      userName={student.full_name || `${localStorage.getItem("first_name") || ""} ${localStorage.getItem("last_name") || ""}`.trim()}
      userId={student.student_code || localStorage.getItem("u_id")}
      actions={actions}
      navigate={navigate}
      profilePath="/studentprofile"
      eyebrow="Learn · grow · achieve"
    />
  );
};

export default StudentDashboard;
