import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let dialogsPage = props.store.getState().dialogsPage
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        props.store.dispatch(updateNewMessageBodyCreator(e));
    }
    return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={dialogsPage}/>
}

export default DialogsContainer