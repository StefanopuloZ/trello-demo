import { combineReducers } from '@reduxjs/toolkit';
import { tasksSlice } from './redux/tasksSlice';

const rootReducer = combineReducers({
  tasksSlice,
});

export { rootReducer };
