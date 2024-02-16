import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import MyButton from "../MyButton/MyButton";
import {NavLink} from "react-router-dom";

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
        <div>

            <div>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p && classes.selectPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>

            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'./../profile/' + u.id}>
                        <img
                            src={u.photos.small !== null
                                ? u.photos.small
                                : userPhoto
                            }
                            className={classes.userPhoto}
                            alt="User image"/>
                    </NavLink>

                </div>
                <div>
                    {u.followed
                        ? <MyButton onClick={() => props.unfollow(u.id)} name={'Unfollow'}/>
                        : <MyButton onClick={() => props.follow(u.id)} name={'Follow'}/>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>)}
        </div>
    )
};

export default Users