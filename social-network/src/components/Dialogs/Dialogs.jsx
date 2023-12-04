import React from "react";
import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";

import MyButton from "../MyButton/MyButton";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Misha"},
        {id: 2, name: "Aleksey"},
        {id: 3, name: "Anton"},
        {id: 4, name: "Lioba"},
        {id: 5, name: "Mira"},
        {id: 6, name: "Vadim"},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you? Welcome my site!'},
        {id: 3, message: 'Iam fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = messagesData.map(el => <Message mes={el.message}/>);

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