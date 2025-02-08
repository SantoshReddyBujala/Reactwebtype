import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="speed-dial"
      icon={<SpeedDialIcon />}
      sx={{ position: "absolute", top: 16, bottom: 16 }}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
