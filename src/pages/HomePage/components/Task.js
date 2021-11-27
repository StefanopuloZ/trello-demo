import React from 'react';
import styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';
import { Box, ListItem } from '@mui/material';
import { DraggableItem } from './DraggableItem';

const ItemWrapper = styled(ListItem)`
  padding: 10px 0;
`;

const StyledContent = styled(Box)`
  border: 2px solid ${palette('transBlue')};
  border-radius: ${palette('borderRadius')};
  user-select: none;
  padding: 10px;
  width: 100%;
  background-color: ${palette('white')};
  line-height: 1.5rem;
  box-shadow: ${ifProp('isDragOverlay', palette('shadowLight'))};
  font-size: 14px;

  h3 {
    font-weight: 500;
  }

  span {
    text-transform: uppercase;
  }
`;

function Task({
  id,
  title,
  description,
  user,
  status,
  onClick,
  isDragOverlay,
 }) {
  const ElementWrapper = isDragOverlay ? 'div' : DraggableItem;

  return (
    <ElementWrapper id={id} status={status}>
      <ItemWrapper onClick={onClick}>
        <StyledContent isDragOverlay={isDragOverlay}>
          <h3>{id}. <span>{title}</span></h3>
          {description && <p>{description}</p>}
          {user && <p>User: <span>{user}</span></p>}
        </StyledContent>
      </ItemWrapper>
    </ElementWrapper>
  );
}

export { Task };
