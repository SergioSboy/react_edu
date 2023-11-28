import React, { Component } from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button></button>
            <div>
                My posts
                <div>
                    New post
                </div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;