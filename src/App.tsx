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

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">My Task</span>
      {/* <InputField /> */}
      <MuiRatings />
      <MuiSwitch />
      <MuiCheckBox />
      <MuiRadioButton />
      <MuiSelect />
      <MuiTextField />
      <MuiButton />
      <MuiTypography />
    </div>
  );
};

export default App;
