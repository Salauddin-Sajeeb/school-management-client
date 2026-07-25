import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Clock3,
  FilePlus2,
  Layers3,
  School,
  Shapes,
} from "lucide-react";
import ModernDashboard from "../../components/ModernDashboard/ModernDashboard";

const actions = [
  { label: "Add new school", description: "Onboard and configure a new institution", icon: School, path: "/add-school" },
  { label: "Organizations", description: "Create and manage organization types", icon: Building2, path: "/add-organization" },
  { label: "Classes", description: "Configure classes across the platform", icon: Layers3, path: "/create-class" },
  { label: "Sections", description: "Create sections for academic structures", icon: Shapes, path: "/section_create" },
  { label: "Periods", description: "Define reusable teaching periods", icon: Clock3, path: "/create-period" },
  { label: "Subjects", description: "Maintain the master subject catalogue", icon: FilePlus2, path: "/create-subject" },
];

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_type") !== "5") navigate("/login");
  }, [navigate]);

  return (
    <ModernDashboard
      role="Super admin"
      schoolName="Education network"
      userName="Platform administrator"
      userId={localStorage.getItem("u_id")}
      actions={actions}
      navigate={navigate}
      eyebrow="Configure · connect · scale"
    />
  );
};

export default SuperAdminDashboard;
