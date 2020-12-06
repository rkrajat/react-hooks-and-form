export const DEFAULT_STATE = {
  name: {
    value: "",
    error: null
  },
  mobile: {
    value: "",
    error: null
  },
  email: {
    value: "",
    error: null
  },
  emailUpdates: {
    value: false
  },
  address: {
    value: "",
    error: null
  }
};

export const FormReducer = (state, { key, payload }) => {
  switch (key) {
    case "name":
      state.name.value = payload.newValue;
      state.name.error = payload.error;
      return;
    case "age":
      state.age.value = payload.newValue;
      state.age.error = payload.error;
      return;
    case "address":
      state.address.value = payload.newValue;
      state.address.error = payload.error;
      return;
    case "mobile":
      state.mobile.value = payload.newValue;
      state.mobile.error = payload.error;
      return;
    case "email":
      state.email.value = payload.newValue;
      state.email.error = payload.error;
      return;
    case "emailUpdates":
      state.emailUpdates.value = payload.newValue;
      state.emailUpdates.error = payload.error;
      return;
    default:
      return state;
  }
};
