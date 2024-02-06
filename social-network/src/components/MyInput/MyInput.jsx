import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (

        <input
            className={classes.input}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />

    )
}

export default MyInput