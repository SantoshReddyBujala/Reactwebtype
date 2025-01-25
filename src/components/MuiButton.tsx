import React from "react";
import {
  Stack,
  Button,
  IconButton,
} from "../../node_modules/@mui/material/index";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  return (
    <>
      <Stack spacing={2} direction="row" className="p-4">
        <Button variant="text" href="https://www.google.com">
          Test
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row" className="p-4">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="text" href="https://www.google.com" color="warning">
          Text warning
        </Button>
        <Button variant="outlined" color="success">
          Outlined success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row" className="p-4">
        <Button variant="contained" color="primary" size="small">
          Primary small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Primary medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          Primary Large
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row" className="p-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send with start icon
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<SendIcon />}
          disableElevation
        >
          Send with end icon
        </Button>
        <IconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default MuiButton;
