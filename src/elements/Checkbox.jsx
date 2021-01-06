import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class checkbox extends Component {  
    checkboxStyle = () => {
        return {
            marginRight: "9px",
            marginLeft: "9px",
            marginBottom: "12px",
        };
    };
    render() {
        return (
            <input onChange={this.props.onCompleted.bind(this, this.props.todo.id)} style={this.checkboxStyle()} defaultChecked={this.props.todo.completed} type="checkbox" value="" aria-label="..." />
        );
    }
}

export default checkbox;