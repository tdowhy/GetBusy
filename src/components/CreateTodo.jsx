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
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                {/* <div style={divStyle} className="form-group mb-3">
                    <div className="form-group-prepend"> */}
                        <button onClick={ () =>
                        this.props.onCreateTask }
                        style={btnStyle} type="submit" className="btn btn-outline-secondary">Create Task</button>
                    {/* </div> */}
                    <input type="text" name="title" defaultValue={this.state.title} onChange={this.handleChange} className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                {/* </div> */}
            </form>
        );
    }
}

const btnStyle = {
    backgroundColor: "#287094",
    color: "#D4D4D4",
}

const divStyle = {
    paddingTop: "1.5rem",
    marginLeft: "19%",
    width: "65%",
}

export default CreateTodo;