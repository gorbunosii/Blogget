import {createSlice} from '@reduxjs/toolkit';
import {commentaryRequestAsync} from './commentaryAction';

const initialState = {
  post: {},
  comment: [],
  status: '',
  error: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentaryRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(commentaryRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload;
        state.status = 'loaded';
        state.comment = action.payload;
        state.error = '';
      })
      .addCase(commentaryRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export default commentsSlice.reducer;
