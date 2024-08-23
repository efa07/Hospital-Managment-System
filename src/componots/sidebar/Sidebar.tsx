import "./sidebar.css";
// import Register from "./registrationNav/Register";
import DoctorSidebar from "./doctorNav/Doctor"
// import NurseSidebar from "./nurse/NurseSidebar";
// import MedicalLab from "./medicalLab/MedicalLab";
// import Pharmacy from "./pharmacy/Pharmacy";
// import Admin from "./admin/Admin";
const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar mt-4">
      {/* <Register /> */}
      <DoctorSidebar />
      {/* <NurseSidebar /> */}
      {/* <MedicalLab /> */}
      {/* <Pharmacy /> */}
      {/* <Radiology /> */}
      {/* <Admin /> */}
    </aside>
  );
};

export default Sidebar;
