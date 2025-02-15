import { Skeleton, Stack } from "@mui/material";
import React from "react";

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width="250px" pl={2}>
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="circular" height={100} width={100} animation="wave" />
      <Skeleton
        variant="rectangular"
        height={200}
        width={200}
        animation="wave"
      />
    </Stack>
  );
};

export default MuiSkeleton;
