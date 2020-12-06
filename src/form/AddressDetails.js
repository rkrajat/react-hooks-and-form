import React from "react";
import { useFormContext } from "./FormContext";

const AddressDetails = ({}) => {
  const { state, handleChange } = useFormContext();
  return (
    <div>
      <h3>Address Details</h3>
      <label>Address: </label>
      <input
        className="input"
        placeholder="enter address"
        value={state.address.value}
        onChange={(e) => handleChange("address", e.target.value)}
      />
    </div>
  );
};

export default AddressDetails;
