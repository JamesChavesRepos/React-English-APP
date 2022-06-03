import { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function DateTimePickers() {
  let currentDate = new Date();
  const [DateNTime, setDateNTime] = useState(currentDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        // minDateTime={currentDate}
        minTime={new Date(0, 0, 0, 8)}
        maxTime={new Date(0, 0, 0, 18, 45)}
        renderInput={(props) => <TextField {...props} />}
        label="Pick Time & Date"
        value={DateNTime}
        onChange={(newValue) => {
          setDateNTime(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

export default DateTimePickers;
