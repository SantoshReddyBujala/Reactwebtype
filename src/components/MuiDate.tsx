import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";

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
        <DateTimePicker
          label="Time picker"
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default MuiDate;
