import React, { Component } from 'react';
import classes from './App.css';

import Header from './components/Header';
import SingleItem from './components/SingleItem';
import Footer from './components/Footer';
import CreateTodo from './components/CreateTodo';

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = { 
    todos: []
   }

   handleCreate = task => {
    this.setState( prevState => ({
        todos: [...prevState.todos, {id: uuidv4(), task: task, completed: false}]
    }));
   }

   handleCompleted = taskId => {
     this.setState({ 
      todos: this.state.todos.map(
        todo => {
        if (todo.id === taskId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
   };

   handleDelete = taskId => {
    const todos = this.state.todos.filter(t => t.id !== taskId); 
    this.setState({ todos });
   }

  render() { 
    return ( 
      <div>
        <Header />
        <div className={classes.ctnr}>
            <CreateTodo onCreate={this.handleCreate} />
            { this.state.todos.map(todo => (
                <SingleItem key={todo.id} onDelete={this.handleDelete} onCompleted={this.handleCompleted} todo={todo} />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default App;
