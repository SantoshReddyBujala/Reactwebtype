import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLinks = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Link variant="body2" href="#" color="warning" underline="none">
        Link
      </Link>
      <Typography component="h6">
        <Link
          href="https://www.google.com/"
          color="secondary"
          underline="hover"
        >
          Google
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLinks;
