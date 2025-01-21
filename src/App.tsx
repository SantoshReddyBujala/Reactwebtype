import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import MuiTypography from "./components/MuiTypography";

const App: React.FC = () => {
  return (
    <div className="app">
      <span className="heading">My Task</span>
      <InputField />
      <MuiTypography />
    </div>
  );
};

export default App;
