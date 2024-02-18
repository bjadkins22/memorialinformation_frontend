import * as Auth from "../types/LegacyType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const LegacyAddAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_ADD_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}legacy/page/`, params);
    dispatch({
      type: Auth.LEGACY_DOCUMENT_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_ADD_FAIL,
      payload:
        error?.response && error.response.data.message.legacy_vehicle?.vin
          ? error.response && error.response.data.message.legacy_vehicle?.vin
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LegacyListShowAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_SHOW_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}legacy/page/`, config);
    dispatch({
      type: Auth.LEGACY_DOCUMENT_SHOW_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_SHOW_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LegacyListUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.LEGACY_DOCUMENT_UPDATE_REQUEST,
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
        `${BACKEND_URL}legacy/page/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.LEGACY_DOCUMENT_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.LEGACY_DOCUMENT_UPDATE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const LegacyDetailsGetByIdAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_REQUEST,
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
        `${BACKEND_URL}legacy/page/${id}/`,
        config
      );
      dispatch({
        type: Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const DeleteLegacyAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_LIST_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}legacy/page/`, params);
    dispatch({
      type: Auth.LEGACY_DOCUMENT_LIST_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.LEGACY_DOCUMENT_LIST_DELETE_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyTodoAddAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.FAMILY_TODO_ADD_REQUEST,
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
      `${BACKEND_URL}family/todo/`,
      params,
      config
    );
    dispatch({
      type: Auth.FAMILY_TODO_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_TODO_ADD_FAIL,
      payload:
        error?.response && error.response.data?.legacy?.[0]
          ? error.response && error.response.data.legacy?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyTodoListShowAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_SHOW_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}family/todo/`, config);
    dispatch({
      type: Auth.FAMILY_TODO_LIST_SHOW_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_SHOW_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyTodoDeleteListAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FAMILY_TODO_DELETE_LIST_REQUEST,
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
        `${BACKEND_URL}family/todo/${id}/`,
        config
      );
      dispatch({
        type: Auth.FAMILY_TODO_DELETE_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FAMILY_TODO_DELETE_LIST_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FamilyTodoGetListByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_GET_BYID_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}family/todo/${id}/`);
    dispatch({
      type: Auth.FAMILY_TODO_LIST_GET_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_GET_BYID_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyTodoListUpdateAction = (id, params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_UPDATE_REQUEST,
    });

    const { data } = await axios.put(
      `${BACKEND_URL}family/todo/${id}/`,
      params
    );

    dispatch({
      type: Auth.FAMILY_TODO_LIST_UPDATE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_TODO_LIST_UPDATE_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LagacyCodeAddAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.LAGACY_CODE_ENTER_PAGE_REQUEST,
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
      `${BACKEND_URL}legacy/code/`,
      params,
      config
    );

    dispatch({
      type: Auth.LAGACY_CODE_ENTER_PAGE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.LAGACY_CODE_ENTER_PAGE_FAIL,
      payload:
        error?.response && error.response.data?.legacy_page?.[0]
          ? error.response && error.response.data?.legacy_page?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EnterPasswordVerficationAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PASSWORD_ENTER_VERFICATION_REQUEST,
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
        `${BACKEND_URL}legacy/legacy_auth/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.PASSWORD_ENTER_VERFICATION_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PASSWORD_ENTER_VERFICATION_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const OtpVerficationAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.OTP_VERFICATION_REQUEST,
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
        `${BACKEND_URL}legacy/legacy_auth_otp/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.OTP_VERFICATION_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.OTP_VERFICATION_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const MemorialInformationListAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.MEMORAIL_INFORMATION_RELATION_REQUEST,
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
        `${BACKEND_URL}member/memorial_releation/`,
        config
      );

      dispatch({
        type: Auth.MEMORAIL_INFORMATION_RELATION_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.MEMORAIL_INFORMATION_RELATION_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const LegacyDataShowMemberAction =
  (legacyID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.LEGACY_DATA_SHOW_MEMBER_REQUEST,
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
        `${BACKEND_URL}legacy/page/${legacyID}`,
        config
      );
      dispatch({
        type: Auth.LEGACY_DATA_SHOW_MEMBER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.LEGACY_DATA_SHOW_MEMBER_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const MemberListshowLegAcyaction =
  (legacyID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.MEMBER_RELATION_LIST_REQUEST,
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
        `${BACKEND_URL}member/memorial_member/${legacyID}/`,
        config
      );
      dispatch({
        type: Auth.MEMBER_RELATION_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.MEMBER_RELATION_LIST_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const MemberPermissionGrantAction =
  (legacyID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.MEMBER_PERMISSION_GRANT_REQUEST,
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
        `${BACKEND_URL}member/grant_permission/`,
        config
      );
      dispatch({
        type: Auth.MEMBER_PERMISSION_GRANT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.MEMBER_PERMISSION_GRANT_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GivePermissionLegacypagePostAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_REQUEST,
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
        `${BACKEND_URL}member/grant_permission/`,
        params,
        config
      );
      dispatch({
        type: Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetPermissionListAction =
  (userID, lagacyID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_PERMISSIONS_LIST_REQUEST,
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
        `${BACKEND_URL}member/user_permissions/${userID}/${lagacyID}/`,
        config
      );
      dispatch({
        type: Auth.GET_PERMISSIONS_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_PERMISSIONS_LIST_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const DeletePermissionListAction =
  (userid, permissionID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PERMISSIONS_DELETE_REQUEST,
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
        `${BACKEND_URL}member/delete_permission/${userid}/${permissionID}/`,
        config
      );
      dispatch({
        type: Auth.PERMISSIONS_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PERMISSIONS_DELETE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const LegacyDeleteAllDataAction =
  (lagacyID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.LEGACY_ALL_MODEL_DELETE_REQUEST,
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
        `${BACKEND_URL}legacy/delete_all_legacy_assets/?legacy_page=${lagacyID}`,
        config
      );
      dispatch({
        type: Auth.LEGACY_ALL_MODEL_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.LEGACY_ALL_MODEL_DELETE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const LegacyDeleteOnByOneModalAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_REQUEST,
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
        `${BACKEND_URL}legacy/delete_table/`,
        params,
        config
      );
      dispatch({
        type: Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UpadteLegacyPasswordAction =
  (lagcayID, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.UPDATE_LAGACY_PASSWORD_REQUEST,
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
        `${BACKEND_URL}legacy/update_code/${lagcayID}/`,
        params,
        config
      );
      dispatch({
        type: Auth.UPDATE_LAGACY_PASSWORD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.UPDATE_LAGACY_PASSWORD_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const forgotLegacyPasswordAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FORGOT_LEGACY_PASSWORD_REQUEST,
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
        `${BACKEND_URL}legacy/forget-code/`,
        params,
        config
      );
      dispatch({
        type: Auth.FORGOT_LEGACY_PASSWORD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FORGOT_LEGACY_PASSWORD_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ResetLegacyPasswordAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.RESET_LEGACY_PASSWORD_REQUEST,
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
        `${BACKEND_URL}legacy/reset-password/`,
        params,
        config
      );
      dispatch({
        type: Auth.RESET_LEGACY_PASSWORD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.RESET_LEGACY_PASSWORD_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SalePropertyPostAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.SALE_PEOPERTY_POST_REQUEST,
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
        `${BACKEND_URL}family/property_sale/`,
        params,
        config
      );
      dispatch({
        type: Auth.SALE_PEOPERTY_POST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.SALE_PEOPERTY_POST_FAIL,
        payload:
          error?.response && error.response.data?.price?.[0]
            ? error.response && error.response.data?.price?.[0]
            : error.response && error.response.data?.description?.[0]
            ? error.response && error.response.data?.description?.[0]
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ListGetSalePropertyPostAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.SALE_PEOPERTY_LIST_GET_REQUEST,
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
        `${BACKEND_URL}family/property_sale/`,
        config
      );
      dispatch({
        type: Auth.SALE_PEOPERTY_LIST_GET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.SALE_PEOPERTY_LIST_GET_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SalePropertyDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.SALE_PROPERTY_DELETE_REQUEST,
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
      `${BACKEND_URL}family/property_sale/${id}/`,
      config
    );
    dispatch({
      type: Auth.SALE_PROPERTY_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.SALE_PROPERTY_DELETE_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SalePropertyEditAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.EDIT_PROPERTY_DATA_REQUEST,
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
        `${BACKEND_URL}family/property_sale/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.EDIT_PROPERTY_DATA_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.EDIT_PROPERTY_DATA_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetPropertyDataByIDAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.GET_PROPERTY_DATA_BYID_REQUEST,
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
      `${BACKEND_URL}family/property_sale/${id}/`,
      config
    );
    dispatch({
      type: Auth.GET_PROPERTY_DATA_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.GET_PROPERTY_DATA_BYID_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AddImagegalleryAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADD_IMAGE_GALLERY_REQUEST,
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
      `${BACKEND_URL}legacy/upload_images/`,
      params,
      config
    );
    dispatch({
      type: Auth.ADD_IMAGE_GALLERY_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADD_IMAGE_GALLERY_FAIL,
      payload:
        error?.response && error.response.data.image
          ? error.response && error.response.data.image
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetImagesgalleryAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.GET_IMAGES_GALLERY_REQUEST,
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
      `${BACKEND_URL}legacy/upload_images/`,
      config
    );
    dispatch({
      type: Auth.GET_IMAGES_GALLERY_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.GET_IMAGES_GALLERY_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteimagesgalleryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.DELETE_IMAGES_FROM_GALLERY_REQUEST,
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
      `${BACKEND_URL}legacy/upload_images/${id}/`,
      config
    );
    dispatch({
      type: Auth.DELETE_IMAGES_FROM_GALLERY_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.DELETE_IMAGES_FROM_GALLERY_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminaddBlogAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADMIN_BLOG_ADD_REQUEST,
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

    const { data } = await axios.post(`${BACKEND_URL}AddBlog/`, params, config);
    dispatch({
      type: Auth.ADMIN_BLOG_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_BLOG_ADD_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminShowBlogListAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.ADMIN_BLOG_LIST_SHOW_REQUEST,
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
        `${BACKEND_URL}AddBlog/`,
        params,
        config
      );
      dispatch({
        type: Auth.ADMIN_BLOG_LIST_SHOW_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.ADMIN_BLOG_LIST_SHOW_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const AdminShowBlogDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADMIN_BLOG_DELETE_REQUEST,
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

    const { data } = await axios.delete(`${BACKEND_URL}AddBlog/${id}`, config);
    dispatch({
      type: Auth.ADMIN_BLOG_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_BLOG_DELETE_FAIL,
      payload:
        error?.response && error.response.data.detail
          ? error.response && error.response.data.detail
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminShowBlogEditAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.ADMIN_BLOG_EDIT_REQUEST,
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
        `${BACKEND_URL}AddBlog/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.ADMIN_BLOG_EDIT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.ADMIN_BLOG_EDIT_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const AdminGetByIdBlogDataAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.ADMIN_BLOG_GET_DATA_BYID_REQUEST,
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

      const { data } = await axios.get(`${BACKEND_URL}AddBlog/${id}`, config);
      dispatch({
        type: Auth.ADMIN_BLOG_GET_DATA_BYID_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.ADMIN_BLOG_GET_DATA_BYID_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserSeehisfamilymemberAction =
  (role) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_SEEHIS_FAMILYMEMBER_REQUEST,
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
        `${BACKEND_URL}member/members_list/?role=${role}`,
        config
      );
      dispatch({
        type: Auth.USER_SEEHIS_FAMILYMEMBER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_SEEHIS_FAMILYMEMBER_FAIL,
        payload:
          error?.response && error.response.data.detail
            ? error.response && error.response.data.detail
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
