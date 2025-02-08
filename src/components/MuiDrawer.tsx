import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Box alignContent="start">
        <IconButton
          size="large"
          edge="start"
          aria-label="Menu"
          color="inherit"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel open
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
