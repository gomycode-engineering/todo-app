import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditTask = ({ item, editTask }) => {
  const [Myinput, setMyinput] = useState(item.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => setMyinput(e.target.value);
  const handleClick = () => {
    editTask({ ...item, description: Myinput });
    handleClose();
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form.Control type='text' value={Myinput} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
