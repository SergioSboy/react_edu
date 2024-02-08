import React, {Component} from 'react'
import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost = {props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;