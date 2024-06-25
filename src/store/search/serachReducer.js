import {SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_ERROR} from './searchAction';

const initialState = {
  loading: false,
  news: [],
  error: '',
  after: ``,
  isLast: false,
  page: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.post,
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: 'loading',
        error: action.error,
      };

    default:
      return state;
  }
};
