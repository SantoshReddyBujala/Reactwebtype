import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-label="dialog-label"
        aria-describedby="dialog-description"
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent id="dialog-description">
          <DialogContentText>
            Open Dialog with buttonsdfg sdf gsdfgsdfgsdfgsdfgsdf sdfg sdfgsdf
            gsdf.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained">
            Submit
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
