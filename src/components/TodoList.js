import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import EditTask from './EditTask';

const TodoList = ({ List, deletTask, editTask, completeTask }) => {
  return (
    <ListGroup>
      {List.map((item, i) => (
        <ListGroup.Item key={i}>
          <p className={item.isDone ? 'checked' : ''}>{item.description}</p>
          <Button variant='danger' onClick={() => deletTask(item.id)}>
            Delete
          </Button>
          <EditTask item={item} editTask={editTask} />
          <Button variant='secondary' onClick={() => completeTask(item.id)}>
            {item.isDone ? 'isDone' : 'unDone'}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
