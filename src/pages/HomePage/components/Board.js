import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { Grid } from '@mui/material';
import { StatusBoard } from './StatusBoard';

const GridWrapper = styled(Grid)`
  max-width: 100%;
  margin: 0;
  margin-top: 20px;
  padding: 20px 20px 20px 0;
  min-height: max-content;
  border: 2px solid ${palette('transBlue')};
  border-radius: ${palette('borderRadius')};
`;

const GridItem = styled(Grid)`
  min-height: 500px;
  height: 100%;
`;

function Board({ tasks }) {
  const { toDo, inProgress, done } = tasks;

  return (
    <GridWrapper container columnSpacing={2}>
      <GridItem item xs={4}>
        <StatusBoard status="toDo" tasks={toDo} title="To-Do" />
      </GridItem>
      <GridItem item xs={4}>
        <StatusBoard status="inProgress" tasks={inProgress} title="In Progress" />
      </GridItem>
      <GridItem item xs={4}>
        <StatusBoard status="done" tasks={done} title="Done" />
      </GridItem>
    </GridWrapper>
  );
}

export { Board };
