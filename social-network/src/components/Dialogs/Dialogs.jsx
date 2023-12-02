import React from "react";
import classes from './Dialogs.module.css'
import MyInput from "../MyInput/MyInput";
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/1'>Dmitry</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/2'>Aleksey</NavLink>

                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/3'>Anton</NavLink>

                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/4'>Lioba</NavLink>

                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/5'>Sveta</NavLink>

                    </div>
                </div>

            </div>
            <div className={classes.create_line}></div>
            <div className={classes.messages}>
                <div>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How are you? Welcome my site!</div>
                    <div className={classes.message}>Yo</div>
                </div>
                <div className = {classes.my_input}>
                    <MyInput/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs