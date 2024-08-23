import "./dash.css"
// import ReceptionistDashboard from "./Register/ReceptionistDashboard"
// import AppointmentSchedulingForm from "./Register/Appointment"
// import MedicalRecordForm from "./Register/MedicalRecordForm"

import DoctorDashboard from "./Doctor/DoctorDashboard"
const DashBoard = () => {
  return (
  
  <>
   <section className="dashboard reciption section">
   {/* <ReceptionistDashboard /> */}
   {/* <AppointmentSchedulingForm /> */}
   {/* <MedicalRecordForm /> */}
  
   </section>

   <section className="dashboard doctor section">
    <DoctorDashboard />
   </section>
  </>
  )
}

export default DashBoard
