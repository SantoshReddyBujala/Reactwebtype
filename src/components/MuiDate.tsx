import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const MuiDate = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="Uncontrolled picker"
          defaultValue={dayjs("2022-04-17")}
        />
        <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
        />
        <TimePicker
          label="Time picker"
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
        />
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default MuiDate;
