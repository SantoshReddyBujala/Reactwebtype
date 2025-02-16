import { Box, Divider } from "@mui/material";
import React from "react";

const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "300px !important",
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        bgcolor: "primary.main",
        m: "16px",
        p: "16px",
      }}
    >
      sadf <Divider /> asdfasd <Divider /> werw <Divider />
    </Box>
  );
};

export default MuiResponsiveness;
