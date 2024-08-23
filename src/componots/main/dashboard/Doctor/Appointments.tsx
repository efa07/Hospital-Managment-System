import "./dd.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import AppointmentsDashboard from "./AppointmentsDashboard";
import PatientDashboard from "./PatientDashboard";

const DoctorDashboard = () => {
  const [activeSection, setActiveSection] = useState("appointments");

  const renderContent = () => {
    switch (activeSection) {
      case "appointments":
        return <AppointmentsDashboard />;
      case "patientDashboard":
        return <PatientDashboard />;
      default:
        return <AppointmentsDashboard />;
    }
  };

  return (
    <div className="doctor-dashboard">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default DoctorDashboard;
