import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  news: [],
  error: '',
  after: ``,
  isLast: false,
  page: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postRequestSuccessAfter: (state, action) => {
      state.loading = false,
      state.news = [...state.news, ...action.payload.children],
      state.error = '',
      state.after = action.payload.after,
      state.isLast = !action.payload.after;
    },
    changePage: (state, action) => {
      state.page = action.payload,
      state.after = '',
      state.isLast = false;
    },
    postRequestSuccess: (state, action) => {
      state.loading = false,
      state.news = action.payload.children,
      state.error = '',
      state.after = action.payload.after,
      state.isLast = !action.payload.after;
    },
    postRequestError: (state, action) => {
      state.loading = false,
      state.error = action.payload;
    },
    postRequestSuccessPending: (state) => {
      state.loading = true,
      state.error = '';
    },
  },
});

export default postSlice.reducer;
