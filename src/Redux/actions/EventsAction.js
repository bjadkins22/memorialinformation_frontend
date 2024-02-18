import * as Auth from "../types/EventsType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const Categoryshowlist = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.EVENT_CATEGORYADD_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}partner/category/`);
    dispatch({
      type: Auth.EVENT_CATEGORYADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENT_CATEGORYADD_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EventsPostAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.EVENTS_POST_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}family/event/`, params);
    dispatch({
      type: Auth.EVENTS_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENTS_POST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FlowermomorialAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.MEMORIAL_FLOWER_POST_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}public-memorial/`, params);
    dispatch({
      type: Auth.MEMORIAL_FLOWER_POST_FAIL,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENTS_POST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FlowermomorialListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.MEMORIAL_FLOWER_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}public-memorial/`, params);
    dispatch({
      type: Auth.MEMORIAL_FLOWER_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MEMORIAL_FLOWER_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const propertyaddAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.PROPERTY_POST_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}property-disposition/
    `,
      params
    );
    dispatch({
      type: Auth.PROPERTY_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.PROPERTY_POST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyDetailPostAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FAMILY_DETAIL_POST_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}family-photos/`, params);
    dispatch({
      type: Auth.FAMILY_DETAIL_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_DETAIL_POST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FamilyDetailListAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FAMILY_DETAIL_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}family-photos/`, params);
    dispatch({
      type: Auth.FAMILY_DETAIL_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FAMILY_DETAIL_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MemorialPersondetailPostAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.MEMORIAL_PERSON_DETAIL_POST_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}memorial-information/`,
      params
    );
    dispatch({
      type: Auth.MEMORIAL_PERSON_DETAIL_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.MEMORIAL_PERSON_DETAIL_POST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EventsListGetAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.EVENTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}family/event/`);
    dispatch({
      type: Auth.EVENTS_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENTS_LIST_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EventsDeleteAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Auth.EVENTS_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}events/`);
    dispatch({
      type: Auth.EVENTS_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENTS_DELETE_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EventsDetailShowbyIDAction = (eventId) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.EVENT_DETAILS_SHOW_BYID_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}family/event/${eventId}/`);
    dispatch({
      type: Auth.EVENT_DETAILS_SHOW_BYID_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.EVENT_DETAILS_SHOW_BYID_FAIL,
      payload:
        error?.response && error.response.data
          ? error.response && error.response.data
          : error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};
