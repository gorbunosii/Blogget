import {URL_API} from '../../api/const';
import axios from 'axios';
import {postSlice} from './postSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsync = createAsyncThunk('post/fetch',
  (newPage, {dispatch, getState}) => {
    let page = getState().post.page;
    if (newPage) {
      page = newPage;
      dispatch(postSlice.actions.changePage(page));
    }

    const token = getState().token.token;
    const after = getState().post.after;
    const loading = getState().post.loading;
    const isLast = getState().post.isLast;

    if (!token || loading || isLast) return;

    axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then(({data}) => {
        if (after) {
          dispatch(postSlice.actions.postRequestSuccessAfter(data.data));
        } else {
          dispatch(postSlice.actions.postRequestSuccess(data.data));
        }
      })
      .catch((error) => {
        dispatch(postSlice.actions.postRequestError(error));
      });
  });
