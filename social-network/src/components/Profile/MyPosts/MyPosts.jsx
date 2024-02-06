import React, {useState} from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";

const MyPosts = (props) => {
    let postsElements = props.posts.map(el => <Post message={el.message} id={el.id} img={el.img}/>)
    const [post, setPost] = useState('')
    let addPost = (e) => {
        setPost(e.target.value)
    }

    let addNewPost = () => {
        props.addPost(post)
        setPost('')
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
                            onChange={(e) => addPost(e)}
                            value={post}
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