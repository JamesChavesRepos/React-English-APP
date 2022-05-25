import { useState } from "react";
import { TextField } from "@mui/material"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function DateTimePickers() {
  let currentDate = new Date();
  const [DateNTime, setDateNTime] = useState(currentDate);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={DateNTime}
        onChange={(newValue) => {
          setDateNTime(newValue);
        }}
        />
      </LocalizationProvider>
        
        );
      }
      
      export default DateTimePickers;