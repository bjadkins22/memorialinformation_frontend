import * as Auth from "../types/VenderType";

export const AllVenderListShowToAdminReducer = (
  state = { AllVenderListShowToAdmin: [] },
  action
) => {
  switch (action.type) {
    case Auth.ALL_VENDER_LIST_SHOW_TOADMIN_REQUEST:
      return { loading: true };

    case Auth.ALL_VENDER_LIST_SHOW_TOADMIN_SUCCESS:
      return {
        loading: false,
        success: true,
        AllVenderListShowToAdmin: action.payload,
        message: action.payload.message,
      };

    case Auth.ALL_VENDER_LIST_SHOW_TOADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderRegisterReducer = (
  state = { venderregister: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_REGISTER_REQUEST:
      return { loading: true };

    case Auth.VENDER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        venderregister: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderAddProdcutRecuer = (
  state = { VenderAddProdcut: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_ADD_PRODUCT_REQUEST:
      return { loading: true };

    case Auth.VENDER_ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderAddProdcut: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderdProdcutListRecuer = (
  state = { VenderdProdcutList: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_PRODUCT_LIST_REQUEST:
      return { loading: true };

    case Auth.VENDER_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderdProdcutList: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderUpdateProdcutRecuer = (
  state = { VenderUpdateProdcut: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_UPDATE_PRODUCT_REQUEST:
      return { loading: true };

    case Auth.VENDER_UPDATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderUpdateProdcut: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderProdcutGetByIDRecuer = (
  state = { VenderProdcutGetByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_PRODUCT_GETBYID_REQUEST:
      return { loading: true };

    case Auth.VENDER_PRODUCT_GETBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderProdcutGetByID: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_PRODUCT_GETBYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderProdcutDeleteRecuer = (
  state = { VenderProdcutDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case Auth.VENDER_PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderProdcutDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderAddNotesRecuer = (
  state = { VenderAddNotes: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_ADD_NOTES_REQUEST:
      return { loading: true };

    case Auth.VENDER_ADD_NOTES_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderAddNotes: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_ADD_NOTES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderNotesListRecuer = (
  state = { VenderNotesList: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_NOTES_LIST_REQUEST:
      return { loading: true };

    case Auth.VENDER_NOTES_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderNotesList: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderGetNotesDataByIDReducer = (
  state = { VenderGetNotesDataByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_NOTES_GET_DATA_BYID_REQUEST:
      return { loading: true };

    case Auth.VENDER_NOTES_GET_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderGetNotesDataByID: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_NOTES_GET_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderNotesUpdateReducer = (
  state = { VenderNotesUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_NOTES_UPDATE_REQUEST:
      return { loading: true };

    case Auth.VENDER_NOTES_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderNotesUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_NOTES_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const VenderNotesDeleteReducer = (
  state = { VenderNotesDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.VENDER_NOTES_DELETE_REQUEST:
      return { loading: true };

    case Auth.VENDER_NOTES_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        VenderNotesDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.VENDER_NOTES_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserHirePartnerAndVenderReducer = (
  state = { UserHirePartnerAndVender: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_HIRE_PARTNER_OR_VENDER_REQUEST:
      return { loading: true };

    case Auth.USER_HIRE_PARTNER_OR_VENDER_SUCCESS:
      return {
        loading: false,
        success: true,
        UserHirePartnerAndVender: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_HIRE_PARTNER_OR_VENDER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserGetHiredPatnerReducer = (
  state = { UserGetHiredPatner: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_HIRED_PARTNER_VENDER_LIST_REQUEST:
      return { loading: true };

    case Auth.USER_HIRED_PARTNER_VENDER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        UserGetHiredPatner: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_HIRED_PARTNER_VENDER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserRemovedHiredParterVenderReducer = (
  state = { UserRemovedHiredParterVender: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_REQUEST:
      return { loading: true };

    case Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        UserRemovedHiredParterVender: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_REMOVED_HIRED_PARTNER_VENDER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserAddRatingReducer = (state = { UserAddRating: [] }, action) => {
  switch (action.type) {
    case Auth.USER_ADD_RATING_REQUEST:
      return { loading: true };

    case Auth.USER_ADD_RATING_SUCCESS:
      return {
        loading: false,
        success: true,
        UserAddRating: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_ADD_RATING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAllRatingsReducer = (state = { GetAllRatings: [] }, action) => {
  switch (action.type) {
    case Auth.GET_ALL_RATING_REQUEST:
      return { loading: true };

    case Auth.GET_ALL_RATING_SUCCESS:
      return {
        loading: false,
        success: true,
        GetAllRatings: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_ALL_RATING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const VenderUpdateProdcutReducer = (
  state = { venderAcceptReject: [] },
  action
) => {
  switch (action.type) {
    case Auth.CONTRACT_ACCEPT_REJECT_REQUEST:
      return { loading: true };

    case Auth.CONTRACT_ACCEPT_REJECT_SUCCESS:
      return {
        loading: false,
        success: true,
        venderAcceptReject: action.payload,
        message: action.payload.message,
      };

    case Auth.CONTRACT_ACCEPT_REJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const EndTheContractReducer = (
  state = { endOfContract: [] },
  action
) => {
  switch (action.type) {
    case Auth.END_THE_CONTRACT_REQUEST:
      return { loading: true };

    case Auth.END_THE_CONTRACT_SUCCESS:
      return {
        loading: false,
        success: true,
        endOfContract: action.payload,
        message: action.payload.message,
      };

    case Auth.END_THE_CONTRACT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
