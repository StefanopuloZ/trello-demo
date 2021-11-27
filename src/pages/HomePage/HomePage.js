import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DndContext,
  useSensors,
  useSensor,
  MouseSensor,
  DragOverlay,
} from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { addTask, moveTask, getTask } from '../../redux/tasksSlice';
import { Board } from './components/Board';
import { TaskForm } from './components/TaskForm';
import { Task } from './components/Task';

const HomePageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`;

function HomePage() {
  const [activeId, setActiveId] = useState(null);
  const tasks = useSelector(state => state.tasks);
  const task = useSelector(({ tasks }) => getTask(tasks, activeId));
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: { x: 1, y: 1 },
      },
    }),
  );

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  function createTask(task) {
    dispatch(addTask(task));
    setOpenDialog(false);
  }

  function handleDragStart({ active }) {
    setActiveId(active.id);
  }

  function handleDragEnd({ active, over }) {
    const currentStatus = active.data.current.status;
    const nextStatus = over.id;

    if (currentStatus !== nextStatus) {
      dispatch(moveTask({
        id: active.id,
        fromStatus: currentStatus,
        toStatus: nextStatus,
      }));
    }

    setActiveId(null);
  }

  return (
    <HomePageWrapper>
      <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
        <Box>
          <Button variant="outlined" onClick={handleOpenDialog}>Create issue</Button>
        </Box>

        <Board tasks={tasks} />

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>New Task</DialogTitle>
          <DialogContent>
            <TaskForm onSubmit={createTask} onCancel={handleCloseDialog} newTask />
          </DialogContent>
        </Dialog>

        <DragOverlay>
          {activeId ? (
            <Task isDragOverlay {...task} />
        ) : null}
        </DragOverlay>
      </DndContext>
    </HomePageWrapper>
  );
}

export { HomePage };
