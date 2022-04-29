import React from "react";

function datePicker() {
  console.log("date pikce");
  return (
    <div>
      <div class="date-picker">
        <div class="input">
          <div class="result">
            Select Date: <span></span>
          </div>
          <button>
            <i class="fa fa-calendar"></i>
          </button>
        </div>
        <div class="calendar"></div>
      </div>
    </div>
  );
}

export default datePicker;
