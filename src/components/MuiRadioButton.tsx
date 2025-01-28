import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";
import React, { ReactHTMLElement, useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = React.useState("");
  console.log(value);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience{" "}
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="success" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
