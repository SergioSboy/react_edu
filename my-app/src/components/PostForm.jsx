import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {

    const [post, setPosts] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPosts({title: '', body: ''})
      }
    
    return (
        <div>
            <form>
                <MyInput
                
                    value = {post.title}
                    onChange = {e => setPosts({...post, title: e.target.value})}
                    type = 'text' 
                    placeholder = 'Name of Post'
                />
                
                <MyInput

                    value = {post.body}
                    onChange = {e => setPosts({...post, body: e.target.value})}
                    type = 'text'
                    placeholder = 'Overview'
                />
                <MyButton onClick = {addNewPost}> Create Post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;