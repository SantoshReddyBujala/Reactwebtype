import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Paper>
      <Stack direction="row" spacing={2}>
        <Accordion
          expanded={expanded === "panel"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel")}
        >
          <AccordionSummary
            id="panel-header"
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Testing
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              asiduof oaiusdfoa iusofdiuaosfdi uoos aidfoaius ofiaosfdiu oasifd
              asdfuoais ufdoiausofd iuaosdiuf oasiudfioaiusdoauao
              asdfouasodfiuaosifudoaiusofd asodfiu aosdfiuoa isufd oaiudsfoia
              usdofiu aosiufd oauisd
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Stack direction="column">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Testing 1
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              asiduof oaiusdfoa iusofdiuaosfdi uoos aidfoaius ofiaosfdiu oasifd
              asdfuoais ufdoiausofd iuaosdiuf oasiudfioaiusdoauao
              asdfouasodfiuaosifudoaiusofd asodfiu aosdfiuoa isufd oaiudsfoia
              usdofiu aosiufd oauisd
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Testing 2
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              asiduof oaiusdfoa iusofdiuaosfdi uoos aidfoaius ofiaosfdiu oasifd
              asdfuoais ufdoiausofd iuaosdiuf oasiudfioaiusdoauao
              asdfouasodfiuaosifudoaiusofd asodfiu aosdfiuoa isufd oaiudsfoia
              usdofiu aosiufd oauisd
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Testing 3
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              asiduof oaiusdfoa iusofdiuaosfdi uoos aidfoaius ofiaosfdiu oasifd
              asdfuoais ufdoiausofd iuaosdiuf oasiudfioaiusdoauao
              asdfouasodfiuaosifudoaiusofd asodfiu aosdfiuoa isufd oaiudsfoia
              usdofiu aosiufd oauisd
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Paper>
  );
};

export default MuiAccordian;
