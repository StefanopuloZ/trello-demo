import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './redux/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export { store };
