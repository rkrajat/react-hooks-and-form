import React from "react";
import { useFormContext } from "./FormContext";

const PersonalDetails = ({}) => {
  const { state, handleChange } = useFormContext();
  return (
    <div>
      <h3>Personal Details</h3>
      <label>Name: </label>
      <input
        className="input"
        placeholder="enter name"
        value={state.name.value}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {!!state.name.error && (
        <span style={{ color: "red" }}>{state.name.error}</span>
      )}
    </div>
  );
};

export default PersonalDetails;
