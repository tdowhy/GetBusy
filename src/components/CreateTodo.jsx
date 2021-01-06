import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class CreateTodo extends Component {
    state = {
        title: ''
    }


    onSubmit = e => {
        e.preventDefault();
        this.props.onCreate(this.state.title);
        this.setState({ title: '' });
    } 

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div style={divStyle}>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <button onClick={ () =>
                        this.props.onCreateTask }
                        style={btnStyle} type="submit" className="btn btn-outline-secondary">Create Task</button>
                    <input autocomplete="off" type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                </form>
            </div>
        );
    }
}

const btnStyle = {
    backgroundColor: "#287094",
    color: "#D4D4D4",
}

const divStyle = {
    marginTop: "2.5rem",
    marginLeft: "15%",
    width: "75%",
    fontFamily: 'Montserrat, sans-serif',  
}

export default CreateTodo;