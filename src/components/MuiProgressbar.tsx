import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgressbar = () => {
  return (
    <>
      <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={70} />
      </Stack>
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={70} />
      </Stack>
    </>
  );
};

export default MuiProgressbar;
