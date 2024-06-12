import {COMMENT_REQUEST,
  COMMENT_REQUEST_ERROR,
  COMMENT_REQUEST_SUCCESS} from './commentaryAction';

const initialState = {
  status: '',
  comment: {},
  error: '',
};

export const commentaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        comment: action.comment,
        error: '',
      };
    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
