import React from "react";
import classes from './MyButton.module.css'
const MyButton = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.onClick}>

            </button>
        </div>
    )
}

export default MyButton