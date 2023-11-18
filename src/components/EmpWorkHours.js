import React from "react";
import EmpWorkHoursBarchart from "./EmpWorkHoursBarchart";

export default function EmpWorkHours() {
  return (
    <div>
      <div className="working-hours-section">
        <h5 className="section-title">Working hours</h5>
        <div className='empWorkHoursBarchart'><EmpWorkHoursBarchart /></div>
        <h5 className="current-month-tab">
          <span>
            <i
              className="fa-solid fa-angle-left"
              style={{ color: "#000000", marginRight: "60px" }}
            />
          </span>
          October
          <span>
            <i
              className="fa-solid fa-angle-right"
              style={{ color: "#000000", marginLeft: "60px" }}
            />
          </span>
        </h5>
      </div>
    </div>
  );
}
