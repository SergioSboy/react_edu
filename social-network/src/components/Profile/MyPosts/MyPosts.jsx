import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";

const MyPosts = (props) => {
    let postsElements = props.posts.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
    let newPostElement = React.createRef()
    let appPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    return (
        <div className='item'>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.play}>
                    <div className={classes.my_inp}>
                        <MyInput ref={newPostElement} placeholder='Create...'/>
                    </div>

                    <div className={classes.my_btn}>
                        <MyButton onClick/>
                    </div>

                </div>
                <button></button>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;