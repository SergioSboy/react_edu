import React from "react";
import classes from './Header.module.css'
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";

const Header = () => {
    return (
        <div className={classes.header}>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/1254/PNG/512/1495494673-jd04_84463.png"/>
            </div>
            <div className={classes.c}>
                <div className={classes.input}>
                    <MyInput placeholder ='Search...' />
                </div>
                <div className={classes.button}>
                    <MyButton/>
                </div>
            </div>

        </div>
    )
}

export default Header;