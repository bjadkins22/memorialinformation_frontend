import * as Auth from "../types/SuperAdminType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const AddFileStatusAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADD_FILE_STATUS_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}partner/upload_partner_list/`,
      params,
      config
    );
    dispatch({
      type: Auth.ADD_FILE_STATUS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADD_FILE_STATUS_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FileDataGetAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.FILE_GET_SHOW_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_URL}partner/upload_partner_list/`,
      config
    );
    dispatch({
      type: Auth.FILE_GET_SHOW_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FILE_GET_SHOW_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const StateChangeUserAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.STATE_CHANGE_USER_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_URL}partner/upload_partner_list/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.STATE_CHANGE_USER_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.STATE_CHANGE_USER_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetFileDataByIDAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.FILE_GET_SHOW_DATA_BYID_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_URL}partner/upload_partner_list/${id}/`,
      config
    );
    dispatch({
      type: Auth.FILE_GET_SHOW_DATA_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FILE_GET_SHOW_DATA_BYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteFileStatusAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.DELETE_FILE_STATUS_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.delete(
      `${BACKEND_URL}partner/upload_partner_list/${id}/`,
      config
    );
    dispatch({
      type: Auth.DELETE_FILE_STATUS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.DELETE_FILE_STATUS_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserSendJobInqueryAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.USER_SEND_JOB_INQUIRY_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.post(
        `${BACKEND_URL}careers_applicants/`,
        params,
        config
      );
      dispatch({
        type: Auth.USER_SEND_JOB_INQUIRY_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.USER_SEND_JOB_INQUIRY_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const GetUserSendJobInqueryAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.GET_USER_SEND_JOB_INQUIRY_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_URL}careers_applicants/`,
      config
    );
    dispatch({
      type: Auth.GET_USER_SEND_JOB_INQUIRY_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.GET_USER_SEND_JOB_INQUIRY_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DeleteUserSendJobInqueryAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.DELETE_USER_SEND_JOB_INQUIRY_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.delete(
        `${BACKEND_URL}careers_applicants/${id}/`,
        config
      );
      dispatch({
        type: Auth.DELETE_USER_SEND_JOB_INQUIRY_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.DELETE_USER_SEND_JOB_INQUIRY_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

// job

export const AdminAddJobAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADMIN_ADD_JOB_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}job_posts/`,
      params,
      config
    );
    dispatch({
      type: Auth.ADMIN_ADD_JOB_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_ADD_JOB_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminGetAllJobAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.ADMIN_GET_JOB_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}job_posts/`);
    dispatch({
      type: Auth.ADMIN_GET_JOB_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_GET_JOB_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminDeleteJobAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADMIN_DELETE_JOB_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.delete(
      `${BACKEND_URL}job_posts/${id}/`,
      config
    );
    dispatch({
      type: Auth.ADMIN_DELETE_JOB_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_DELETE_JOB_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminGetByIDJobAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.ADMIN_GET_BYID_JOB_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_URL}job_posts/${id}/`, config);
    dispatch({
      type: Auth.ADMIN_GET_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.ADMIN_GET_BYID_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AdminUpdateJobAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.ADMIN_UPDATE_JOB_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_URL}job_posts/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.ADMIN_UPDATE_JOB_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.ADMIN_UPDATE_JOB_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FuneralPersonAddAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_ADD_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.post(
        `${BACKEND_URL}death-information/`,
        params,
        config
      );
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_ADD_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_ADD_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FuneralPersonGetDataAction =
  (params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_GET_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_URL}death-information/`,
        params,
        config
      );
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_GET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_GET_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FuneralPersonDataDeleteAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_DELETE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.delete(
        `${BACKEND_URL}death-information/${id}/`,
        config
      );
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_DELETE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_DELETE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const FuneralPersonDataUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_UPDATE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //     Authorization: `Bearer ${userData.token}`,
      //   },
      // };

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_URL}death-information/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FUNERAL_PERSON_DETAIL_UPDATE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const UserApplyjobAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.USER_APPLY_JOB_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}job_apply/`,
      params,
      config
    );
    dispatch({
      type: Auth.USER_APPLY_JOB_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: Auth.USER_APPLY_JOB_FAIL,
      payload:
        error?.response && error.response.data.email?.[0]
          ? error.response && error.response.data.email?.[0]
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ApplyJobSeeDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.APPLY_JOB_SEE_DETAILS_REQUEST,
    });

    // const {
    //   authReducer: { userData },
    // } = getState();

    // const config = {
    //   headers: {
    //     "Content-type": "multipart/formdata",
    //     Authorization: `Bearer ${userData.token}`,
    //   },
    // };

    const { data } = await axios.get(`${BACKEND_URL}job_posts/${id}/`);
    dispatch({
      type: Auth.APPLY_JOB_SEE_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.APPLY_JOB_SEE_DETAILS_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetApplyAllJobAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_REQUEST,
    });
    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_URL}job_apply/`, config);
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const GetAppliedJobDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_REQUEST,
    });
    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/formdata",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_URL}job_apply/${id}/`, config);
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.APPLIED_JOB_SHOWADMIN_BYID_DETAIL_FAIL,
      payload:
        error?.response && error.response.data.message
          ? error.response && error.response.data.message
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const StatusUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.STATUS_UPDATE_REQUEST,
      });
      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_URL}partner/update-status/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.STATUS_UPDATE_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.STATUS_UPDATE_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };



  





export const GetStatusUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: Auth.STATUS_UPDATE_GET_REQUEST,
      });
      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_URL}partner/update-status/${id}/`,
        params,
        config
      );
      dispatch({
        type: Auth.STATUS_UPDATE_GET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.STATUS_UPDATE_GET_FAIL,
        payload:
          error?.response && error.response.data.message
            ? error.response && error.response.data.message
            : error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
