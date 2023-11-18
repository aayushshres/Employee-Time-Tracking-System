import React from "react";

export default function WorkLog(props) {
  const closeWorklogBtn = () => {
    props.setshowWorklogSection(false);
  };
  return (
    <div className="worklog-section">
      <div className="cross-btn">
        <i
          className="fa-solid fa-circle-xmark"
          style={{ color: "black" }}
          onClick={closeWorklogBtn}
        />
      </div>
      <form>
        <div className="worklog-title">Today's Worklog</div>
        <div>
          <fieldset>
            <legend>Title</legend>
            <input type="text" name="name" placeholder="Log Title" />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Project</legend>
            <input type="text" name="name" placeholder="Project Title" />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Name</legend>
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="Add Work Log"
            ></textarea>
          </fieldset>
        </div>
        <button>Submit Worklog</button>
      </form>
    </div>
  );
}
