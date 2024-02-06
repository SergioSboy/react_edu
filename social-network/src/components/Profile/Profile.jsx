import React, {Component} from 'react'
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost = {props.addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;