import React from "react";
import classes from './MyInput.module.css'
const MyInput = (props) => {
    return (
        <div className={classes.input}>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default MyInput