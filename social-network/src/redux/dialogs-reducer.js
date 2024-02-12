const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Misha"},
        {id: 2, name: "Aleksey"},
        {id: 3, name: "Anton"},
        {id: 4, name: "Lioba"},
        {id: 5, name: "Mira"},
        {id: 6, name: "Vadim"},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you? Welcome my site!'},
        {id: 3, message: 'Iam fine'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ],
    newMessageText: '',
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (e) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: e.target.value
});

export default dialogsReducer;