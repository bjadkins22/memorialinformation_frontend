import * as Auth from "../types/EventsType";

export const Ctegoryreducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.EVENT_CATEGORYADD_REQUEST:
      return { loading: true };

    case Auth.EVENT_CATEGORYADD_SUCCESS:
      return {
        loading: false,
        success: true,
        skillsData: action.payload,
        message: action.payload.message,
      };

    case Auth.EVENT_CATEGORYADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const EventsPostReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.EVENTS_POST_REQUEST:
      return { loading: true };

    case Auth.EVENTS_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        EventsPost: action.payload,
        message: action.payload.message,
      };

    case Auth.EVENTS_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FlowermomorialReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.MEMORIAL_FLOWER_POST_REQUEST:
      return { loading: true };

    case Auth.MEMORIAL_FLOWER_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        Flowermomorial: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMORIAL_FLOWER_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FlowermomorialListReducer = (
  state = { FlowermomorialList: [] },
  action
) => {
  switch (action.type) {
    case Auth.MEMORIAL_FLOWER_LIST_REQUEST:
      return { loading: true };

    case Auth.MEMORIAL_FLOWER_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        FlowermomorialList: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMORIAL_FLOWER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const propertyaddReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.PROPERTY_POST_REQUEST:
      return { loading: true };

    case Auth.PROPERTY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        propertyadd: action.payload,
        message: action.payload.message,
      };

    case Auth.PROPERTY_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyDetailPostReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.FAMILY_DETAIL_POST_REQUEST:
      return { loading: true };

    case Auth.FAMILY_DETAIL_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyDetailPost: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_DETAIL_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FamilyDetailListReducer = (
  state = { FamilyDetailList: [] },
  action
) => {
  switch (action.type) {
    case Auth.FAMILY_DETAIL_LIST_REQUEST:
      return { loading: true };

    case Auth.FAMILY_DETAIL_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyDetailList: action.payload,
        message: action.payload.message,
      };

    case Auth.FAMILY_DETAIL_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const MemorialPersondetailPostReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.MEMORIAL_PERSON_DETAIL_POST_REQUEST:
      return { loading: true };

    case Auth.MEMORIAL_PERSON_DETAIL_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        FamilyDetailPost: action.payload,
        message: action.payload.message,
      };

    case Auth.MEMORIAL_PERSON_DETAIL_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const EventsListGetReducer = (
  state = { EventsListGetList: [] },
  action
) => {
  switch (action.type) {
    case Auth.EVENTS_LIST_REQUEST:
      return { loading: true };

    case Auth.EVENTS_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        EventsListGetList: action.payload,
        message: action.payload.message,
      };

    case Auth.EVENTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const EventsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.EVENTS_DELETE_REQUEST:
      return { loading: true };

    case Auth.EVENTS_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        EventsDelete: action.payload,
        message: action.payload.message,
      };

    case Auth.EVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const EventsDetailShowbyIDReducer = (
  state = { EventsDetailShowbyID: [] },
  action
) => {
  switch (action.type) {
    case Auth.EVENT_DETAILS_SHOW_BYID_REQUEST:
      return { loading: true };

    case Auth.EVENT_DETAILS_SHOW_BYID_SUCCESS:
      return {
        loading: false,
        success: true,
        EventsDetailShowbyID: action.payload,
        message: action.payload.message,
      };

    case Auth.EVENT_DETAILS_SHOW_BYID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
