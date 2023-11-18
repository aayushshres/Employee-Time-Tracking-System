import React from "react";

export default function UpdateEmpInfo(props) {
  const closeUpdateBtn = () => {
    props.setShowUpdateSection(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="emp-update-info-section">
      <div className="cross-btn">
        <i
          className="fa-solid fa-circle-xmark"
          style={{ color: "black" }}
          onClick={closeUpdateBtn}
        />
      </div>
      <div className="info-update-form-container">
        <form onSubmit={handleSubmit}>
          <div className="emp-update-data">
            <fieldset>
              <legend>Name</legend>
              <input type="text" name="name" />
            </fieldset>
          </div>
          <div className="emp-update-data">
            <fieldset>
              <legend>Sex</legend>
              <input type="text" name="sex" />
            </fieldset>
          </div>
          <div className="emp-update-data">
            <fieldset>
              <legend>Date of Birth</legend>
              <input type="date" name="dob" />
            </fieldset>
          </div>
          <div className="emp-update-data">
            <fieldset>
              <legend>Department</legend>
              <input type="text" name="department" />
            </fieldset>
          </div>
          <button className="emp-update-btn">Update Details Now</button>
        </form>
      </div>
    </div>
  );
}
