import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";


const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
    let addPost = (e) => {
        props.dispatch(
            {
                type: 'UPDATE-NEW-POST-TEXT',
                newText: e.target.value
            }
        )
    }

    let addNewPost = () => {
        props.dispatch({type: 'ADD-POST'})

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
                            onChange={addPost}
                            value={props.profilePage.newPostText}
                            placeholder='Create...'/>
                    </div>

                    <div className={classes.my_btn}>
                        <MyButton onClick={addNewPost}/>
                    </div>

                </div>

                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;