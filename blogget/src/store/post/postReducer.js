import {POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS} from './postAction';

const initialState = {
  loading: false,
  news: {},
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.news,
        error: '',
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
