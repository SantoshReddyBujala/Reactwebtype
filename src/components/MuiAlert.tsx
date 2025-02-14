import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <>
      <Stack spacing={2} p={2}>
        <Alert severity="error"> Error Alert</Alert>
        <Alert severity="warning">Warning Alert</Alert>
        <Alert severity="info">Info Alert</Alert>
        <Alert severity="success">Success Alert</Alert>
      </Stack>
      <Stack spacing={2} p={2}>
        <Alert variant="outlined" severity="error">
          Error Alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          Warning Alert
        </Alert>
        <Alert variant="outlined" severity="info">
          Info Alert
        </Alert>
        <Alert variant="outlined" severity="success">
          Success Alert
        </Alert>
      </Stack>
      <Stack spacing={2} p={2}>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close alert")}
        >
          <AlertTitle>Error</AlertTitle>
          Error Alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Warning Alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          Info Alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={
            <Button size="small" color="inherit">
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Success Alert
        </Alert>
      </Stack>
    </>
  );
};

export default MuiAlert;
