import * as Auth from "../types/UserType";

export const AllUserListReducer = (state = { AllUserList: [] }, action) => {
  switch (action.type) {
    case Auth.ALL_USER_LIST_REQUEST:
      return { loading: true };

    case Auth.ALL_USER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        AllUserList: action.payload,
        message: action.payload.message,
      };

    case Auth.ALL_USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const NewUserLoginListReducer = (
  state = { NewUserLoginList: [] },
  action
) => {
  switch (action.type) {
    case Auth.NEW_USER_ACTIVE_REQUEST:
      return { loading: true };

    case Auth.NEW_USER_ACTIVE_SUCCESS:
      return {
        loading: false,
        success: true,
        NewUserLoginList: action.payload,
        message: action.payload.message,
      };

    case Auth.NEW_USER_ACTIVE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ProfileUpadteReducer = (state = { ProfileUpadte: [] }, action) => {
  switch (action.type) {
    case Auth.PROFILE_UPADTE_REQUEST:
      return { loading: true };
    case Auth.PROFILE_UPADTE_SUCCESS:
      return {
        loading: false,
        success: true,
        ProfileUpadte: action.payload,
        message: action.payload.message,
      };

    case Auth.PROFILE_UPADTE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ProfileDetailsGetReducer = (
  state = { ProfileDetailsGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.PROFILE_DETAIL_GET_REQUEST:
      return { loading: true };
    case Auth.PROFILE_DETAIL_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        ProfileDetailsGet: action.payload,
        message: action.payload.message,
      };

    case Auth.PROFILE_DETAIL_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerRegsiterReducer = (
  state = { newPartnewRegister: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_REGISTER_REQUEST:
      return { loading: true };
    case Auth.PARTNER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        newPartnewRegister: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartneruserListGetReducer = (
  state = { PartneruserListGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_TYPE_USER_LIST_REQUEST:
      return { loading: true };
    case Auth.PARTNER_TYPE_USER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        PartneruserListGet: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_TYPE_USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PendingPartneruserListReducer = (
  state = { PendingPartneruserList: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_PENDING_LIST_REQUEST:
      return { loading: true };
    case Auth.PARTNER_PENDING_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        PendingPartneruserList: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_PENDING_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const PartnerRequestReducer = (
  state = { PartnerRequest: [] },
  action
) => {
  switch (action.type) {
    case Auth.PARTNER_REQUEST_ACCEPT_DECLINE_REQUEST:
      return { loading: true };
    case Auth.PARTNER_REQUEST_ACCEPT_DECLINE_SUCCESS:
      return {
        loading: false,
        success: true,
        PartnerRequest: action.payload,
        message: action.payload.message,
      };

    case Auth.PARTNER_REQUEST_ACCEPT_DECLINE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const InviteUserReducer = (state = { InviteUser: [] }, action) => {
  switch (action.type) {
    case Auth.INVITE_USER_REQUEST:
      return { loading: true };
    case Auth.INVITE_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        InviteUser: action.payload,
        message: action.payload.message,
      };

    case Auth.INVITE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AllRoleGetReducer = (state = { AllRoleGet: [] }, action) => {
  switch (action.type) {
    case Auth.ALL_ROLE_GET_REQUEST:
      return { loading: true };
    case Auth.ALL_ROLE_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        AllRoleGet: action.payload,
        message: action.payload.message,
      };
    case Auth.ALL_ROLE_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AllInviteMemberListReducer = (
  state = { AllInviteMemberList: [] },
  action
) => {
  switch (action.type) {
    case Auth.INVITE_MEMBER_LIST_REQUEST:
      return { loading: true };
    case Auth.INVITE_MEMBER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        AllInviteMemberList: action.payload,
        message: action.payload.message,
      };
    case Auth.INVITE_MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const InviteUserRequestAcceptReducer = (
  state = { InviteUserRequestAccept: [] },
  action
) => {
  switch (action.type) {
    case Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_REQUEST:
      return { loading: true };
    case Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_SUCCESS:
      return {
        loading: false,
        success: true,
        InviteUserRequestAccept: action.payload,
        message: action.payload.message,
      };
    case Auth.INVITE_USER_REQUEST_ACCEPT_DECLINE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ContactusDetailsAddReducer = (
  state = { ContactusDetailsAdd: [] },
  action
) => {
  switch (action.type) {
    case Auth.CONTACT_US_DETAILS_ADD_REQUEST:
      return { loading: true };
    case Auth.CONTACT_US_DETAILS_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        ContactusDetailsAdd: action.payload,
        message: action.payload.message,
      };
    case Auth.CONTACT_US_DETAILS_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ContactusDetailGetReducer = (
  state = { ContactusDetailGet: [] },
  action
) => {
  switch (action.type) {
    case Auth.CONTACT_US_DETAILS_GET_REQUEST:
      return { loading: true };
    case Auth.CONTACT_US_DETAILS_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        ContactusDetailGet: action.payload,
        message: action.payload.message,
      };
    case Auth.CONTACT_US_DETAILS_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserContactwithAdminReducer = (
  state = { UserContactwithAdmin: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_CONTACT_ADMIN_REQUEST:
      return { loading: true };
    case Auth.USER_CONTACT_ADMIN_SUCCESS:
      return {
        loading: false,
        success: true,
        UserContactwithAdmin: action.payload,
        message: action.payload.message,
      };
    case Auth.USER_CONTACT_ADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserUpdatePasswordReducer = (
  state = { UserUpdatePassword: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case Auth.USER_UPDATE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        UserUpdatePassword: action.payload,
        message: action.payload.message,
      };
    case Auth.USER_UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const RelTimeNotificationReducer = (
  state = { RelTimeNotification: [] },
  action
) => {
  switch (action.type) {
    case Auth.REALTIME_NOTIFICATION_REQUEST:
      return { loading: true };
    case Auth.REALTIME_NOTIFICATION_SUCCESS:
      return {
        loading: false,
        success: true,
        RelTimeNotification: action.payload,
        message: action.payload.message,
      };
    case Auth.REALTIME_NOTIFICATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const RelTimeNotificationUpdateReducer = (
  state = { RelTimeNotificationUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.REALTIME_NOTIFICATION_UPDATE_REQUEST:
      return { loading: true };
    case Auth.REALTIME_NOTIFICATION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        RelTimeNotificationUpdate: action.payload,
        message: action.payload.message,
      };
    case Auth.REALTIME_NOTIFICATION_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getUserPartnerReducer = (
  state = { getUserPartner: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_USER_PARTNER_REQUEST:
      return { loading: true };
    case Auth.GET_USER_PARTNER_SUCCESS:
      return {
        loading: false,
        success: true,
        getUserPartner: action.payload,
        message: action.payload.message,
      };
    case Auth.GET_USER_PARTNER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};