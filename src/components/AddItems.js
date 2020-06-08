import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const AddItems = ({ addTask }) => {
  const [input, setinput] = useState('');

  const handelChange = (e) => {
    setinput(e.target.value);
  };
  const add = (e) => {
    if (input) {
      e.preventDefault();
      addTask({ id: Date.now(), description: input, isDone: false });
      setinput('');
    } else alert('mahah');
  };
  return (
    <Card bg='primary'>
      <Card.Header>ToDo-App</Card.Header>
      <Card.Body>
        <Form className='d-flex justify-content-center' onSubmit={add}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control type='text' onChange={handelChange} value={input} />
          </Form.Group>
          <Button variant='success' onClick={add}>
            Add
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddItems;
