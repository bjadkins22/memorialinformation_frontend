import * as Auth from "../types/AuthType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const  forgetpassword = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.UPDATE_PASSWORD_REQUEST,
    });
    const { data } = await axios.post(`${BACKEND_URL}change-password/`, params);
    dispatch({
      type: Auth.UPDATE_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data?.error?.non_field_errors[0]
          ? error.response.data?.error?.non_field_errors[0]
          : error.message,
    });
  }
};

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}register/`, params);
    dispatch({
      type: Auth.REGISTER_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.REGISTER_FAIL,
      payload:
        error.response && error.response.data?.error?.non_field_errors[0]
          ? error.response.data?.error?.non_field_errors[0]
          : error.message,
    });
  }
};

export const VerifyEmailAction = (decodeId, token) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.VERIFY_EMAIL_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}verify-email/${decodeId}/${token}`
    );

    dispatch({
      type: Auth.VERIFY_EMAIL_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.VERIFY_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LoginAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}login/`, params);

    dispatch({
      type: Auth.LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: Auth.LOGIN_FAIL,
      payload:
        error.response && error.response.data?.message
          ? error.response.data?.message
          : error.message,
    });
  }
};

export const ChangePasswordAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.CHANGE_PASSWORD_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}change-password/`,
      params,
      config
    );

    dispatch({
      type: Auth.CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.CHANGE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ForgotPasswordAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FORGOT_PASSWORD_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}forget-password/`, params);

    dispatch({
      type: Auth.FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SetForgotPasswordAction =
  (params, token, uid) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_REQUEST,
      });

      const { data } = await axios.put(
        `${BACKEND_URL}reset-password/${token}/${uid}/`,
        params
      );

      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const EditRegisterDataAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.UPDATE_REGISTER_DATA_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.patch(
        `${BACKEND_URL}user-profile/`,
        params,
        config
      );

      dispatch({
        type: Auth.UPDATE_REGISTER_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error?.response?.data) {
        dispatch({
          type: Auth.UPDATE_REGISTER_DATA_FAIL,

          payload: error.response.data.message
            ? error.response.data.message
            : error.response.data,
        });
      }
    }
  };

export const LogoutAction = () => (dispatch) => {
  localStorage.removeItem("userData");
  localStorage.removeItem("Subscription");

  dispatch({ type: Auth.USER_LOGOUT });
};




