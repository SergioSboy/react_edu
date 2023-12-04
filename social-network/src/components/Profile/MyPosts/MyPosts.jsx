import React, {Component} from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
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
    ]

    let postsElements = postsData.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
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