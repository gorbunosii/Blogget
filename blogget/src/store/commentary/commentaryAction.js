import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentaryRequestAsync = createAsyncThunk('comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then(({data}) => data)
      .catch((error) => error);
  });
