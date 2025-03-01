import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRatings from "./components/MuiRatings";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import MuiAccordian from "./components/MuiAccordian";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiMenu from "./components/MuiMenu";
import MuiLinks from "./components/MuiLinks";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNav from "./components/MuiBottomNav";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChips from "./components/MuiChips";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiProgressbar from "./components/MuiProgressbar";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiDate from "./components/MuiDate";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/Masonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#d32f2f",
  },
  palette: {
    secondary: {
      main: "#4dd623",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <MuiMenu />
        <MuiDate />
        <MuiTabs />
        <MuiTimeline />
        <MuiMasonry />
        <MuiResponsiveness />
        {/* <MuiLoadingButton /> */}
        {/* <MuiAvatar />
      <MuiBadge />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog /> */}
        {/* <MuiProgressbar />
      <MuiSkeleton /> */}
        {/* <MuiTable /> */}
        {/* <MuiList /> */}
        {/* <MuiChips /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiSpeedDial /> */}
        {/* <MuiLinks /> */}
        {/* <MuiNavbar /> */}
        {/* <span className="heading">My Task</span> */}
        {/* <InputField /> */}
        {/* <MuiImageList />
      <MuiAccordian />
      <MuiCard />
      <MuiLayout />
      <MuiAutoComplete />
      <MuiRatings />
      <MuiSwitch />
      <MuiCheckBox />
      <MuiRadioButton />
      <MuiSelect />
      <MuiTextField />
      <MuiButton />
      <MuiTypography /> */}
        {/* <MuiBottomNav /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
