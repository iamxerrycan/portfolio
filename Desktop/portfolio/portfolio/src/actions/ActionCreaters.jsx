import * as ActionTypes from "./ActionTypes";
import { UPDATE_VALUE } from "./ActionTypes";

export const updateValue = (form) => {
  return { type:UPDATE_VALUE, payload: form };
};
// export const updateEmail = (email) => {
//   return { type: ActionTypes.UPDATE_EMAIL, payload: email };
// };
// export const updateMessage = (message) => {
//   return { type: ActionTypes.UPDATE_MESSAGE, payload: message };
