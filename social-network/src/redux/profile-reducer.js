const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                img: 'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-122.jpg'
            }
            let stateCopy = {...state};
            state.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            state.postsData = [...state.postsData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (e) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: e.target.value
});

export default profileReducer;