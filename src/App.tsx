import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckBox from "./components/MuiCheckBox";

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">My Task</span>
      {/* <InputField /> */}
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
