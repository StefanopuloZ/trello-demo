import React, { useState } from 'react';
import styled from 'styled-components';
import { palette, ifProp } from 'styled-tools';
import { useDispatch } from 'react-redux';
import { useDroppable } from '@dnd-kit/core';
import { Box, List, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { editTask } from '../../../redux/tasksSlice';
import { Task, TaskForm } from '.';

const Wrapper = styled(Box)`
  padding: 10px;
  background-color: ${palette('lightGray')};
  min-height: 100%;
  border-radius: ${palette('borderRadius')};
  box-shadow: ${ifProp('isOver', palette('shadow'))};
  transition: all 0.3s ease;

  h2 {
    font-weight: 500;
  }
`;

function StatusBoard({ tasks, title, status }) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  function handleOpenDialog(task) {
    setOpenDialog(true);
    setActiveTask(task);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
    setActiveTask({});
  }

  function handleEditTask(task) {
    dispatch(editTask(task));
    handleCloseDialog();
  }

  return (
    <Wrapper ref={setNodeRef} isOver={isOver}>
      <h2>{title}</h2>
      <List>
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            status={status}
            onClick={() => handleOpenDialog(task)}
            />
          ))
          }
      </List>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TaskForm onSubmit={handleEditTask} onCancel={handleCloseDialog} task={activeTask} />
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
}

export { StatusBoard };
