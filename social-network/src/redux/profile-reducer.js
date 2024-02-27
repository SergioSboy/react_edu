import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
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
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                img: 'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-122.jpg'
            }
            return {
                ...state,
                postsData:[...state.postsData, newPost],
                newPostText: '',
            };


        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(response.data));
            }
        });
};

export const updateNewPostTextActionCreator = (e) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: e.target.value
});

export default profileReducer;