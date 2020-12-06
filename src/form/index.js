import React, { useCallback, useState } from "react";
import { useImmerReducer } from "use-immer";
import AddressDetails from "./AddressDetails";
import ContactDetails from "./ContactDetails";
import { FormProvider } from "./FormContext";
import PersonalDetails from "./PersonalDetails";
import SubmitForm from "./SubmitForm";
import { DEFAULT_STATE, FormReducer } from "./state";
import { validateForm, validateInput } from "./validation";

const Form = ({}) => {
  const [state, dispatch] = useImmerReducer(FormReducer, DEFAULT_STATE);
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = useCallback(
    (name, newValue) => {
      const error = validateInput(name, newValue);
      dispatch({
        key: name,
        payload: { newValue, error }
      });
    },
    [dispatch]
  );

  const submitForm = async (e) => {
    e.preventDefault();
    if (validateForm(state, dispatch)) {
      console.log("== form is valid ==");
      setShowLoader(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setShowLoader(false);
      alert(
        JSON.stringify(
          {
            name: state.name.value,
            address: state.address.value,
            mobile: state.mobile.value,
            email: state.email.value,
            emailUpdates: state.emailUpdates.value
          },
          null,
          2
        )
      );
    }
  };

  return (
    <div>
      {showLoader && <div className="loading">SUBMITTING....</div>}
      <form onSubmit={submitForm}>
        <h2>Create New User</h2>
        <FormProvider value={{ state, handleChange }}>
          <PersonalDetails />
          <AddressDetails />
          <ContactDetails />
          <SubmitForm />
        </FormProvider>
      </form>
    </div>
  );
};

export default Form;
