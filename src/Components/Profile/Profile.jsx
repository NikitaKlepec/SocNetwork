import React from 'react';
import mod from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>

            </div>
        </div>

    );
}

export default Profile;