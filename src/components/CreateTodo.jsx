import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const createtodo = () => {
    return (
        <div style={divStyle} className="input-group mb-3">
            <div className="input-group-prepend">
                <button style={btnStyle} className="btn btn-outline-secondary" type="button">Create Task</button>
            </div>
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
        </div>
    );
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

export default createtodo;