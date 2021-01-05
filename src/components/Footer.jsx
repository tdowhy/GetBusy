import React from 'react';

import Logo from '../elements/Logo';
import classes from './Footer.module.css';

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <Logo />
            <div className={classes.Line}></div>
        </footer>
    );
}

export default footer;