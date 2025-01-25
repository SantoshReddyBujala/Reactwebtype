import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">My Task</span>
      <InputField />
      <MuiButton />
      <MuiTypography />
    </div>
  );
};

export default App;
