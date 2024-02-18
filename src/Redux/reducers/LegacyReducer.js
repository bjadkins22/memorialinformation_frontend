import * as Auth from "../types/LegacyType";

export const LegacyAddReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.LEGACY_DOCUMENT_ADD_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DOCUMENT_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DOCUMENT_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyListShowReducer = (
  state = { LegacyListShow: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_DOCUMENT_SHOW_LIST_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DOCUMENT_SHOW_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyListShow: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DOCUMENT_SHOW_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyListUpdateReducer = (
  state = { LegacyListUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_DOCUMENT_UPDATE_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DOCUMENT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyListUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DOCUMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyDetailsGetByIDReducer = (
  state = { LegacyDetailsGetByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyDetailsGetByID: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DOCUMENT_GET_DETAIL_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeleteLegacyReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.LEGACY_DOCUMENT_LIST_DELETE_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DOCUMENT_LIST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        DeleteLegacy: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DOCUMENT_LIST_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyTodoAddReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.FAMILY_TODO_ADD_REQUEST:
      return { loading: true };

    case Auth.FAMILY_TODO_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        todoAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_TODO_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyTodoListShowReducer = (
  state = { FamilyTodoListShow: [] },
  action
) => {
  switch (action.type) {
    case Auth.FAMILY_TODO_LIST_SHOW_REQUEST:
      return { loading: true };

    case Auth.FAMILY_TODO_LIST_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyTodoListShow: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_TODO_LIST_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyTodoDeleteListReducer = (
  state = { FamilyTodoDeleteList: [] },
  action
) => {
  switch (action.type) {
    case Auth.FAMILY_TODO_DELETE_LIST_REQUEST:
      return { loading: true };

    case Auth.FAMILY_TODO_DELETE_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyTodoDeleteList: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_TODO_DELETE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyTodoGetListByIdReducer = (
  state = { FamilyTodoGetListById: [] },
  action
) => {
  switch (action.type) {
    case Auth.FAMILY_TODO_LIST_GET_BYID_REQUEST:
      return { loading: true };

    case Auth.FAMILY_TODO_LIST_GET_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyTodoGetListById: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_TODO_LIST_GET_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyTodoListUpdateReducer = (
  state = { FamilyTodoListUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.FAMILY_TODO_LIST_UPDATE_REQUEST:
      return { loading: true };

    case Auth.FAMILY_TODO_LIST_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyTodoListUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_TODO_LIST_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LagacyCodeAddReducer = (state = { LagacyCodeAdd: [] }, action) => {
  switch (action.type) {
    case Auth.LAGACY_CODE_ENTER_PAGE_REQUEST:
      return { loading: true };

    case Auth.LAGACY_CODE_ENTER_PAGE_SUCCESS:
      return {
        loading: false,
        success: true,
        LagacyCodeAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.LAGACY_CODE_ENTER_PAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const EnterPasswordVerficationReducer = (
  state = { EnterPasswordVerfication: [] },
  action
) => {
  switch (action.type) {
    case Auth.PASSWORD_ENTER_VERFICATION_REQUEST:
      return { loading: true };

    case Auth.PASSWORD_ENTER_VERFICATION_SUCCESS:
      return {
        loading: false,
        success: true,
        EnterPasswordVerfication: action.payload,
        message: action.payload.message,
      };

    case Auth.PASSWORD_ENTER_VERFICATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const OtpVerficationReducer = (
  state = { OtpVerfication: [] },
  action
) => {
  switch (action.type) {
    case Auth.OTP_VERFICATION_REQUEST:
      return { loading: true };

    case Auth.OTP_VERFICATION_SUCCESS:
      return {
        loading: false,
        success: true,
        OtpVerfication: action.payload,
        message: action.payload.message,
      };

    case Auth.OTP_VERFICATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MemorialInformationListReducer = (
  state = { MemorialInformationList: [] },
  action
) => {
  switch (action.type) {
    case Auth.MEMORAIL_INFORMATION_RELATION_REQUEST:
      return { loading: true };

    case Auth.MEMORAIL_INFORMATION_RELATION_SUCCESS:
      return {
        loading: false,
        success: true,
        MemorialInformationList: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMORAIL_INFORMATION_RELATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyDataShowMemberReducer = (
  state = { LegacyDataShowMember: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_DATA_SHOW_MEMBER_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DATA_SHOW_MEMBER_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyDataShowMember: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DATA_SHOW_MEMBER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MemberListshowLegacyReducer = (
  state = { MemberListshowLegacy: [] },
  action
) => {
  switch (action.type) {
    case Auth.MEMBER_RELATION_LIST_REQUEST:
      return { loading: true };

    case Auth.MEMBER_RELATION_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        MemberListshowLegacy: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMBER_RELATION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MemberPermissionGrantReducer = (
  state = { MemberPermissionGrant: [] },
  action
) => {
  switch (action.type) {
    case Auth.MEMBER_PERMISSION_GRANT_REQUEST:
      return { loading: true };

    case Auth.MEMBER_PERMISSION_GRANT_SUCCESS:
      return {
        loading: false,
        success: true,
        MemberPermissionGrant: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMBER_PERMISSION_GRANT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GivePermissionLegacypagePostReducer = (
  state = { GivePermissionLegacypagePost: [] },
  action
) => {
  switch (action.type) {
    case Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_REQUEST:
      return { loading: true };

    case Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_SUCCESS:
      return {
        loading: false,
        success: true,
        GivePermissionLegacypagePost: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMBER_GIVE_PERMISSION_LEGACYSEE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetPermissionListReducer = (
  state = { GetPermissionList: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_PERMISSIONS_LIST_REQUEST:
      return { loading: true };

    case Auth.GET_PERMISSIONS_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        GetPermissionList: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_PERMISSIONS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeletePermissionListReducer = (
  state = { DeletePermissionList: [] },
  action
) => {
  switch (action.type) {
    case Auth.PERMISSIONS_DELETE_REQUEST:
      return { loading: true };

    case Auth.PERMISSIONS_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        DeletePermissionList: action.payload,
        message: action.payload.message,
      };

    case Auth.PERMISSIONS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyDeleteAllDataReducer = (
  state = { LegacyDeleteAllData: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_ALL_MODEL_DELETE_REQUEST:
      return { loading: true };

    case Auth.LEGACY_ALL_MODEL_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyDeleteAllData: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_ALL_MODEL_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LegacyDeleteOnByOneModalReducer = (
  state = { LegacyDeleteOnByOneModal: [] },
  action
) => {
  switch (action.type) {
    case Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_REQUEST:
      return { loading: true };

    case Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_SUCCESS:
      return {
        loading: false,
        success: true,
        LegacyDeleteOnByOneModal: action.payload,
        message: action.payload.message,
      };

    case Auth.LEGACY_DELELTE_MODAL_ONE_BY_ONE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UpadteLegacyPasswordReducer = (
  state = { UpadteLegacyPassword: [] },
  action
) => {
  switch (action.type) {
    case Auth.UPDATE_LAGACY_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.UPDATE_LAGACY_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        UpadteLegacyPassword: action.payload,
        message: action.payload.message,
      };

    case Auth.UPDATE_LAGACY_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const forgotLegacyPasswordReducer = (
  state = { forgotLegacyPassword: [] },
  action
) => {
  switch (action.type) {
    case Auth.FORGOT_LEGACY_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.FORGOT_LEGACY_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        forgotLegacyPassword: action.payload,
        message: action.payload.message,
      };

    case Auth.FORGOT_LEGACY_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ResetLegacyPasswordReducer = (
  state = { ResetLegacyPassword: [] },
  action
) => {
  switch (action.type) {
    case Auth.RESET_LEGACY_PASSWORD_REQUEST:
      return { loading: true };

    case Auth.RESET_LEGACY_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        ResetLegacyPassword: action.payload,
        message: action.payload.message,
      };

    case Auth.RESET_LEGACY_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SalePropertyPostReducer = (
  state = { SalePropertyPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.SALE_PEOPERTY_POST_REQUEST:
      return { loading: true };

    case Auth.SALE_PEOPERTY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        SalePropertyPost: action.payload,
        message: action.payload.message,
      };

    case Auth.SALE_PEOPERTY_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ListGetSalePropertyPostReducer = (
  state = { ListGetSalePropertyPost: [] },
  action
) => {
  switch (action.type) {
    case Auth.SALE_PEOPERTY_LIST_GET_REQUEST:
      return { loading: true };

    case Auth.SALE_PEOPERTY_LIST_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        ListGetSalePropertyPost: action.payload,
        message: action.payload.message,
      };

    case Auth.SALE_PEOPERTY_LIST_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SalePropertyDeleteReducer = (
  state = { SalePropertyDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.SALE_PROPERTY_DELETE_REQUEST:
      return { loading: true };

    case Auth.SALE_PROPERTY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        SalePropertyDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.SALE_PROPERTY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const SalePropertyEditReducer = (
  state = { SalePropertyEdit: [] },
  action
) => {
  switch (action.type) {
    case Auth.EDIT_PROPERTY_DATA_REQUEST:
      return { loading: true };

    case Auth.EDIT_PROPERTY_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        SalePropertyEdit: action.payload,
        message: action.payload.message,
      };

    case Auth.EDIT_PROPERTY_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetPropertyDataByIDReducer = (
  state = { GetPropertyDataByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_PROPERTY_DATA_BYID_REQUEST:
      return { loading: true };

    case Auth.GET_PROPERTY_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        GetPropertyDataByID: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_PROPERTY_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AddImagegalleryReducer = (
  state = { AddImagegallery: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADD_IMAGE_GALLERY_REQUEST:
      return { loading: true };

    case Auth.ADD_IMAGE_GALLERY_SUCCESS:
      return {
        loading: false,
        success: true,
        AddImagegallery: action.payload,
        message: action.payload.message,
      };

    case Auth.ADD_IMAGE_GALLERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetImagesgalleryReducer = (
  state = { GetImagesgallery: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_IMAGES_GALLERY_REQUEST:
      return { loading: true };

    case Auth.GET_IMAGES_GALLERY_SUCCESS:
      return {
        loading: false,
        success: true,
        GetImagesgallery: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_IMAGES_GALLERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeleteimagesgalleryReducer = (
  state = { Deleteimagesgallery: [] },
  action
) => {
  switch (action.type) {
    case Auth.DELETE_IMAGES_FROM_GALLERY_REQUEST:
      return { loading: true };

    case Auth.DELETE_IMAGES_FROM_GALLERY_SUCCESS:
      return {
        loading: false,
        success: true,
        Deleteimagesgallery: action.payload,
        message: action.payload.message,
      };

    case Auth.DELETE_IMAGES_FROM_GALLERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminaddBlogReducer = (state = { AdminaddBlog: [] }, action) => {
  switch (action.type) {
    case Auth.ADMIN_BLOG_ADD_REQUEST:
      return { loading: true };

    case Auth.ADMIN_BLOG_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminaddBlog: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_BLOG_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminShowBlogListReducer = (
  state = { AdminShowBlogList: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_BLOG_LIST_SHOW_REQUEST:
      return { loading: true };

    case Auth.ADMIN_BLOG_LIST_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminShowBlogList: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_BLOG_LIST_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminShowBlogDeleteReducer = (
  state = { AdminShowBlogDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_BLOG_DELETE_REQUEST:
      return { loading: true };
    case Auth.ADMIN_BLOG_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminShowBlogDelete: action.payload,
        message: action.payload.message,
      };
    case Auth.ADMIN_BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminShowBlogEditReducer = (
  state = { AdminShowBlogEdit: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_BLOG_EDIT_REQUEST:
      return { loading: true };
    case Auth.ADMIN_BLOG_EDIT_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminShowBlogEdit: action.payload,
        message: action.payload.message,
      };
    case Auth.ADMIN_BLOG_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminGetByIdBlogDataRedcuer = (
  state = { AdminGetByIdData: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_BLOG_GET_DATA_BYID_REQUEST:
      return { loading: true };
    case Auth.ADMIN_BLOG_GET_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminGetByIdData: action.payload,
        message: action.payload.message,
      };
    case Auth.ADMIN_BLOG_GET_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserSeehisfamilymemberRedcuer = (
  state = { UserSeehisfamilymember: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_SEEHIS_FAMILYMEMBER_REQUEST:
      return { loading: true };
    case Auth.USER_SEEHIS_FAMILYMEMBER_SUCCESS:
      return {
        loading: false,
        success: true,
        UserSeehisfamilymember: action.payload,
        message: action.payload.message,
      };
    case Auth.USER_SEEHIS_FAMILYMEMBER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
