import React from "react";

export default function EmpPersonalDetails(props) {
  const HandleUpdateBtn = () => {
    props.setShowUpdateSection(true);
  }
  return (
    <>
      <div className="emp-personalInfo-section">
        <div className="emp-img-personal-info">
          <div className="emp-img-name-section">
            <img
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=360&t=st=1699280855~exp=1699281455~hmac=0b6fb30557cfc82bd2888660af512bc59e2ae38dd515abeba0c74b693696cfc9"
              alt="emp-info"
              className="emp-img"
            />
            <h2 className="emp-name">John Doe</h2>
          </div>
          <div className="emp-personalData-section">
            <h4>PERSONAL DATA</h4>
            <div className="emp-sex">
              <h5>Sex:</h5>
              <h5>Male</h5>
            </div>
            <div className="dob">
              <h5>DOB:</h5>
              <h5>30/10/1990</h5>
            </div>
            <div className="education">
              <h5>Education:</h5>
              <h5>IT and Marketing</h5>
            </div>
            <div className="department">
              <h5>Department</h5>
              <h5>UX/UI Design</h5>
            </div>
          </div>
        </div>
        <div>
          <button className="emp-update-btn" onClick={HandleUpdateBtn}>Update Information</button>
        </div>
      </div>
    </>
  );
}
