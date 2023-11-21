import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
        <div>
          <a href='#'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700524800&semt=sph' />
        </div>
        <div>

        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
