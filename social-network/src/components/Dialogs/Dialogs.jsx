import React from "react";
import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";

import MyButton from "../MyButton/MyButton";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(el => <Message mes={el.message}/>);
    let newMessageBody = props.dialogsPage.newMessageText;
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        props.dispatch(updateNewMessageBodyCreator(e));
    }
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
                        <MyInput
                            placeholder='Write...'
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <MyButton onClick={onSendMessageClick}/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dialogs