import * as React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";

export default function Counter() {
  const dateNow = dayjs();
  const isDayThirdSeptember = dateNow.month() === 8 && dateNow.day() === 3;
  const isDayBeforeThirdSeptember =
    dateNow.month() < 8 || (dateNow.month() === 8 && dateNow.day() < 3);

  const year = isDayBeforeThirdSeptember ? dateNow.year() : dateNow.year() + 1;
  const dateNextThirdSeptember = dayjs(`${year}-09-03`);
  const dayDiff = dateNextThirdSeptember.diff(dateNow, "day", true);

  const diffMessage = isDayThirdSeptember
    ? "Ура! Сегодня!"
    : `Осталось дней:  ${Math.ceil(dayDiff)}`;

  return (
    <Typography variant="h6" sx={{ mb: 5 }}>
      {diffMessage}
    </Typography>
  );
}
