import {URL_API} from '../../api/const';
import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (news) => ({
  type: POST_REQUEST_SUCCESS,
  news,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postRequest());
  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  })
    .then(({data: {data}}) => {
      dispatch(postRequestSuccess(data.children));
    })
    .catch(err => {
      console.log(err);
      dispatch(postRequestError(err.toString()));
    });
};
