import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="description of image" className={classes.content__img} src='https://i.stack.imgur.com/SvWWN.png'/>
            </div>
            <div>
                ava + decoration
            </div>
        </div>
    )
}

export default ProfileInfo;