import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react';
import MyButton from "../MyButton/MyButton";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(el => <Message key={el.id} mes={el.message}/>);
    let newMessageBody = props.dialogsPage.newMessageText;
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        props.updateNewMessage(e)
    }


    let navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth === false) {
            return navigate("../login")
        }
    }, [props.isAuth])


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
                        <MyButton onClick={onSendMessageClick} name={'Send'}/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dialogs