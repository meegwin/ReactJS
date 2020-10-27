import {
  DELETE_PRODUCT,
  TANG_GIAM,
  ADD_PRODUCT,
  DETAIL_PRODUCT,
} from "../constants/";
export const actDelete = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};
export const actTangGiam = (data) => {
  return {
    type: TANG_GIAM,
    payload: data,
  };
};
export const actAdd = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const actDetail = (sp) => {
  return {
    type: DETAIL_PRODUCT,
    payload: sp,
  };
};
