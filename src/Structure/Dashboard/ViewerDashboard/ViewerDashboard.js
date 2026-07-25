import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LibraryBig,
} from "lucide-react";
import ModernDashboard from "../../components/ModernDashboard/ModernDashboard";

const actions = [
  { label: "Academic calendar", description: "School events, holidays and important dates", icon: CalendarDays, path: "/viewer-calender" },
  { label: "Class routine", description: "Review the selected student's timetable", icon: BookOpen, path: "/viewerRoutine" },
  { label: "Attendance", description: "Monitor attendance and absence history", icon: ClipboardCheck, path: "/viewershowattendanceview" },
  { label: "Homework", description: "Follow assignments and submission details", icon: FileText, path: "/showhomework" },
  { label: "Evaluation", description: "Understand progress and academic results", icon: ChartNoAxesCombined, path: "/viewevaluation" },
  { label: "Notices", description: "Read school and teacher announcements", icon: GraduationCap, path: "/viewer-notice" },
  { label: "Resources", description: "Access useful school learning materials", icon: LibraryBig, path: "/showhomework" },
  { label: "Activities", description: "Stay informed about student activities", icon: Activity, path: "/student-activity" },
];

const ViewerDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_type") !== "6") navigate("/login");
  }, [navigate]);

  const name = `${localStorage.getItem("first_name") || ""} ${localStorage.getItem("last_name") || ""}`.trim();
  return (
    <ModernDashboard
      role="Parent / viewer"
      schoolName={localStorage.getItem("school_name")}
      userName={name || "School viewer"}
      userId={localStorage.getItem("u_id")}
      actions={actions}
      navigate={navigate}
      eyebrow="Stay informed · stay connected"
    />
  );
};

export default ViewerDashboard;
