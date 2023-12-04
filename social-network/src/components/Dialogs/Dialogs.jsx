import React from "react";
import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";
import {NavLink} from "react-router-dom";
import MyButton from "../MyButton/MyButton";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={classes.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.mes}</div>
    )
}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Misha"},
        {id: 2, name: "Aleksey"},
        {id: 3, name: "Anton"},
        {id: 4, name: "Lioba"},
        {id: 5, name: "Mira"},
        {id: 6, name: "Vadim"},
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div>
                    <DialogItem name="Dimitry" id="1"/>
                    <DialogItem name="Aleksey" id="2"/>
                    <DialogItem name="Anton" id="3"/>
                    <DialogItem name="Lioba" id="4"/>
                    <DialogItem name="Krisi" id="5"/>
                    <DialogItem name="Marira" id="6"/>
                </div>
            </div>
            <div className={classes.create_line}></div>
            <div className={classes.messages}>
                <div>
                    <Message mes='Hi'/>
                    <Message mes='How are you? Welcome my site!'/>
                    <Message mes='Yo'/>
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