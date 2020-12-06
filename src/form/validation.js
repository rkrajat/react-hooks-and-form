const VALIDATION_FUNCTIONS = {
  required(val, errMsg) {
    return !!val ? null : errMsg;
  },
  pattern(pattern, val, errMsg) {
    return val && (pattern.test(val) ? null : errMsg);
  }
};

const VALIDATION_LIST = {
  name: {
    required: (val) =>
      VALIDATION_FUNCTIONS.required(val, "Name cannot be empty")
  },
  mobile: {
    required: (val) =>
      VALIDATION_FUNCTIONS.required(val, "Mobile no. cannot be empty"),
    pattern: (val) =>
      VALIDATION_FUNCTIONS.pattern(/^[6-9]\d{9}$/, val, "Mobile no. is invalid")
  },
  email: {
    pattern: (val) =>
      VALIDATION_FUNCTIONS.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        val,
        "Please enter a valid Email Id"
      )
  }
};

export function validateInput(inputName, val) {
  const validations = VALIDATION_LIST[inputName];
  if (validations) {
    for (const rule of Object.values(validations)) {
      const isInvalid = rule(val);
      if (isInvalid) {
        return isInvalid;
      }
    }
  }
  return null;
}

export function validateForm(state, dispatch) {
  let isFormValid = true;

  for (const key in state) {
    const value = state[key].value;
    const validaitons = VALIDATION_LIST[key];
    if (validaitons) {
      const error = validateInput(key, value);
      if (error) {
        isFormValid = false;
        dispatch({
          key,
          payload: { newValue: value, error }
        });
      }
    }
  }

  return isFormValid;
}
