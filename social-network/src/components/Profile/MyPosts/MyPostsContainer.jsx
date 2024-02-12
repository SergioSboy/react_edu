import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let addPost = (e) => {
                        store.dispatch(updateNewPostTextActionCreator(e))
                    }

                    let addNewPost = () => {
                        store.dispatch(addPostActionCreator())

                    }

                    return <MyPosts
                        addPost={addPost}
                        addNewPost={addNewPost}
                        profilePage={state.profilePage}
                    />
                }

            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;