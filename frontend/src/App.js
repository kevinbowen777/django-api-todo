import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class App extends Component {
  state = {
      todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>React-bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </div>
      </Navbar>
        <h1>ToDo List</h1>
        <p>
        <ul>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
          </div>
        ))}
        </ul>
        </p>
      </div>
    );
  }
}


export default App;
