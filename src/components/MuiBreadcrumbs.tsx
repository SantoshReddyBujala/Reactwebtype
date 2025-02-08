import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="Breadcrumb" separator="-">
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catelog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs aria-label="Breadcrumb" maxItems={3} itemsAfterCollapse={2}>
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catelog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="Breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsBeforeCollapse={1}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catelog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
