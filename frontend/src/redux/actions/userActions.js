import {
  USER_VISIT_FAIL,
  USER_VISIT_REQUEST,
  USER_VISIT_SUCCESS,
  USER_QUOTE_FAIL,
  USER_QUOTE_REQUEST,
  USER_QUOTE_SUCCESS
} from "../../constants/userConstants";

import axios from "axios";

export const visit = (name, email, phoneNumber, additionalInfo ) => async (dispatch) => {
  try {
    dispatch({ type: USER_VISIT_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/bookingVisit",
      { name, email, phoneNumber, additionalInfo },
      config
    );

    dispatch({ type: USER_VISIT_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_VISIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const quote = (name, email, companyName, phoneNumber, moveInDate, peopleNumber, stayDuration, roomType, companySize, additionalInfo, offersAndCommunication) => async (dispatch) => {
  try {
    dispatch({ type: USER_QUOTE_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, companyName, phoneNumber, moveInDate, peopleNumber, stayDuration, roomType, companySize, additionalInfo, offersAndCommunication },
      config
    );

    dispatch({ type: USER_QUOTE_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: USER_QUOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

