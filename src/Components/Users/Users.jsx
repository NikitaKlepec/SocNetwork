import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../Images/AvatarcaAnonim.webp";
import {NavLink} from "react-router-dom";


let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
        <div>
            <NavLink to={'/profile' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
            </NavLink>
        </div>
        <div>
            {u.followed ?

                <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id)}}>unFollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => { props.follow(u.id)}}>Follow</button>}

        </div>
                </span>

                <span>
            <div>
                {u.name}
                </div>
            <div>
                {u.status}
            </div>
        </span>
                <span>
                {"u.location.country"}
            </span>
                <span>
                {"u.location.city"}
            </span>
            </div>)
        }
    </div>
}

export default Users;