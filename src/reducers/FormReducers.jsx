import * as ActionTypes from "../actions/ActionCreaters";

const initialState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.updateValue:
      return {
        ...state,
        formData: action.payload.formData,
      };
    default:
      return state;
  }
};

export default formReducer;
