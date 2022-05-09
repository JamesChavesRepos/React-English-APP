import React from "react";

function datePicker() {
  console.log("date pikce");
  return (
    <div>
      <div className="date-picker">
        <div className="input">
          <div className="result">
            Select Date: <span></span>
          </div>
          <button>
            <i className="fa fa-calendar"></i>
          </button>
        </div>
        <div className="calendar"></div>
      </div>
    </div>
  );
}

export default datePicker;
