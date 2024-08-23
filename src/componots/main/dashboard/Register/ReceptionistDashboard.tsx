import  { useState } from 'react';
import "./dash.css"
const ReceptionistDashboard = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    address: '',
    contactNumber: '',
    insuranceProvider: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    medicalHistory: '',
    bloodtype:''
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    if (!patientData.name || !patientData.age || !patientData.address || !patientData.contactNumber ||
        !patientData.insuranceProvider || !patientData.emergencyContactName || !patientData.emergencyContactNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle form submission (e.g., send data to server)
    console.log(patientData); // For testing purposes
  };

  return (
    <div className="dashboard-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={patientData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={patientData.age} onChange={handleChange} required />
        </div>
        {/* Add other form fields as needed */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={patientData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" value={patientData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="insuranceProvider">Insurance Provider:</label>
          <input type="text" id="insuranceProvider" name="insuranceProvider" value={patientData.insuranceProvider} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
          <input type="text" id="emergencyContactName" name="emergencyContactName" value={patientData.emergencyContactName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="emergencyContactNumber">Emergency Contact Number:</label>
          <input type="text" id="emergencyContactNumber" name="emergencyContactNumber" value={patientData.emergencyContactNumber} onChange={handleChange} required />
        </div>
        {/* Add other form fields as needed */}
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default ReceptionistDashboard;