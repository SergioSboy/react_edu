import React, {useRef, useState}  from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {

  const [posts, setPost] = useState([
    {id: 1, title:"JavaScript", body: 'Description'},
    {id: 2, title:"JavaScript 1", body: 'Description'},
    {id: 3, title:"JavaScript 5", body: 'Description'}

  ])
  const createPost = (newPost) => {
    setPost([...posts, newPost])
  }
  
  const removePost = (post) =>{
    setPost(posts.filter(p => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <PostList remove = {removePost} posts={posts} title = 'Post List about JS'/>
    </div>
  );
}

export default App;
