import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Button.module.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const button = () => {
    return (
        <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
    );
}

export default button;