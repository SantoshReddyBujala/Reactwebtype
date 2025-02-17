import { Box, Divider, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100px",
  width: "100px",
  backgroundColor: theme.status.danger,
  margin: "16px",
  padding: "16px",
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px !important",
          width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          bgcolor: "secondary.dark",
          m: "16px",
          p: "16px",
        }}
      >
        sadf <Divider /> asdfasd <Divider /> werw <Divider />
      </Box>
      <StyledBox>
        adsfoasidf sadf <Divider /> asdfasd <Divider /> werw <Divider />
      </StyledBox>
    </>
  );
};

export default MuiResponsiveness;
