import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} p={2}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "secondary.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: "primary.light", height: 96, width: 96 }}
          variant="square"
        >
          BW
        </Avatar>
        <Avatar
          src="/assets/img.jpg"
          alt="Test"
          sx={{ height: 96, width: 96 }}
        ></Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={2}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>CK</Avatar>
          <Avatar src="/assets/img.jpg" alt="Test"></Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
