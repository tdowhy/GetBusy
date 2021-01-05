import React, { Component } from 'react';
import Checkbox from '../elements/Checkbox';
import classes from './SingleItem.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SingleItem extends Component {
    render() { 
        return ( 
            <div style={divStyle}>
                <p>
                    <Checkbox style={{ flex: '10', padding: '5px' }} />
                    This is the first task
                    <button style={btnStyle} className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </p>
            </div>
         );
    }
}

const btnStyle = {
    float: "right",
    fontSize: "19px",
};

const divStyle = {
    marginLeft: "25%",
};
 
export default SingleItem;