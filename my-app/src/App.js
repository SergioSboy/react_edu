import React, {useState}  from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPost] = useState([
    {id: 1, title:"JavaScript", body: 'Description'},
    {id: 2, title:"JavaScript 1", body: 'Description'},
    {id: 3, title:"JavaScript 5", body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value = {title}
          onChange = {e => setTitle(e.target.value)}
          type = 'text' 
          placeholder = 'Name of Post'
        />
        <MyInput type = 'text' placeholder = 'Overview'></MyInput>
        <MyButton onClick = {addNewPost}> Create Post</MyButton>
      </form>
      <PostList posts={posts} title = 'Post List about JS'/>
    </div>
  );
}

export default App;
