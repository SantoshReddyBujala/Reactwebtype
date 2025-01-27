import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  const [age, setAge] = React.useState("");
  console.log(age);
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
      <Box width="250px" padding={10}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleSelectChange}
            fullWidth
            size="small"
            color="secondary"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default MuiSelect;
