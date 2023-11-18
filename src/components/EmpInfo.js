import React, { useState } from "react";
import EmpPersonalDetails from "./EmpPersonalDetails";
import EmpWorkHours from "./EmpWorkHours";
import EmpWorkDetails from "./EmpWorkDetails";
import EmpWorkLog from "./EmpWorkLog";
import UpdateEmpInfo from "../UpdateEmpInfo";
import WorkLog from "./WorkLog";

export default function EmpInfo() {
  const [showUpdateSection, setShowUpdateSection] = useState(false);
  const [showWorklogSection, setshowWorklogSection] = useState(false);
  return (
    <>
      <div className="empinfo">
        <div className="empPersonalDetails box">
          <EmpPersonalDetails setShowUpdateSection={setShowUpdateSection} />
        </div>
        <div className="extraBox">
          <h3>
            <span>
              <i
                className="fa-solid fa-angle-left"
                style={{ color: "#000000", marginRight: "10px" }}
              />
            </span>
            Employee Information
          </h3>
        </div>
        <div className="empWorkHours box">
          <EmpWorkHours />
        </div>
        <div className="empWorkDetails box">
          <EmpWorkDetails />
        </div>
        <div className="empWorkLog box">
          <EmpWorkLog setshowWorklogSection={setshowWorklogSection} />
        </div>
      </div>
      {showUpdateSection && (
        <div className="updateEmpInfo">
          <UpdateEmpInfo setShowUpdateSection={setShowUpdateSection} />
        </div>
      )}
      {showWorklogSection && (
        <div className="worklog">
          <WorkLog setshowWorklogSection={setshowWorklogSection} />
        </div>
      )}
    </>
  );
}
