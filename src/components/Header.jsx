import React from 'react';
import Logo from '../elements/Logo'
import classes from './Header.module.css'

const header = () => {
    return (
        <header className={classes.Header}>
            <Logo />
        </header>
    );
}

export default header;