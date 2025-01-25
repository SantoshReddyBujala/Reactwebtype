import React from "react";
import { Typography } from "../../node_modules/@mui/material/index";

const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1"> Heading One </Typography>
      <Typography variant="h2"> Heading Two </Typography>
      <Typography variant="h3" className="color-w">
        {" "}
        Heading Three
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        Heading Four{" "}
      </Typography>
      <Typography variant="h5"> Heading Five </Typography>
      <Typography variant="h6"> Heading Six </Typography>

      <Typography variant="subtitle1"> Sub title 1 </Typography>
      <Typography variant="subtitle2"> Sub title 2 </Typography>

      <Typography variant="body1">
        Exercises that target the glutes and hips can help build muscle and burn
        fat in those areas. You can also try to reshape your hips and midsection
        to create an hourglass figure.
      </Typography>
      <Typography variant="body2">
        Exercises that target the glutes and hips can help build muscle and burn
        fat in those areas. You can also try to reshape your hips and midsection
        to create an hourglass figure.
      </Typography>
    </>
  );
};

export default MuiTypography;
