import React from "react";
import classes from './MyInput.module.css'
const MyInput = (props) => {
    return (
        <div className={classes.input}>
            <input type="text"/>
        </div>
    )
}

export default MyInput