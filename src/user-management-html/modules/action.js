import { DELETE_USER, ADD_USER, EDIT_USER, GET_KEYWORD } from "./constant";
export const actDelete = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
export const actAddUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
export const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
export const actGetKeyword = (keyword) => {
  return {
    type: GET_KEYWORD,
    payload: keyword,
  };
};
