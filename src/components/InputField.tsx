import React from "react";
import Button from "./Button";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input_task"
      ></input>
      <Button />
    </form>
  );
};

export default InputField;
