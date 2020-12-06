import React from "react";
import { useFormContext } from "./FormContext";

const ContactDetails = ({}) => {
  const { state, handleChange } = useFormContext();
  return (
    <div>
      <h3>Contact Details</h3>
      <label>Mobile: </label>
      <input
        className="input"
        placeholder="+91-9090909090"
        maxLength={10}
        value={state.mobile.value}
        onChange={(e) => handleChange("mobile", e.target.value)}
      />
      {!!state.mobile.error && (
        <span style={{ color: "red" }}>{state.mobile.error}</span>
      )}
      <br />
      <label>Email: </label>
      <input
        className="input"
        placeholder="enter email"
        value={state.email.value}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      {!!state.email.error && (
        <span style={{ color: "red" }}>{state.email.error}</span>
      )}
    </div>
  );
};

export default ContactDetails;
