import {getToken, setToken} from '../api/token';

const initianalState = {
  token: getToken(),
};

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = token => ({
  type: DELETE_TOKEN,
  token,
});

export const tokenReducer = (state = initianalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      setToken(``);
      history.pushState({}, `Blogget`, 'http://localhost:3000/');
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
