import React from "react";

export default function EmpWorkDetails() {
  return (
    <div className="emp-work-details-section">
      <div className="present">
        <div>
          <i className="fa-solid fa-user" style={{ color: "#fff" }} />
          <h5>Present Days</h5>
        </div>
        <h4>22</h4>
      </div>
      <div className="absent">
        <div>
        <i className="fa-solid fa-user-xmark" style={{ color: "#fff" }} />
          <h5>Absent Days</h5>
        </div>
        <h4>2</h4>
      </div>
      <div className="leave">
        <div>
          <i className="fa-solid fa-user-slash" style={{ color: "#fff" }} />
          <h5>On Leave</h5>
        </div>
        <h4>1</h4>
      </div>
      <div className="working-days">
        <div>
          <i className="fa-solid fa-calendar-days" style={{ color: "#fff" }} />
          <h5>Working Days</h5>
        </div>
        <h4>25</h4>
      </div>
      <div className="working-projects">
        <div>
          <i className="fa-solid fa-database" style={{ color: "#fff" }} />
          <h5>Projects</h5>
        </div>
        <h4>6</h4>
      </div>
    </div>
  );
}
