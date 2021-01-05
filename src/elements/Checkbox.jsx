import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const checkbox = () => {
    return (
        <input style={checkboxStyle} type="checkbox" value="" aria-label="..." />
    );
}

const checkboxStyle = {
    marginRight: "9px",
    marginLeft: "9px",
    marginBottom: "12px",
}

export default checkbox;