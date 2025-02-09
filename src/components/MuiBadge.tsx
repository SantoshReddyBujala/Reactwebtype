import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" max={999} invisible={true}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="success" showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
