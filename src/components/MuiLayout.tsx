import { Box, Divider, Grid2, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={2}>
      <Stack
        direction="row"
        sx={{ border: "1px solid" }}
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box>Box Default</Box>
        <Box component="p">Box with component prop</Box>
        <Box
          component="p"
          sx={{
            backgroundColor: "primary.main",
            color: "while",
            height: "200px",
            width: "300px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Box with component with sx prop
        </Box>
        <Box
          display="flex"
          height={100}
          width={200}
          bgcolor="success.main"
          p={2}
          m={2}
        >
          Box with props
        </Box>
      </Stack>
    </Paper>
  );
};

export default MuiLayout;
