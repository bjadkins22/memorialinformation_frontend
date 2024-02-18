import * as Auth from "../types/paymentType";

export const AdminCreatePlanReducer = (state = {}, action) => {

  switch (action.type) {
    case Auth.ADMIN_CREATE_PLAN_REQUEST:
      return { loading: true };

    case Auth.ADMIN_CREATE_PLAN_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminCreatePlan: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_CREATE_PLAN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }

};

export const AdminShowPlanListReducer = (
  state = { AdminShowPlanList: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_SEE_PLAN_LIST_REQUEST:
      return { loading: true };

    case Auth.ADMIN_SEE_PLAN_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminShowPlanList: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_SEE_PLAN_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminDeletePlanReducer = (
  state = { AdminDeletePlan: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_DELETE_PLAN_REQUEST:
      return { loading: true };

    case Auth.ADMIN_DELETE_PLAN_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminDeletePlan: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_DELETE_PLAN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const PurchasePlanRedcuer = (
  state = { PurchasePlan: [] },
  action
) => {
  switch (action.type) {
    case Auth.PURCHASRE_PLAN_REQUEST:
      return { loading: true };

    case Auth.PURCHASRE_PLAN_SUCCESS:
      return {
        loading: false,
        success: true,
        PurchasePlan: action.payload,
        message: action.payload.message,
      };

    case Auth.PURCHASRE_PLAN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SubscriptionCheckReducer = (
  state = { SubscriptionCheck: [] },
  action
) => {
  switch (action.type) {
    case Auth.SUBSCRIPTION_CHECK_REQUEST:
      return { loading: true };

    case Auth.SUBSCRIPTION_CHECK_SUCCESS:
      return {
        loading: false,
        success: true,
        SubscriptionCheck: action.payload,
        message: action.payload.message,
      };

    case Auth.SUBSCRIPTION_CHECK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const getWalletBalanceReducer = (
  state = { getWalletBalance: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_WALLET_BALANCE_REQUEST:
      return { loading: true };

    case Auth.GET_WALLET_BALANCE_SUCCESS:
      return {
        loading: false,
        success: true,
        getWalletBalance: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_WALLET_BALANCE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const paymentOfContractReducer = (
  state = { paymentOfContract: [] },
  action
) => {
  switch (action.type) {
    case Auth.PAYMENT_OF_CONTRACT_REQUEST:
      return { loading: true };

    case Auth.PAYMENT_OF_CONTRACT_SUCCESS:
      return {
        loading: false,
        success: true,
        paymentOfContract: action.payload,
        message: action.payload.message,
      };

    case Auth.PAYMENT_OF_CONTRACT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getVendorSubsReducer = (
  state = { GetVendorSubs: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_SUBCRIPTION_FOR_VENDOR_REQUEST:
      return { loading: true };

    case Auth.GET_SUBCRIPTION_FOR_VENDOR_SUCCESS:
      return {
        loading: false,
        success: true,
        GetVendorSubs: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_SUBCRIPTION_FOR_VENDOR_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const VendorBuyPlanReducer = (state = {}, action) => {

  switch (action.type) {
    case Auth.VENDOR_BUY_PLAN_REQUEST:
      return { loading: true };

    case Auth.VENDOR_BUY_PLAN_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminCreatePlan: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDOR_BUY_PLAN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }

};