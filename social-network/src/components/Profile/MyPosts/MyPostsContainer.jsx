import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = (e) => {
        props.store.dispatch(updateNewPostTextActionCreator(e))
    }

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator())

    }


    return <MyPosts addPost={addPost} addNewPost={addNewPost} profilePage={state.profilePage}/>
}

export default MyPostsContainer;