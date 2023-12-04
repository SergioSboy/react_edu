import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
    return (
        <div className='item'>
            <div>
                My posts
                <div>
                    New post
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;