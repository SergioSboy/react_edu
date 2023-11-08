import React, {useRef, useState, useMemo}  from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
function App() {

  const [posts, setPost] = useState([
    {id: 1, title:"аа", body: 'бб'},
    {id: 2, title:"гг 2", body: 'аа'},
    {id: 3, title:"вв 3", body: 'яя'}

  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if(filter.sort) { 
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>  post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPost([...posts, newPost])
    setModal(false)
  }
  
  const removePost = (post) =>{
    setPost(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick = {() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible = {setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <PostList remove = {removePost} posts={sortedAndSerchedPosts} title = 'Post List about JS'/>      
    </div>
  );
}

export default App;
