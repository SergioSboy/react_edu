import React, { Component } from 'react'
import classes from './Profile.module.css'
const Profile = () => {
    return(
        <div className={classes.content}>
        <div>
          <img src='https://i.stack.imgur.com/SvWWN.png' />
        </div>
        <div>

        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    )
}

export default Profile;