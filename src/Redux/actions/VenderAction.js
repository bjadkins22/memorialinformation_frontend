import * as Auth from "../types/VenderType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const AllVenderListShowToAdminAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ALL_VENDER_LIST_SHOW_TOADMIN_REQUEST,
    });
    const { data } = await axios.get(
      `${BACKEND_URL}vendor/vendor_list/`,
      params
    );
    dispatch({
      type: Auth.ALL_VENDER_LIST_SHOW_TOADMIN_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.ALL_VENDER_LIST_SHOW_TOADMIN_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const VenderRegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.VENDER_REGISTER_REQUEST,
    });
    const { data } = await axios.post(`${BACKEND_URL}vendor_register/`, params);
    dispatch({
      type: Auth.VENDER_REGISTER_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: Auth.VENDER_REGISTER_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const VenderAddProdcutAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_ADD_PRODUCT_REQUEST,
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
        `${BACKEND_URL}vendor/vendor_product/`,
        params,
        config
      );
      dispatch({
        type: Auth.VENDER_ADD_PRODUCT_SUCCESS,
        payload: data,
      });
      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_ADD_PRODUCT_FAIL,
        payload:
          error?.response && error.response.data?.product_link?.[0]
            ? error.response.data?.product_link?.[0]
            : error.response.data.message
            ? error.response.data.message
            : error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const VenderdProdcutListAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_PRODUCT_LIST_REQUEST,
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
        `${BACKEND_URL}vendor/vendor_product/`,
        config,
        params
      );
      dispatch({
        type: Auth.VENDER_PRODUCT_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_PRODUCT_LIST_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderUpdateProdcutAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_UPDATE_PRODUCT_REQUEST,
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
        `${BACKEND_URL}vendor/vendor_product/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.VENDER_UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_UPDATE_PRODUCT_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderProdcutGetByIDAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_PRODUCT_GETBYID_REQUEST,
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
        `${BACKEND_URL}vendor/vendor_product/${id}/`,
        config,
        params
      );
      dispatch({
        type: Auth.VENDER_PRODUCT_GETBYID_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_PRODUCT_GETBYID_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderProdcutDeleteAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_PRODUCT_DELETE_REQUEST,
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
        `${BACKEND_URL}vendor/vendor_product/${id}/`,
        config,
        params
      );
      dispatch({
        type: Auth.VENDER_PRODUCT_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_PRODUCT_DELETE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderAddNotesAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.VENDER_ADD_NOTES_REQUEST,
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
      `${BACKEND_URL}vendor/notes/`,
      params,
      config
    );
    dispatch({
      type: Auth.VENDER_ADD_NOTES_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.VENDER_ADD_NOTES_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const VenderNotesListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.VENDER_NOTES_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}vendor/notes/`, config);
    dispatch({
      type: Auth.VENDER_NOTES_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.VENDER_NOTES_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const VenderGetNotesDataByIDAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_NOTES_GET_DATA_BYID_REQUEST,
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
        `${BACKEND_URL}vendor/notes/${id}/`,
        config
      );
      dispatch({
        type: Auth.VENDER_NOTES_GET_DATA_BYID_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_NOTES_GET_DATA_BYID_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderNotesUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_NOTES_UPDATE_REQUEST,
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
        `${BACKEND_URL}vendor/notes/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.VENDER_NOTES_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_NOTES_UPDATE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VenderNotesDeleteAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.VENDER_NOTES_DELETE_REQUEST,
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
        `${BACKEND_URL}vendor/notes/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.VENDER_NOTES_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.VENDER_NOTES_DELETE_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserHirePartnerAndVenderAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_HIRE_PARTNER_OR_VENDER_REQUEST,
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
        `${BACKEND_URL}hiring-process/`,
        params,
        config
      );
      dispatch({
        type: Auth.USER_HIRE_PARTNER_OR_VENDER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_HIRE_PARTNER_OR_VENDER_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserGetHiredPatnerAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.USER_HIRED_PARTNER_VENDER_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}hiring-process/`, config);
    dispatch({
      type: Auth.USER_HIRED_PARTNER_VENDER_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_HIRED_PARTNER_VENDER_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserRemovedHiredParterVenderAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_REQUEST,
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
        `${BACKEND_URL}contract_start/?id=${id}`,
        params,
        config
      );
      dispatch({
        type: Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserAddRatingAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.USER_ADD_RATING_REQUEST,
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

    // const { data } = await axios.post(`${BACKEND_URL}ratings/`, params, config)
    const { data } = await axios.post(
      `${BACKEND_URL}ratings_create/`,
      params,
      config
    );
    dispatch({
      type: Auth.USER_ADD_RATING_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.USER_ADD_RATING_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetAllRatingsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.GET_ALL_RATING_REQUEST,
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
      `${BACKEND_URL}ratings/user_ratings/`,
      config
    );
    dispatch({
      type: Auth.GET_ALL_RATING_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.GET_ALL_RATING_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ContractAcceptRejectAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.CONTRACT_ACCEPT_REJECT_REQUEST,
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
        `${BACKEND_URL}hiring-start/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.CONTRACT_ACCEPT_REJECT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.CONTRACT_ACCEPT_REJECT_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const EndTheContractAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.END_THE_CONTRACT_REQUEST,
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
        `${BACKEND_URL}hiring-process/${id}/`,
        params,
        config
      );

      dispatch({
        type: Auth.END_THE_CONTRACT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.END_THE_CONTRACT_FAIL,
        payload:
          error?.response && error.response.data
            ? error.response && error.response.data
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
