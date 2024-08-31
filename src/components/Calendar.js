import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ru from "dayjs/locale/ru";
import "../styles/calendar.scss";


export default function BasicDateCalendar({ isRotate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ru}>
      <DateCalendar className={isRotate ? 'is-rotate' : ''} />
    </LocalizationProvider>
  );
}
