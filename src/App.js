import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddItems from './components/AddItems';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
  const addTask = (item) => {
    setTodolist([...todolist, item]);
  };

  const deletTask = (i) => {
    setTodolist(todolist.filter((el) => el.id !== i));
  };

  const editTask = (editedItem) => {
    setTodolist(
      todolist.map((el) => (el.id === editedItem.id ? editedItem : el))
    );
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  return (
    <Container>
      <AddItems addTask={addTask} />
      <TodoList
        List={todolist}
        deletTask={deletTask}
        editTask={editTask}
        completeTask={completeTask}
      />
    </Container>
  );
}

export default App;
