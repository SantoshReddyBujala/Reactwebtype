import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChanges}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
