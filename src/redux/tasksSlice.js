import { createSlice, current } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    toDo: [],
    inProgress: [],
    done: [],
    nextIndex: 1,
  },
  reducers: {
    addTask: (state, action) => {
      const { title, description = '', user = null } = action.payload;
      const id = state.nextIndex;

      const task = {
        id,
        title,
        description,
        status: 'toDo',
        user,
      };

      state.toDo.push(task);

      ++state.nextIndex;
    },
    moveTask: (state, action) => {
      const allTasks = [...state.toDo, ...state.inProgress, ...state.done];
      const { fromStatus, toStatus, id } = action.payload;
      const task = allTasks.find(task => task.id === id);

      task.status = toStatus;

      state[fromStatus] = state[fromStatus].filter(task => task.id !== id);
      state[toStatus].push(task);
    },
    editTask: (state, action) => {
      const { id, status: nextStatus } = action.payload;
      const allTasks = [...state.toDo, ...state.inProgress, ...state.done];
      const task = allTasks.find(task => task.id === id);
      const currentStatus = task.status;
      const index = state[currentStatus].findIndex(task => task.id === id);

      const editedTask = { ...task, ...action.payload };

      state[currentStatus][index] = editedTask;

      if (currentStatus !== nextStatus) {
        state[currentStatus] = state[currentStatus].filter(task => task.id !== id);
        state[nextStatus].push(editedTask);
      }
    },
  },
});

const { reducer, actions } = tasksSlice;

const { addTask, moveTask, editTask } = actions;

const getTask = ({ toDo, inProgress, done }, id) => {
  const allTasks = [...toDo, ...inProgress, ...done];
  return allTasks.find(task => task.id === id);
  // console.log('state', state, 'id', id);
};

export {
  reducer as tasksSlice,
  addTask,
  moveTask,
  editTask,
  getTask,
};
