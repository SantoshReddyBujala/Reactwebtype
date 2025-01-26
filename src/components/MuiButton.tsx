import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "../../node_modules/@mui/material/index";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItolicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log(formats);
  const handleFormatChanges = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack className="p-4">
      <Stack spacing={2} direction="row">
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
      <Stack direction="row">
        <ButtonGroup color="success" variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup color="success" variant="text" className="p-4">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          color="success"
          variant="contained"
          orientation="vertical"
          size="small"
          aria-label="Button group with props and operations"
        >
          <Button onClick={() => alert("Left button clicked")}>Left</Button>
          <Button onClick={() => console.log("Center Button clicked")}>
            Center
          </Button>
          <Button
            onClick={() => console.warn("Right button clicked with warning")}
          >
            Right
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" className="p-4">
        <ToggleButtonGroup
          aria-label="Text formating"
          value={formats}
          onChange={handleFormatChanges}
          size="small"
          color="warning"
        >
          <ToggleButton value="bold" aria-label="Bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="Italic">
            <FormatItolicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="Underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack className="p-4">
        <ToggleButtonGroup
          aria-label="Text formating"
          value={formats}
          onChange={handleFormatChanges}
          size="small"
          color="warning"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="Bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="Italic">
            <FormatItolicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="Underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
