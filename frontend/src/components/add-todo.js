import React, { useState } from 'react';
import TodoDataService from '../services/todos';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const AddTodo = props => {

  let editing = false;
  let initialTodoTitle = "";
  let initialTodoBody = "";

  if (props.location.state && props.location.state.currentTodo) {
    editing = true;
    initialTodoTitle = props.location.state.currentTodo.title;
    initialTodoBody = props.location.state.currentTodo.body;
  }

  const [title, setTitle] = useState(initialTodoTitle);
  const [body, setBody] = useState(initialTodoBody);
  // keeps track if todo is submitted
  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = e => {
    const title = e.target.value;
    setTitle(title);
  }

  const onChangeBody = e => {
    const body = e.target.value;
    setBody(body);
  }

  const saveTodo = () => {
    var data = {
      title: title,
      body: body,
      completed: false,
    }

    if (editing) {
      TodoDataService.updateTodo(
        props.location.state.currentTodo.id,
        data, props.token)
        .then(response => {
          setSubmitted(true);
          console.log(response.data)
        })
        .catch(e => {
          console.log(e);
        })
    }
    else {
    

    TodoDataService.createTodo(data, props.token)
      .then(response => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
    }
  }

  return(
    <Container>
      {submitted ? (
        <div>
          <h4>Todo submitted successfully</h4>
          <Link to={"/todos/"}>
            <Button variant="outline-info" className="mb-3">
              Back to Todos
            </Button>
          </Link>
        </div>
      ):(
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? "Edit": "Create"} Todo</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="e.g. buy gift tomorrow"
              value={title}
              onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              onChange={onChangeBody}
            />
          </Form.Group>
          <Button variant="info" onClick={saveTodo}>
            {editing ? "Edit" : "Add"} To-do
          </Button>
        </Form>
      )}
    </Container>
  )
}

export default AddTodo;
