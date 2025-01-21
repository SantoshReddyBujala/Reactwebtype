import React from "react";
import { Typography } from "../../node_modules/@mui/material/index";

const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1"> Heading One </Typography>
      <Typography variant="h2"> Heading Two </Typography>
      <Typography variant="h3" className="color-w">
        {" "}
        Heading Three{" "}
      </Typography>
      <Typography variant="h4"> Heading Four </Typography>
      <Typography variant="h5"> Heading Five </Typography>
      <Typography variant="h6"> Heading Six </Typography>
    </>
  );
};

export default MuiTypography;
