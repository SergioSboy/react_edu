import React from "react";
import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";

import MyButton from "../MyButton/MyButton";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.messagesData.map(el => <Message mes={el.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div>
                    {dialogsElements}
                </div>
            </div>
            <div className={classes.create_line}></div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={classes.play}>
                    <div className={classes.my_input}>
                        <MyInput placeholder='Write...'/>
                    </div>
                    <div>
                        <MyButton/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dialogs