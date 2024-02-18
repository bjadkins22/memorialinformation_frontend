import * as Auth from "../types/SuperAdminType";

export const AddFileStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.ADD_FILE_STATUS_REQUEST:
      return { loading: true };

    case Auth.ADD_FILE_STATUS_SUCCESS:
      return {
        loading: false,
        success: true,
        AddFileStatus: action.payload,
        message: action.payload.message,
      };

    case Auth.ADD_FILE_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FileDataGetReducer = (state = { FileDataGet: [] }, action) => {
  switch (action.type) {
    case Auth.FILE_GET_SHOW_REQUEST:
      return { loading: true };

    case Auth.FILE_GET_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        FileDataGet: action.payload,
        message: action.payload.message,
      };

    case Auth.FILE_GET_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const StateChangeUserReducer = (
  state = { StateChangeUser: [] },
  action
) => {
  switch (action.type) {
    case Auth.STATE_CHANGE_USER_REQUEST:
      return { loading: true };

    case Auth.STATE_CHANGE_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        StateChangeUser: action.payload,
        message: action.payload.message,
      };

    case Auth.STATE_CHANGE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetFileDataByIDReducer = (
  state = { GetFileDataByID: [] },
  action
) => {
  switch (action.type) {
    case Auth.FILE_GET_SHOW_DATA_BYID_REQUEST:
      return { loading: true };

    case Auth.FILE_GET_SHOW_DATA_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        GetFileDataByID: action.payload,
        message: action.payload.message,
      };

    case Auth.FILE_GET_SHOW_DATA_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeleteFileReducer = (state = { DeleteFile: [] }, action) => {
  switch (action.type) {
    case Auth.DELETE_FILE_STATUS_REQUEST:
      return { loading: true };

    case Auth.DELETE_FILE_STATUS_SUCCESS:
      return {
        loading: false,
        success: true,
        DeleteFile: action.payload,
        message: action.payload.message,
      };

    case Auth.DELETE_FILE_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserSendJobInqueryReducer = (
  state = { UserSendJobInquery: [] },
  action
) => {
  switch (action.type) {
    case Auth.USER_SEND_JOB_INQUIRY_REQUEST:
      return { loading: true };

    case Auth.USER_SEND_JOB_INQUIRY_SUCCESS:
      return {
        loading: false,
        success: true,
        UserSendJobInquery: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_SEND_JOB_INQUIRY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetUserSendJobInqueryReducer = (
  state = { GetUserSendJobInquery: [] },
  action
) => {
  switch (action.type) {
    case Auth.GET_USER_SEND_JOB_INQUIRY_REQUEST:
      return { loading: true };

    case Auth.GET_USER_SEND_JOB_INQUIRY_SUCCESS:
      return {
        loading: false,
        success: true,
        GetUserSendJobInquery: action.payload,
        message: action.payload.message,
      };

    case Auth.GET_USER_SEND_JOB_INQUIRY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeleteUserSendJobInqueryReducer = (
  state = { DeleteUserSendJobInquery: [] },
  action
) => {
  switch (action.type) {
    case Auth.DELETE_USER_SEND_JOB_INQUIRY_REQUEST:
      return { loading: true };

    case Auth.DELETE_USER_SEND_JOB_INQUIRY_SUCCESS:
      return {
        loading: false,
        success: true,
        DeleteUserSendJobInquery: action.payload,
        message: action.payload.message,
      };

    case Auth.DELETE_USER_SEND_JOB_INQUIRY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// job

export const AdminAddJobReducer = (state = { AdminAddJob: [] }, action) => {
  switch (action.type) {
    case Auth.ADMIN_ADD_JOB_REQUEST:
      return { loading: true };

    case Auth.ADMIN_ADD_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminAddJob: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_ADD_JOB_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminGetAllJobReducer = (
  state = { AdminGetAllJob: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_GET_JOB_REQUEST:
      return { loading: true };

    case Auth.ADMIN_GET_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminGetAllJob: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_GET_JOB_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminDeleteJobReducer = (
  state = { AdminDeleteJob: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_DELETE_JOB_REQUEST:
      return { loading: true };

    case Auth.ADMIN_DELETE_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminDeleteJob: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_DELETE_JOB_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminGetByIDJobReducer = (
  state = { AdminGetByIDJob: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_GET_BYID_JOB_REQUEST:
      return { loading: true };

    case Auth.ADMIN_GET_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminGetByIDJob: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_GET_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AdminUpdateJobReducer = (
  state = { AdminUpdateJob: [] },
  action
) => {
  switch (action.type) {
    case Auth.ADMIN_UPDATE_JOB_REQUEST:
      return { loading: true };

    case Auth.ADMIN_UPDATE_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
        AdminUpdateJob: action.payload,
        message: action.payload.message,
      };

    case Auth.ADMIN_UPDATE_JOB_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FuneralPersonAddReducer = (
  state = { FuneralPersonAdd: [] },
  action
) => {
  switch (action.type) {
    case Auth.FUNERAL_PERSON_DETAIL_ADD_REQUEST:
      return { loading: true };

    case Auth.FUNERAL_PERSON_DETAIL_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        FuneralPersonAdd: action.payload,
        message: action.payload.message,
      };

    case Auth.FUNERAL_PERSON_DETAIL_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FuneralPersonGetDataReducer = (
  state = { FuneralPersonGetData: [] },
  action
) => {
  switch (action.type) {
    case Auth.FUNERAL_PERSON_DETAIL_GET_REQUEST:
      return { loading: true };

    case Auth.FUNERAL_PERSON_DETAIL_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        FuneralPersonGetData: action.payload,
        message: action.payload.message,
      };

    case Auth.FUNERAL_PERSON_DETAIL_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FuneralPersonDataDeleteReducer = (
  state = { FuneralPersonDataDelete: [] },
  action
) => {
  switch (action.type) {
    case Auth.FUNERAL_PERSON_DETAIL_DELETE_REQUEST:
      return { loading: true };

    case Auth.FUNERAL_PERSON_DETAIL_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        FuneralPersonDataDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.FUNERAL_PERSON_DETAIL_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FuneralPersonDataUpdateReducer = (
  state = { FuneralPersonDataUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.FUNERAL_PERSON_DETAIL_UPDATE_REQUEST:
      return { loading: true };

    case Auth.FUNERAL_PERSON_DETAIL_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        FuneralPersonDataUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.FUNERAL_PERSON_DETAIL_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserApplyjobReducer = (state = { UserApplyjob: [] }, action) => {
  switch (action.type) {
    case Auth.USER_APPLY_JOB_REQUEST:
      return { loading: true };

    case Auth.USER_APPLY_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
        UserApplyjob: action.payload,
        message: action.payload.message,
      };

    case Auth.USER_APPLY_JOB_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ApplyJobSeeDetailReducer = (
  state = { ApplyJobSeeDetail: [] },
  action
) => {
  switch (action.type) {
    case Auth.APPLY_JOB_SEE_DETAILS_REQUEST:
      return { loading: true };

    case Auth.APPLY_JOB_SEE_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        ApplyJobSeeDetail: action.payload,
        message: action.payload.message,
      };

    case Auth.APPLY_JOB_SEE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetApplyAllJobReducer = (
  state = { GetApplyAllJob: [] },
  action
) => {
  switch (action.type) {
    case Auth.APPLIED_JOB_SHOWADMIN_REQUEST:
      return { loading: true };

    case Auth.APPLIED_JOB_SHOWADMIN_SUCCESS:
      return {
        loading: false,
        success: true,
        GetApplyAllJob: action.payload,
        message: action.payload.message,
      };

    case Auth.APPLIED_JOB_SHOWADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetAppliedJobDetailReducer = (
  state = { GetAppliedJobDetail: [] },
  action
) => {
  switch (action.type) {
    case Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_REQUEST:
      return { loading: true };

    case Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_SUCCESS:
      return {
        loading: false,
        success: true,
        GetAppliedJobDetail: action.payload,
        message: action.payload.message,
      };

    case Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const StatusUpdateReducer = (state = { StatusUpdate: [] }, action) => {
  switch (action.type) {
    case Auth.STATUS_UPDATE_REQUEST:
      return { loading: true };

    case Auth.STATUS_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        StatusUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.STATUS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetStatusUpdateReducer = (
  state = { GetStatusUpdate: [] },
  action
) => {
  switch (action.type) {
    case Auth.STATUS_UPDATE_GET_REQUEST:
      return { loading: true };

    case Auth.STATUS_UPDATE_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        GetStatusUpdate: action.payload,
        message: action.payload.message,
      };

    case Auth.STATUS_UPDATE_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
