import {
    USER_VISIT_FAIL,
    USER_VISIT_REQUEST,
    USER_VISIT_SUCCESS,
    USER_QUOTE_FAIL,
    USER_QUOTE_REQUEST,
    USER_QUOTE_SUCCESS
  } from "../../constants/userConstants";
  
  export const userVisitReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_VISIT_REQUEST:
        return { loading: true };
      case USER_VISIT_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_VISIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userQuoteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_QUOTE_REQUEST:
        return { loading: true };
      case USER_QUOTE_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_QUOTE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };