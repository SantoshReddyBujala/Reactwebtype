import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">My Task</span>
      {/* <InputField /> */}
      <MuiTextField />
      <MuiButton />
      <MuiTypography />
    </div>
  );
};

export default App;
