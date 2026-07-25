import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BadgeDollarSign,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  FilePlus2,
  GraduationCap,
  LayoutList,
  Megaphone,
  School,
  UsersRound,
} from "lucide-react";
import ModernDashboard from "../../components/ModernDashboard/ModernDashboard";

const actions = [
  { label: "Academic calendar", description: "Plan school events and academic dates", icon: CalendarDays, path: "/academic-calender" },
  { label: "Notices", description: "Publish targeted school announcements", icon: Megaphone, path: "/schooladminnotice" },
  { label: "Class routine", description: "Build and manage school timetables", icon: Clock3, path: "/schooladminroutine" },
  { label: "Examinations", description: "Create exams and evaluation cycles", icon: BookOpenCheck, path: "/create-exam" },
  { label: "Teachers", description: "Manage faculty records and access", icon: UsersRound, path: "/teacher-feature" },
  { label: "Accounts", description: "Payments, fees and school finances", icon: BadgeDollarSign, path: "/payment" },
  { label: "Students", description: "Enroll and manage student information", icon: GraduationCap, path: "/add-student" },
  { label: "Classes", description: "Create and organize academic classes", icon: School, path: "/class-create" },
  { label: "Sections", description: "Structure sections within each class", icon: LayoutList, path: "/section-create" },
  { label: "Subjects", description: "Manage subjects and registrations", icon: FilePlus2, path: "/subject-create" },
];

const SchoolDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_type") !== "4") navigate("/login");
  }, [navigate]);

  const name = `${localStorage.getItem("first_name") || ""} ${localStorage.getItem("last_name") || ""}`.trim();
  return (
    <ModernDashboard
      role="School admin"
      schoolName={localStorage.getItem("school_name")}
      userName={name}
      userId={localStorage.getItem("admin_code")}
      actions={actions}
      navigate={navigate}
      profilePath="/schoolprofile"
      eyebrow="Lead · organize · improve"
    />
  );
};

export default SchoolDashboard;
