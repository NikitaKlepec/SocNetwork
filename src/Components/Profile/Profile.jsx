import React from 'react';
import mod from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={mod.content}>
            <div>

                <div>
                    <img src='https://cs8.pikabu.ru/post_img/big/2017/08/07/12/1502137604118189937.jpg'/>
                </div>
                <div>
                    ava+description
                </div>
                <MyPosts/>
            </div>
        </div>

    );
}

export default Profile;