import * as Auth from "../types/UserType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const AllUserListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ALL_USER_LIST_REQUEST,
    });
    const { data } = await axios.get(`${BACKEND_URL}user/`, params);
    dispatch({
      type: Auth.ALL_USER_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.ALL_USER_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const NewUserLoginListAction = (daynumber) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.NEW_USER_ACTIVE_REQUEST,
    });
    const { data } = await axios.get(
      `${BACKEND_URL}new-user-accounts/${daynumber}/`
    );
    dispatch({
      type: Auth.NEW_USER_ACTIVE_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.NEW_USER_ACTIVE_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ProfileUpadteAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PROFILE_UPADTE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_URL}user/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.PROFILE_UPADTE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PROFILE_UPADTE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ProfileDetailsGetAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PROFILE_DETAIL_GET_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}user/${id}/`);

    dispatch({
      type: Auth.PROFILE_DETAIL_GET_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PROFILE_DETAIL_GET_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerRegsiterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_REGISTER_REQUEST,
    });
    const { data } = await axios.post(
      `${BACKEND_URL}partner-register/`,
      params
    );
    dispatch({
      type: Auth.PARTNER_REGISTER_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_REGISTER_FAIL,
      payload:
        error?.response && error.response.data?.non_field_errors?.[0]
          ? error.response && error.response.data?.non_field_errors?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartneruserListGetAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TYPE_USER_LIST_REQUEST,
    });
    const { data } = await axios.get(`${BACKEND_URL}partner/type/`);
    dispatch({
      type: Auth.PARTNER_TYPE_USER_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TYPE_USER_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PendingPartneruserListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_PENDING_LIST_REQUEST,
    });
    const { data } = await axios.get(`${BACKEND_URL}partner/request/`);
    dispatch({
      type: Auth.PARTNER_PENDING_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_PENDING_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerRequestAction =
  (statusID, userId, params) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.PARTNER_REQUEST_ACCEPT_DECLINE_REQUEST,
      });
      const { data } = await axios.get(
        `${BACKEND_URL}verify-partner/${userId}/${statusID}/`,
        params
      );
      dispatch({
        type: Auth.PARTNER_REQUEST_ACCEPT_DECLINE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_REQUEST_ACCEPT_DECLINE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const InviteUserAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.INVITE_USER_REQUEST,
    });
    const { data } = await axios.post(`${BACKEND_URL}member/invites/`, params);
    dispatch({
      type: Auth.INVITE_USER_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.INVITE_USER_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AllRoleGetAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ALL_ROLE_GET_REQUEST,
    });
    const { data } = await axios.get(`${BACKEND_URL}member/role`);
    dispatch({
      type: Auth.ALL_ROLE_GET_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.ALL_ROLE_GET_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AllInviteMemberListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.INVITE_MEMBER_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}member/invites`, config);
    dispatch({
      type: Auth.INVITE_MEMBER_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.INVITE_MEMBER_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const InviteUserRequestAcceptAction =
  (userID, params, statustype) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_REQUEST,
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

      let data = [];

      if (statustype) {
        data = await axios.put(
          `${BACKEND_URL}member/invites/${userID}/`,
          params,
          config
        );
      } else if (!statustype) {
        data = await axios.delete(
          `${BACKEND_URL}member/invites/${userID}/`,
          params,
          config
        );
      }

      dispatch({
        type: Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ContactusDetailsAddAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.CONTACT_US_DETAILS_ADD_REQUEST,
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

      const { data } = await axios.post(`${BACKEND_URL}contact/`, params);
      dispatch({
        type: Auth.CONTACT_US_DETAILS_ADD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.CONTACT_US_DETAILS_ADD_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ContactusDetailGetAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.CONTACT_US_DETAILS_GET_REQUEST,
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

      const { data } = await axios.get(`${BACKEND_URL}contact/`, params);
      dispatch({
        type: Auth.CONTACT_US_DETAILS_GET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.CONTACT_US_DETAILS_GET_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserContactwithAdminAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_CONTACT_ADMIN_REQUEST,
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

      const { data } = await axios.post(`${BACKEND_URL}user_contact/`, params);
      dispatch({
        type: Auth.USER_CONTACT_ADMIN_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_CONTACT_ADMIN_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

// user Update

export const UserUpdatePasswordAction =
  (params, token, uid) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_UPDATE_PASSWORD_REQUEST,
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
        `${BACKEND_URL}reset-password/${token}/${uid}/`,
        params
      );

      dispatch({
        type: Auth.USER_UPDATE_PASSWORD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_UPDATE_PASSWORD_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const RelTimeNotificationAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.REALTIME_NOTIFICATION_REQUEST,
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

    const { data } = await axios.get(
      `${BACKEND_URL}notifications/get_notifications/`,
      config
    );

    dispatch({
      type: Auth.REALTIME_NOTIFICATION_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.REALTIME_NOTIFICATION_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};



export const RelTimeNotificationUpdateAction =
  (params, id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.REALTIME_NOTIFICATION_UPDATE_REQUEST,
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

      const { data } = await axios.delete(
        `${BACKEND_URL}notifications/get_notifications/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.REALTIME_NOTIFICATION_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.REALTIME_NOTIFICATION_UPDATE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getUserPartnerAction = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_USER_PARTNER_REQUEST,
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
  
      const { data } = await axios.get(
        `${BACKEND_URL}get_my_partner/`,
        config
      );
  
      dispatch({
        type: Auth.GET_USER_PARTNER_SUCCESS,
        payload: data,
      });
  
      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_USER_PARTNER_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
  