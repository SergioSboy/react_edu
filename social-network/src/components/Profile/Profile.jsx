import React, { Component } from 'react'
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://i.stack.imgur.com/SvWWN.png' />
      </div>
      <MyPosts />

    </div>
  )
}

export default Profile;