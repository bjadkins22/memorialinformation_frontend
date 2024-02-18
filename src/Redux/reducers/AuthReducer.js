import * as Auth from "../types/AuthType";

export const forgetreducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.UPDATE_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.UPDATE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case Auth.UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    case Auth.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.REGISTER_REQUEST:
      return { loading: true };

    case Auth.REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case Auth.REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case Auth.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const VerifyEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.VERIFY_EMAIL_REQUEST:
      return { loading: true };

    case Auth.VERIFY_EMAIL_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        success: true,
      };
    case Auth.VERIFY_EMAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.LOGIN_REQUEST:
      return { loading: true };

    case Auth.LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case Auth.LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case Auth.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const ChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.CHANGE_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.CHANGE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case Auth.CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.FORGOT_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case Auth.FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SetForgotPasswordAction = (state = {}, action) => {
  switch (action.type) {
    case Auth.FORGOT_PASSWORD_SET_REQUEST:
      return { loading: true };

    case Auth.FORGOT_PASSWORD_SET_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case Auth.FORGOT_PASSWORD_SET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const EditRegisterDataReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.UPDATE_REGISTER_DATA_REQUEST:
      return { loading: true };
    case Auth.UPDATE_REGISTER_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        profileupdate: action.payload,
      };
    case Auth.UPDATE_REGISTER_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
