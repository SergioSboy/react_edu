import React from "react";

const Navigation = () => {
    return (
        <nav className='nav'>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png"/>
                <a href='#'>Profile</a>
            </div>
            <div>
                <img src="https://secure.webtoolhub.com/static/resources/icons/set51/a0e45edb.png"/>
                <a href='#'>Messages</a>
            </div>
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/rounded-set-4/48/news-512.png"/>
                <a href='#'>News</a>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/224210/musical-note-music-player.svg"/>
                <a href='#'>Music</a>
            </div>
            <div>
                <img src="https://secure.webtoolhub.com/static/resources/icons/set98/808d3f7d.png"/>
                <a href='#'>Settings</a>
            </div>
      </nav>
    )
}

export default Navigation;