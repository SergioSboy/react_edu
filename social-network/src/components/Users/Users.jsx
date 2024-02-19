import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import MyButton from "../MyButton/MyButton";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div className={classes.big}>

            <div className={classes.carousel}>
                {slicedPages.map(p => {
                    return <div className={props.currentPage === p ? classes.selectPage : classes.page}
                                onClick={() => {
                                    props.onPageChanged(p)
                                }}>{p}</div>
                })}
            </div>
            <div className={classes.grid}>
                {props.users.map(u =>
                    <div key={u.id} className={classes.profile}>
                        <div>
                            <NavLink to={'./../profile/' + u.id}>
                                <img
                                    alt={"User image"}
                                    src={u.photos.small !== null
                                        ? u.photos.small
                                        : userPhoto
                                    }
                                    className={classes.userPhoto}
                                    />
                            </NavLink>
                        </div>
                        <div>
                            Location
                        </div>
                        <span>
                            {u.name}
                        </span>


                        <div className={classes.btn}>
                            {u.followed
                                ? <MyButton disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': 'c745fc43-3245-48d7-bcd5-95d4c2c1855c'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }} name={'Unfollow'}
                                />
                                : <MyButton disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': 'c745fc43-3245-48d7-bcd5-95d4c2c1855c'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }} name={'Follow'}
                                />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Users