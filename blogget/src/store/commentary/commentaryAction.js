import {URL_API} from '../../api/const';
import axios from 'axios';

export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSuccess = (comment) => ({
  type: COMMENT_REQUEST_SUCCESS,
  comment,
});

export const commentRequestError = (error) => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const commentaryRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const id = getState().id.id;
  if (!token) return;
  dispatch(commentRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  })
    .then(({data}) => {
      dispatch(commentRequestSuccess(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(commentRequestError(err.toString()));
    });
};
