import React from "react";
import { useFormContext } from "./FormContext";

const SubmitForm = ({}) => {
  const { state, handleChange } = useFormContext();
  return (
    <div>
      <hr />
      <input
        type="radio"
        name="emailUpdates"
        checked={state.emailUpdates.value}
        onChange={(e) => handleChange("emailUpdates", e.target.checked)}
      />
      <label htmlFor="emailUpdates">Recieve email updates</label>
      <br />
      <button type="submit">Submit Form</button>
    </div>
  );
};

export default SubmitForm;
