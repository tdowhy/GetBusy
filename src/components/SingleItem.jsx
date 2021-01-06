import React, { Component } from 'react';
import Checkbox from '../elements/Checkbox';
import classes from './SingleItem.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SingleItem extends Component {
    divStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            marginLeft: "25%",
            marginTop: "1rem",
        };
    };

    btnStyle = () => {
        return {
            float: "right",
            fontSize: "19px",
        };
    };

    componentDidMount = (props) => {
        console.log(this.props.todo);
      };

    render() { 
        return ( 
            <div style={this.divStyle()}>
                <p>
                    <Checkbox onCompleted={this.props.onCompleted} todo={this.props.todo} />
                    {this.props.todo.task}
                    <button onClick={() => this.props.onDelete(this.props.todo.id)} 
                        style={this.btnStyle()} className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </p>
            </div>
         );
    }
}

 
export default SingleItem;