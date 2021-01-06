import React, { Component } from 'react';
import classes from './App.css';

import Header from './components/Header';
import SingleItem from './components/SingleItem';
import Footer from './components/Footer';
import CreateTodo from './components/CreateTodo';

//For Testing
import Button from './elements/Button'

class App extends Component {
  state = { 
    todos: [
      { id: 1, task: "This is the first task.", completed: false },
      { id: 2, task: "This is the second task.", completed: false },
      { id: 3, task: "This is the third task.", completed: false },
    ]
   }

   handleCreate = task => {
    this.setState( prevState => ({
        todos: [...prevState.todos, {id: prevState.length, task: task, completed: false}]
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
