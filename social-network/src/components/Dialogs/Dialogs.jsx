import React from "react";
import classes from './Dialogs.module.css'
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>
                    Dmitry
                </div>
                <div className={classes.dialog}>
                    Aleksey
                </div>
                <div className={classes.dialog}>
                    Anton
                </div>
                <div className={classes.dialog}>
                    Lioba
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
            </div>
            <div className={classes.create_line}></div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you? Welcome my site!</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs