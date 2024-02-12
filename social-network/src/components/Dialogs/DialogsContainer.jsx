import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            (store) => {
                let dialogsPage = store.getState().dialogsPage
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                const onNewMessageChange = (e) => {
                    store.dispatch(updateNewMessageBodyCreator(e));
                }
                return <Dialogs updateNewMessage={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={dialogsPage}
                />
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer