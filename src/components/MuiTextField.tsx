import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [firstField, setFirstField] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="name"
          size="small"
          color="info"
          required
          helperText={!firstField ? "Required" : "Help text"}
          error={!firstField}
          value={firstField}
          onChange={(e) => setFirstField(e.target.value)}
        />
        <TextField label="name" variant="outlined" />
        <TextField type="password" label="Password" variant="filled" />
        <TextField label="name" variant="standard" disabled />
        <TextField
          label="Read only"
          variant="standard"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Age"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
