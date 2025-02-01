import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type Skill = {
  id: number;
  label: string;
};
const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];
const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log(skill);
  return (
    <Stack spacing={4} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />
      <Autocomplete
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
