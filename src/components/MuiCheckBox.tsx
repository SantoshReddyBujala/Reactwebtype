import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/BookmarkBorder";

const MuiCheckBox = () => {
  const [checked, setAccept] = React.useState(false);
  const [skills, setSkills] = React.useState<string[]>([]);
  console.log(skills);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={checked} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={checked}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel id="job-experience-group-label">Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  color="success"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkillsChange}
                />
              }
              label="Javascript"
              value="js"
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
