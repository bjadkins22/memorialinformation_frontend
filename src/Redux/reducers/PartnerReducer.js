import * as Auth from "../types/PartnerType";

export const PartnerAddReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.PARTNER_TYPE_ADD_REQUEST:
      return { loading: true };

    case Auth.PARTNER_TYPE_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TYPE_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ActivePartnerShowReducer = (
  state = { ActivePartnerShow: [] },
  action
) => {
  switch (action.type) {
    case Auth.ACTIVE_PARTNER_SHOW_REQUEST:
      return { loading: true };

    case Auth.ACTIVE_PARTNER_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        ActivePartnerShow: action.payload,
        message: action.payload.message,
      };

    case Auth.ACTIVE_PARTNER_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserChatwithPartnerPostReducer = (
  state = { UserChatwithPartnerPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_CHAT_WITH_PARTNER_POST_REQUEST:
      return { loading: true };

    case Auth.USER_CHAT_WITH_PARTNER_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        UserChatwithPartnerPost: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_CHAT_WITH_PARTNER_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserCahtwithPartnerListReducer = (
  state = { UserCahtwithPartnerList: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_CHAT_WITHPARTNER_LIST_REQUEST:
      return { loading: true };

    case Auth.USER_CHAT_WITHPARTNER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        UserCahtwithPartnerList: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_CHAT_WITHPARTNER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const OverAllChatCountAction = (
  state = { overAllChatCount: [] },
  action
) => {
  switch (action.type) {
    case Auth.OVERALL_CHAT_COUNT_REQUEST:
      return { loading: true };

    case Auth.OVERALL_CHAT_COUNT_SUCCESS:
      return {
        loading: false,
        success: true,
        overAllChatCount: action.payload,
        message: action.payload.message,
      };

    case Auth.OVERALL_CHAT_COUNT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ChatSeenReducer = (
  state = { chatSeen: [] },
  action
) => {
  switch (action.type) {
    case Auth.CHAT_SEEN_REQUEST:
      return { loading: true };

    case Auth.CHAT_SEEN_SUCCESS:
      return {
        loading: false,
        success: true,
        chatSeen: action.payload,
        message: action.payload.message,
      };

    case Auth.CHAT_SEEN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const PartnerSearchFilterReducer = (
  state = { PartnerSearchFilter: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_SEARCH_FILTER_REQUEST:
      return { loading: true };

    case Auth.PARTNER_SEARCH_FILTER_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerSearchFilter: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_SEARCH_FILTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerOwnEventsPostReducer = (
  state = { PartnerOwnEventsPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_EVENTS_POST_REQUEST:
      return { loading: true };

    case Auth.PARTNER_EVENTS_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerOwnEventsPost: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_EVENTS_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerVenueEventGetReducer = (
  state = { PartnerVenueEventGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_EVENTS_VENUE_GET_REQUEST:
      return { loading: true };

    case Auth.PARTNER_EVENTS_VENUE_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerVenueEventGet: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_EVENTS_VENUE_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerVenueEventUpdateReducer = (
  state = { PartnerVenueEventUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_EVENTS_UPDATE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_EVENTS_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerVenueEventUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_EVENTS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerVenueEventDeleteReducer = (
  state = { PartnerVenueEventDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_EVENTS_DELETE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_EVENTS_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerVenueEventDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_EVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProfileUpdateReducer = (
  state = { PartnerProfileUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PROFILE_UPDATE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProfileUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProfileGetDataReducer = (
  state = { PartnerProfileGetData: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PROFILE_GET_DATA_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PROFILE_GET_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProfileGetData: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PROFILE_GET_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerVenuDataGetByIdReducer = (
  state = { PartnerVenuDataGetById: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_VENUE_GET_BYID_REQUEST:
      return { loading: true };

    case Auth.PARTNER_VENUE_GET_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerVenuDataGetById: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_VENUE_GET_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const partnerPlatfromSuggestionPostReducer = (
  state = { partnerPlatfromSuggestionPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.PLAT_FORM_SUGGESTION_REQUEST:
      return { loading: true };

    case Auth.PLAT_FORM_SUGGESTION_SUCCESS:
      return {
        loading: false,
        success: true,
        partnerPlatfromSuggestionPost: action.payload,
        message: action.payload.message,
      };

    case Auth.PLAT_FORM_SUGGESTION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerPlatfromSuggestionGetReducer = (
  state = { PartnerPlatfromSuggestionGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.PLAT_FORM_SUGGESTION_GET_DATA_REQUEST:
      return { loading: true };

    case Auth.PLAT_FORM_SUGGESTION_GET_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerPlatfromSuggestionGet: action.payload,
        message: action.payload.message,
      };

    case Auth.PLAT_FORM_SUGGESTION_GET_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminDeletePartnerSuggestionReducer = (
  state = { AdminDeletePartnerSuggestion: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_DELETE_PARTNER_SUGGESTION_REQUEST:
      return { loading: true };

    case Auth.ADMIN_DELETE_PARTNER_SUGGESTION_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminDeletePartnerSuggestion: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_DELETE_PARTNER_SUGGESTION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerSuggestionGetByIDReducer = (
  state = { PartnerSuggestionGetByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_SUGGESTION_GETBYID_REQUEST:
      return { loading: true };

    case Auth.PARTNER_SUGGESTION_GETBYID_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerSuggestionGetByID: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_SUGGESTION_GETBYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SupportChatPostReducer = (
  state = { SupportChatPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.SUPPORT_CHAT_POST_REQUEST:
      return { loading: true };

    case Auth.SUPPORT_CHAT_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        SupportChatPost: action.payload,
        message: action.payload.message,
      };

    case Auth.SUPPORT_CHAT_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SupportChatListGetReducer = (
  state = { SupportChatListGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.SUPPORT_CHAT_GET_REQUEST:
      return { loading: true };

    case Auth.SUPPORT_CHAT_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        SupportChatListGet: action.payload,
        message: action.payload.message,
      };

    case Auth.SUPPORT_CHAT_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminSeeUserAllMessgaeReducer = (
  state = { AdminSeeUserAllMessgae: [] },
  action
) => {
  switch (action.type) {
    case Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_REQUEST:
      return { loading: true };

    case Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminSeeUserAllMessgae: action.payload,
        message: action.payload.message,
      };

    case Auth.SUPPORT_CHAT_REQUEST_TO_ADMIN_MESSGAE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerAddUserReducer = (
  state = { PartnerAddUser: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_ADD_USER_REQUEST:
      return { loading: true };

    case Auth.PARTNER_ADD_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerAddUser: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_ADD_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerSeeHisUserListReducer = (
  state = { PartnerSeeHisUserList: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_SEE_HIS_USER_LIST_REQUEST:
      return { loading: true };

    case Auth.PARTNER_SEE_HIS_USER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerSeeHisUserList: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_SEE_HIS_USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserHelpListAllMessageReducer = (
  state = { UserHelpListAllMessage: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_HELP_LIST_ALLMESSAGE_REQUEST:
      return { loading: true };

    case Auth.USER_HELP_LIST_ALLMESSAGE_SUCCESS:
      return {
        loading: false,
        success: true,
        UserHelpListAllMessage: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_HELP_LIST_ALLMESSAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AllChatGetBYIdReducr = (
  state = { AllChatGetBYId: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_CHAT_GETBY_ID_REQUEST:
      return { loading: true };

    case Auth.USER_CHAT_GETBY_ID_SUCCESS:
      return {
        loading: false,
        success: true,
        AllChatGetBYId: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_CHAT_GETBY_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnersOwnUsersReducer = (
  state = { PartnersOwnUsers: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNERS_OWN_USERS_REQUEST:
      return { loading: true };

    case Auth.PARTNERS_OWN_USERS_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnersOwnUsers: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNERS_OWN_USERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerAddTutorialReducer = (
  state = { PartnerAddTutorial: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_ADD_TUTORIAL_REQUEST:
      return { loading: true };

    case Auth.PARTNER_ADD_TUTORIAL_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerAddTutorial: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_ADD_TUTORIAL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerTutorialListReducer = (
  state = { PartnerTutorialList: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_TUTORIAL_LIST_REQUEST:
      return { loading: true };

    case Auth.PARTNER_TUTORIAL_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerTutorialList: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TUTORIAL_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerTutorialDeleteReducer = (
  state = { PartnerTutorialDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_TUTORIAL_DELETE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_TUTORIAL_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerTutorialDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TUTORIAL_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerTutorialGetDataByidReducer = (
  state = { PartnerTutorialGetDataByid: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_TUTORIAL_GET_DATABYID_REQUEST:
      return { loading: true };

    case Auth.PARTNER_TUTORIAL_GET_DATABYID_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerTutorialGetDataByid: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TUTORIAL_GET_DATABYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerTutorialUpdateReducer = (
  state = { PartnerTutorialUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_TUTORIAL_UPDATE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_TUTORIAL_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerTutorialUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TUTORIAL_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const IsVerifiedVedioSeeUserRedcuer = (
  state = { IsVerifiedVedioSeeUser: [] },
  action
) => {
  switch (action.type) {
    case Auth.IS_VERIFIED_VEDIO_SEE_USER_REQUEST:
      return { loading: true };

    case Auth.IS_VERIFIED_VEDIO_SEE_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        IsVerifiedVedioSeeUser: action.payload,
        message: action.payload.message,
      };

    case Auth.IS_VERIFIED_VEDIO_SEE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const IsVerifiedUserListRedcuer = (
  state = { IsVerifiedUserList: [] },
  action
) => {
  switch (action.type) {
    case Auth.IS_VERIFIED_LIST_USER_REQUEST:
      return { loading: true };

    case Auth.IS_VERIFIED_LIST_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        IsVerifiedUserList: action.payload,
        message: action.payload.message,
      };

    case Auth.IS_VERIFIED_LIST_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerAddProductReducer = (
  state = { PartnerAddProduct: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_ADD_PRODUCT_REQUEST:
      return { loading: true };

    case Auth.PARTNER_ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerAddProduct: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProductAllistReducer = (
  state = { PartnerProductAllist: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PRODUCT_LIST_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProductAllist: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProductDeleteReducer = (
  state = { PartnerProductDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProductDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProductGetDataReducer = (
  state = { PartnerProductGetData: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PRODUCT_GET_DATA_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PRODUCT_GET_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProductGetData: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PRODUCT_GET_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerProductUpdateReducer = (
  state = { PartnerProductUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case Auth.PARTNER_PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerProductUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAllChatListWithUserReducer = (
  state = { GetAllChatListWithUser: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_ALL_CHAT_WITH_USER_REQUEST:
      return { loading: true };

    case Auth.GET_ALL_CHAT_WITH_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        GetAllChatListWithUser: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_ALL_CHAT_WITH_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserMessageChatSelectRedcuer = (
  state = { UserMessageChatSelect: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_MESSAGE_CHAT_SELECT_REQUEST:
      return { loading: true };

    case Auth.USER_MESSAGE_CHAT_SELECT_SUCCESS:
      return {
        loading: false,
        success: true,
        UserMessageChatSelect: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_MESSAGE_CHAT_SELECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAllUserDataByIdReducer = (
  state = { GetAllUserDataById: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_ALL_USER_DATA_BYID_REQUEST:
      return { loading: true };

    case Auth.GET_ALL_USER_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        GetAllUserDataById: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_ALL_USER_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// sachin

export const GetHiredPersonListReducer = (
  state = { GetHiredPersonList: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_HIRED_PERSON_LIST_REQUEST:
      return { loading: true };

    case Auth.GET_HIRED_PERSON_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        GetHiredPersonList: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_HIRED_PERSON_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAllPersonListReducer = (
  state = { GetHiredPersonList: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_ALL_PERSON_LIST_REQUEST:
      return { loading: true };

    case Auth.GET_ALL_PERSON_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        GetALLPersonList: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_ALL_PERSON_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetHirePersonDetailsReducer = (
  state = { GetHiredPersonDetails: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_HIRE_PERSON_DETAILS_REQUEST:
      return { loading: true };

    case Auth.GET_HIRE_PERSON_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        GetHiredPersonDetails: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_HIRE_PERSON_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MyVideoAddReducer = (state = { MyVideoAdd: [] }, action) => {
  switch (action.type) {
    case Auth.MY_VIDEO_ADD_REQUEST:
      return { loading: true };

    case Auth.MY_VIDEO_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        MyVideoAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_VIDEO_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MyVideoGetAllListReducer = (
  state = { MyVideoGetAllList: [] },
  action
) => {
  switch (action.type) {
    case Auth.MY_VIDEO_ALL_LIST_REQUEST:
      return { loading: true };

    case Auth.MY_VIDEO_ALL_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        MyVideoGetAllList: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_VIDEO_ALL_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MyVideoEditReducer = (state = { MyVideoEdit: [] }, action) => {
  switch (action.type) {
    case Auth.MY_VIDEO_EDIT_REQUEST:
      return { loading: true };

    case Auth.MY_VIDEO_EDIT_SUCCESS:
      return {
        loading: false,
        success: true,
        MyVideoEdit: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_VIDEO_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MyVideoDeleteReducer = (state = { MyVideoDelete: [] }, action) => {
  switch (action.type) {
    case Auth.MY_VIDEO_DELETE_REQUEST:
      return { loading: true };

    case Auth.MY_VIDEO_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        MyVideoDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_VIDEO_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MyVideoGetDataByIdReducer = (
  state = { MyVideoGetDataById: [] },
  action
) => {
  switch (action.type) {
    case Auth.MY_VIDEO_GET_DATA_BYID_REQUEST:
      return { loading: true };

    case Auth.MY_VIDEO_GET_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        MyVideoGetDataById: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_VIDEO_GET_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const myUserShowPartnerloginReducer = (
  state = { myUserShowPartner: [] },
  action
) => {
  switch (action.type) {
    case Auth.MY_USER_SHOW_PARTNER_LOGIN_REQUEST:
      return { loading: true };

    case Auth.MY_USER_SHOW_PARTNER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        myUserShowPartner: action.payload,
        message: action.payload.message,
      };

    case Auth.MY_USER_SHOW_PARTNER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
