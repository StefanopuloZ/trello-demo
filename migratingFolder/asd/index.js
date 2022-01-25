import styled from "styled-components";
import {ifProp} from "styled-tools";
import {useDraggable} from "@dnd-kit/core";

const StyledDraggable = styled.div`
    opacity: ${ifProp("isDragging", "0.5", "1")};
`;

// update 2
// update 3
// update 3

function DraggableItem({id, children, status}) {
    const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
        id,
        data: {status},
    });

    return (
        <StyledDraggable
            isDragging={isDragging}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
        >
            {children}
        </StyledDraggable>
    );
}

export {DraggableItem};
