import FaceIcon from "@mui/icons-material/Face";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChips = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleChip = (valuedelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== valuedelete));
  };
  return (
    <Stack direction="row" spacing={4} p={2}>
      <Chip label="Chip" color="primary" size="medium" />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="medium"
        variant="outlined"
      />
      <Chip
        label="Chip outlined avatar"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        label="Chip clicked"
        color="success"
        size="medium"
        icon={<FaceIcon />}
        onClick={() => alert("Clicked")}
      />

      <Chip
        label="Chip delete"
        color="error"
        size="medium"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Chip delete")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleChip(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChips;
