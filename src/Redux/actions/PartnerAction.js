import * as Auth from "../types/PartnerType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const PartnerAddAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TYPE_ADD_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}partner/partner_types/`,
      params
    );
    dispatch({
      type: Auth.PARTNER_TYPE_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TYPE_ADD_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ActivePartnerShowAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ACTIVE_PARTNER_SHOW_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/get_partners/`,
      params
    );
    dispatch({
      type: Auth.ACTIVE_PARTNER_SHOW_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ACTIVE_PARTNER_SHOW_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserChatwithPartnerPostAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.USER_CHAT_WITH_PARTNER_POST_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}partner/messages/`,
      params
    );
    dispatch({
      type: Auth.USER_CHAT_WITH_PARTNER_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_CHAT_WITH_PARTNER_POST_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserCahtwithPartnerListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.USER_CHAT_WITHPARTNER_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}partner/messages/`, params);

    dispatch({
      type: Auth.USER_CHAT_WITHPARTNER_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_CHAT_WITHPARTNER_LIST_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const OverAllChatCountAction = () => async (dispatch,getState) => {
  try {
    dispatch({
      type: Auth.OVERALL_CHAT_COUNT_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}partner/all_unread_messages_count/`,config);

    dispatch({
      type: Auth.OVERALL_CHAT_COUNT_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.OVERALL_CHAT_COUNT_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ChatSeenAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.CHAT_SEEN_REQUEST,
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

    const { data } = await axios.post(
      `${BACKEND_URL}partner/update_msg_count/`,
      params,
      config
    );
    dispatch({
      type: Auth.CHAT_SEEN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.CHAT_SEEN_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerSearchFilterAction = (partnerType) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_SEARCH_FILTER_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/request/?partner_type=${partnerType}`
    );
    dispatch({
      type: Auth.PARTNER_SEARCH_FILTER_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_SEARCH_FILTER_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerOwnEventsPostAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_EVENTS_POST_REQUEST,
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

      const { data } = await axios.post(
        `${BACKEND_URL}partner/tutorials/`,
        params
        // config
      );
      dispatch({
        type: Auth.PARTNER_EVENTS_POST_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_EVENTS_POST_FAIL,
        payload:
          error?.response && error.response.data?.description?.[0]
            ? error.response && error.response.data?.description?.[0]
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerVenueEventGetAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.PARTNER_EVENTS_VENUE_GET_REQUEST,
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

    const { data } = await axios.get(
      `${BACKEND_URL}partner/tutorials/`,
      config
    );
    dispatch({
      type: Auth.PARTNER_EVENTS_VENUE_GET_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_EVENTS_VENUE_GET_FAIL,
      payload:
        error?.response && error.response.data.user?.[0]
          ? error.response && error.response.data.user?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerVenueEventUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_EVENTS_UPDATE_REQUEST,
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
        `${BACKEND_URL}partner/tutorials/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.PARTNER_EVENTS_UPDATE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_EVENTS_UPDATE_FAIL,
        payload:
          error?.response && error.response.data.user?.[0]
            ? error.response && error.response.data.user?.[0]
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerVenueEventDeleteAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_EVENTS_DELETE_REQUEST,
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

      const { data } = await axios.delete(
        `${BACKEND_URL}partner/tutorials/${id}`,
        config
      );
      dispatch({
        type: Auth.PARTNER_EVENTS_DELETE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_EVENTS_DELETE_FAIL,
        payload:
          error?.response && error.response.data.user?.[0]
            ? error.response && error.response.data.user?.[0]
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProfileUpdateAction =
  (userId, params) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.PARTNER_PROFILE_UPDATE_REQUEST,
      });

      const { data } = await axios.put(
        `${BACKEND_URL}partner/partner_update/${userId}/`,
        params
      );
      dispatch({
        type: Auth.PARTNER_PROFILE_UPDATE_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_PROFILE_UPDATE_FAIL,
        payload:
          error?.response && error.response.data.message.legacy_vehicle?.vin
            ? error.response && error.response.data.message.legacy_vehicle?.vin
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProfileGetDataAction = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_PROFILE_GET_DATA_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/partner_update/${userId}/`
    );

    dispatch({
      type: Auth.PARTNER_PROFILE_GET_DATA_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_PROFILE_GET_DATA_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerVenuDataGetByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_VENUE_GET_BYID_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}partner/tutorials/${id}/`);
    dispatch({
      type: Auth.PARTNER_VENUE_GET_BYID_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_VENUE_GET_BYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const partnerPlatfromSuggestionPostAction =
  (params) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_REQUEST,
      });

      const { data } = await axios.post(
        `${BACKEND_URL}partner/Platform_Suggestions/`,
        params
      );

      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerPlatfromSuggestionGetDataAction =
  () => async (dispatch) => {
    try {
      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_GET_DATA_REQUEST,
      });

      const { data } = await axios.get(
        `${BACKEND_URL}partner/Platform_Suggestions/`
      );

      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_GET_DATA_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PLAT_FORM_SUGGESTION_GET_DATA_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const AdminDeletePartnerSuggestionAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ADMIN_DELETE_PARTNER_SUGGESTION_REQUEST,
    });

    const { data } = await axios.delete(
      `${BACKEND_URL}partner/Platform_Suggestions/${id}`
    );

    dispatch({
      type: Auth.ADMIN_DELETE_PARTNER_SUGGESTION_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_DELETE_PARTNER_SUGGESTION_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerSuggestionGetByIDAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_SUGGESTION_GETBYID_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/Platform_Suggestions/${id}`
    );

    dispatch({
      type: Auth.PARTNER_SUGGESTION_GETBYID_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_SUGGESTION_GETBYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupportChatPostAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.SUPPORT_CHAT_POST_REQUEST,
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

    const { data } = await axios.post(
      `${BACKEND_URL}partner/support_chat/`,
      params,
      config
    );

    dispatch({
      type: Auth.SUPPORT_CHAT_POST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.SUPPORT_CHAT_POST_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupportChatListGetAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.SUPPORT_CHAT_GET_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/support_chat/`,
      params
    );

    dispatch({
      type: Auth.SUPPORT_CHAT_GET_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.SUPPORT_CHAT_GET_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminSeeUserAllMessgaeAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/support_chat/`,
      params
    );

    dispatch({
      type: Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerAddUserAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.PARTNER_ADD_USER_REQUEST,
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
      `${BACKEND_URL}register/`,
      params,
      config
    );

    dispatch({
      type: Auth.PARTNER_ADD_USER_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_ADD_USER_FAIL,
      payload:
        error?.response && error.response.data?.error?.non_field_errors?.[0]
          ? error.response && error.response.data?.error?.non_field_errors?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerSeeHisUserListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_SEE_HIS_USER_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/support_chat/`,
      params
    );

    dispatch({
      type: Auth.PARTNER_SEE_HIS_USER_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_SEE_HIS_USER_LIST_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserHelpListAllMessageAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.USER_HELP_LIST_ALLMESSAGE_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}partner/Get_Support/`,
      params
    );

    dispatch({
      type: Auth.USER_HELP_LIST_ALLMESSAGE_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_HELP_LIST_ALLMESSAGE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AllChatGetBYIdAction =
  (reciverID, senderId) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.USER_CHAT_GETBY_ID_REQUEST,
      });

      const { data } = await axios.get(
        `${BACKEND_URL}partner/support_chat/get_chat_messages?user1_id=${reciverID}&user2_id=${senderId}`
      );

      dispatch({
        type: Auth.USER_CHAT_GETBY_ID_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_CHAT_GETBY_ID_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnersOwnUsersAction =
  (LoaginPartnerID, formdata) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.PARTNERS_OWN_USERS_REQUEST,
      });

      let payment_verified = formdata.get("payment_verified");
      let payment_verifiedFilter;

      if (payment_verified === "null" || !payment_verified) {
        payment_verifiedFilter = "";
      } else {
        payment_verifiedFilter = `${payment_verified}`;
      }

      // const data = []

      const { data } = await axios.get(
        `${BACKEND_URL}partner/created_by/${LoaginPartnerID}?payment_verified=${payment_verifiedFilter}`
      );

      dispatch({
        type: Auth.PARTNERS_OWN_USERS_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNERS_OWN_USERS_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerAddTutorialAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_ADD_TUTORIAL_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}tutorial_video/`, params);

    dispatch({
      type: Auth.PARTNER_ADD_TUTORIAL_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_ADD_TUTORIAL_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerTutorialListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}tutorial_video/`, params);

    dispatch({
      type: Auth.PARTNER_TUTORIAL_LIST_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_LIST_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerTutorialDeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}tutorial_video/${id}/`);

    dispatch({
      type: Auth.PARTNER_TUTORIAL_DELETE_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_DELETE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerTutorialGetDataByidAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_GET_DATABYID_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}tutorial_video/${id}/`);

    dispatch({
      type: Auth.PARTNER_TUTORIAL_GET_DATABYID_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_GET_DATABYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerTutorialUpdateAction = (id, params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_UPDATE_REQUEST,
    });

    const { data } = await axios.put(
      `${BACKEND_URL}tutorial_video/${id}/`,
      params
    );

    dispatch({
      type: Auth.PARTNER_TUTORIAL_UPDATE_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.PARTNER_TUTORIAL_UPDATE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const IsVerifiedVedioSeeUserAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.IS_VERIFIED_VEDIO_SEE_USER_REQUEST,
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

      const { data } = await axios.put(
        `${BACKEND_URL}profile_Verified/${id}/`,
        params,

        config
      );

      dispatch({
        type: Auth.IS_VERIFIED_VEDIO_SEE_USER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.IS_VERIFIED_VEDIO_SEE_USER_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const IsVerifiedUserListAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.IS_VERIFIED_LIST_USER_REQUEST,
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
      `${BACKEND_URL}profile_Verified/${id}/`,
      config
    );

    dispatch({
      type: Auth.IS_VERIFIED_LIST_USER_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.IS_VERIFIED_LIST_USER_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PartnerAddProductAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_ADD_PRODUCT_REQUEST,
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

      const { data } = await axios.post(
        `${BACKEND_URL}partner/products/`,
        params,
        config
      );

      dispatch({
        type: Auth.PARTNER_ADD_PRODUCT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_ADD_PRODUCT_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProductAllistAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_PRODUCT_LIST_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}partner/products/`,
        params,
        config
      );

      dispatch({
        type: Auth.PARTNER_PRODUCT_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_ADD_PRODUCT_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProductDeleteAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_PRODUCT_DELETE_REQUEST,
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

      const { data } = await axios.delete(
        `${BACKEND_URL}partner/products/${id}/`,
        config
      );

      dispatch({
        type: Auth.PARTNER_PRODUCT_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_PRODUCT_DELETE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProductGetDataAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_PRODUCT_GET_DATA_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}partner/products/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.PARTNER_PRODUCT_GET_DATA_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_PRODUCT_GET_DATA_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PartnerProductUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PARTNER_PRODUCT_UPDATE_REQUEST,
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
        `${BACKEND_URL}partner/products/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.PARTNER_PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PARTNER_PRODUCT_UPDATE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetAllChatListWithUserAction =
  (reciverID, senderId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_ALL_CHAT_WITH_USER_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}partner/messages/chat_messages/?user1_id=${reciverID}&user2_id=${senderId}`,
        config
      );

      dispatch({
        type: Auth.GET_ALL_CHAT_WITH_USER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_ALL_CHAT_WITH_USER_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserMessageChatSelectAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.USER_MESSAGE_CHAT_SELECT_REQUEST,
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

    const { data } = await axios.get(
      `${BACKEND_URL}partner/Get_messages/`,
      config
    );

    dispatch({
      type: Auth.USER_MESSAGE_CHAT_SELECT_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_MESSAGE_CHAT_SELECT_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetAllUserDataByIdAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_ALL_USER_DATA_BYID_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}get_user/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.GET_ALL_USER_DATA_BYID_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_ALL_USER_DATA_BYID_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

// sachin

export const GetHiredPersonListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.GET_HIRED_PERSON_LIST_REQUEST,
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

    const { data } = await axios.get(
      `${BACKEND_URL}hired_users/`,

      config
    );

    dispatch({
      type: Auth.GET_HIRED_PERSON_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.GET_HIRED_PERSON_LIST_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetAllPersonListAction =
  (id, id2) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_ALL_PERSON_LIST_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}partner_vendor_list/?search=${id2}&${id}`,

        config
      );

      dispatch({
        type: Auth.GET_ALL_PERSON_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_ALL_PERSON_LIST_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetHirePersonDetailsAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_HIRE_PERSON_DETAILS_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}get_project_with_rating/${id}`,

        config
      );

      dispatch({
        type: Auth.GET_HIRE_PERSON_DETAILS_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_HIRE_PERSON_DETAILS_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const MyVideoAddAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.MY_VIDEO_ADD_REQUEST,
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

    const { data } = await axios.post(
      `${BACKEND_URL}family/recorder_video/`,
      params,
      config
    );

    dispatch({
      type: Auth.MY_VIDEO_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MY_VIDEO_ADD_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MyVideoGetAllListAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.MY_VIDEO_ALL_LIST_REQUEST,
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

      const { data } = await axios.get(
        `${BACKEND_URL}family/recorder_video/`,
        params,
        config
      );

      dispatch({
        type: Auth.MY_VIDEO_ALL_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.MY_VIDEO_ALL_LIST_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const MyVideoEditAction = (id, params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.MY_VIDEO_EDIT_REQUEST,
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
      `${BACKEND_URL}family/recorder_video/${id}/`,
      params,
      config
    );

    dispatch({
      type: Auth.MY_VIDEO_EDIT_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MY_VIDEO_EDIT_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MyVideoDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.MY_VIDEO_DELETE_REQUEST,
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

    const { data } = await axios.delete(
      `${BACKEND_URL}family/recorder_video/${id}/`,
      config
    );

    dispatch({
      type: Auth.MY_VIDEO_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MY_VIDEO_DELETE_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MyVideoGetDataByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.MY_VIDEO_GET_DATA_BYID_REQUEST,
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

    const { data } = await axios.get(
      `${BACKEND_URL}family/recorder_video/${id}/`,
      config
    );

    dispatch({
      type: Auth.MY_VIDEO_GET_DATA_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MY_VIDEO_GET_DATA_BYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const myUserShowPartnerloginAction =
  (LoaginPartnerID, formdata) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.MY_USER_SHOW_PARTNER_LOGIN_REQUEST,
      });

      // const data = []

      const { data } = await axios.get(
        `${BACKEND_URL}partner/created_by/${LoaginPartnerID}/`
      );

      dispatch({
        type: Auth.MY_USER_SHOW_PARTNER_LOGIN_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.MY_USER_SHOW_PARTNER_LOGIN_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
