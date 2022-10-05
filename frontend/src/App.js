import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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
