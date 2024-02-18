import * as Auth from "../types/paymentType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const AdminCreatePlanAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ADMIN_CREATE_PLAN_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}payment/memberships/`,
      params
    );
    dispatch({
      type: Auth.ADMIN_CREATE_PLAN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_CREATE_PLAN_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminShowPlanListAction = (term) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ADMIN_SEE_PLAN_LIST_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}payment/memberships/?subscription_type=${term}`
    );
    dispatch({
      type: Auth.ADMIN_SEE_PLAN_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_SEE_PLAN_LIST_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminDeletePlanAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ADMIN_DELETE_PLAN_REQUEST,
    });

    const { data } = await axios.delete(
      `${BACKEND_URL}payment/memberships/${id}/`
    );
    dispatch({
      type: Auth.ADMIN_DELETE_PLAN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_DELETE_PLAN_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PurchasePlanAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.PURCHASRE_PLAN_REQUEST,
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
      `${BACKEND_URL}payment/add-credit/`,
      params,
      config
    );
    dispatch({
      type: Auth.PURCHASRE_PLAN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.PURCHASRE_PLAN_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SubscriptionCheckAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.SUBSCRIPTION_CHECK_REQUEST,
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
        `${BACKEND_URL}payment/payment-verified/`,
        config
      );
      dispatch({
        type: Auth.SUBSCRIPTION_CHECK_SUCCESS,
        payload: data,
      });
      localStorage.setItem("Subscription", JSON.stringify(data));
      return true;
    } catch (error) {
      dispatch({
        type: Auth.SUBSCRIPTION_CHECK_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getWalletBalanceAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_WALLET_BALANCE_REQUEST,
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

      const { data } = await axios.get(`${BACKEND_URL}payment/wallet/`, config);
      dispatch({
        type: Auth.GET_WALLET_BALANCE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("Subscription", JSON.stringify(data));
      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_WALLET_BALANCE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
  export const getVendorSubsAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.GET_SUBCRIPTION_FOR_VENDOR_REQUEST,
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

      const { data } = await axios.get(`${BACKEND_URL}payment/Vendormemberships/`, config);
      dispatch({
        type: Auth.GET_SUBCRIPTION_FOR_VENDOR_SUCCESS,
        payload: data,
      });
      localStorage.setItem("Subscription", JSON.stringify(data));
      return true;
    } catch (error) {
      dispatch({
        type: Auth.GET_SUBCRIPTION_FOR_VENDOR_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const paymentOfContractAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.PAYMENT_OF_CONTRACT_REQUEST,
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
        `${BACKEND_URL}payment/project-payment/`,
        params,
        config
      );
      dispatch({
        type: Auth.PAYMENT_OF_CONTRACT_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.PAYMENT_OF_CONTRACT_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const VendorBuyPlanAction = (params) => async (dispatch,getState) => {
  try {
    dispatch({
      type: Auth.VENDOR_BUY_PLAN_REQUEST,
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
      `${BACKEND_URL}payment/add-membership/`,
      params,
      config
    );
    dispatch({
      type: Auth.VENDOR_BUY_PLAN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
   
    dispatch({
      type: Auth.VENDOR_BUY_PLAN_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response.data.message
          : error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
