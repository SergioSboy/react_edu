const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-blond-hair-blue-eyes-and-bob-haircut_427567-4265.jpg'
                },
                {
                    id: 2,
                    message: 'Hey! My name is Andy',
                    img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-black-hair-short-hair-face_427567-610.jpg?w=2000'
                },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },

    },
    _callSubscriber() {
        console.log('State was change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                img: 'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-122.jpg'
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }

};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (e) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: e.target.value
});

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (e) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: e.target.value
});

// OOP store
export default store;