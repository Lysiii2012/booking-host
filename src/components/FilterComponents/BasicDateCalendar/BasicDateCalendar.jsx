import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EventIcon from "@mui/icons-material/Event";
import TextField from "@mui/material/TextField"; 
import FormControl from "@mui/material/FormControl";
import styles from "../styles.module.css";

export default function DateRangePicker() {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);

  const handleCheckInChange = (newValue) => {
    setCheckInDate(newValue);

    if (checkOutDate && newValue && newValue.isAfter(checkOutDate)) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutChange = (newValue) => {
    setCheckOutDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl className={styles.calendarGroup}>
        <DatePicker
          className={styles.fontStyle}
          label="Check-in"
          value={checkInDate}
          onChange={handleCheckInChange}
          renderInput={(params) => <TextField {...params} />}
          components={{ OpenPickerIcon: EventIcon }}
        />
        <DatePicker
          className={styles.fontStyle}
          label="Check-out"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          minDate={checkInDate || null}
          renderInput={(params) => <TextField {...params} />}
          components={{ OpenPickerIcon: EventIcon }}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
