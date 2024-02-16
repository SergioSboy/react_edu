import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt="description of image" className={classes.content__img} src='https://i.stack.imgur.com/SvWWN.png'/>
            </div>
            <div>
                <img alt={'avatar'} src={props.profile.photos.small} className={classes.photo}/>
                {props.profile.fullName}
            </div>
            <div>
                CONTACT:
            </div>
            <div>
                facebook: {props.profile.contacts.facebook}
            </div>
        </div>
    )
}

export default ProfileInfo;