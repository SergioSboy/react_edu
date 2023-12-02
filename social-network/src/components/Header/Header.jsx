import React from "react";
import classes from './Header.module.css'
import MyInput from "../MyInput/MyInput";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.icon-icons.com/icons2/1254/PNG/512/1495494673-jd04_84463.png"/>
            <MyInput/>
        </header>
    )
}

export default Header;