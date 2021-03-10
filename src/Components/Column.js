import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Contatiner = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 10px;
`;
const TaskList = styled.div`
  padding: 10px;
`;

const Column = (props) => {
  return (
    <Contatiner>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => {
          return (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((task, index) => {
                return <Task key={task.id} task={task} index={index} />;
              })}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </Contatiner>
  );
};

export default Column;
