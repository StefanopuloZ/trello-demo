import { createSlice } from '@reduxjs/toolkit';

const testReducer = createSlice({
  name: 'posts',
  initialState: ['1', '2'],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
});

const { reducer } = testReducer;

export { reducer as testReducer };
