import React from 'react';
import mod from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}
                         newPostText={props.state.newPostText}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                />

            </div>
        </div>

    );
}

export default Profile;