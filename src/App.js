import React, { Component } from 'react';
import classes from './App.css';

import Header from './components/Header';
import SingleItem from './components/SingleItem';
import Footer from './components/Footer';
import CreateTodo from './components/CreateTodo';

//For Testing
import Button from './elements/Button'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <div className={classes.ctnr}>
          {/* <React.Fragment> */}
            <CreateTodo />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          {/* </React.Fragment> */}
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default App;
