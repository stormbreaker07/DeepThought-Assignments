import React from 'react';
import classes from './Header.module.css';
import './icon.css';

const Header = () => {
    return (
        <div className={classes.headerStyle}>
            <i className="fa fa-shopping-basket fa-6 iconSize" aria-hidden="true"></i>
            <h1 className={classes.titleFont}>Hello, Basket!</h1>
        </div>
    )
}

export default Header;