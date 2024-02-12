import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";


const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
    let onAddPost = (e) => {
        props.addPost(e)
        //props.dispatch(updateNewPostTextActionCreator(e))
    }

    let onAddNewPost = () => {
        props.addNewPost()
        //props.dispatch(addPostActionCreator())

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
                        <MyInput
                            onChange={onAddPost}
                            value={props.profilePage.newPostText}
                            placeholder='Create...'/>
                    </div>

                    <div className={classes.my_btn}>
                        <MyButton onClick={onAddNewPost}/>
                    </div>

                </div>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;