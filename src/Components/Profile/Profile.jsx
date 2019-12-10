import React from 'react';
import mod from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

       return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}/>

            </div>
        </div>

    );
}

export default Profile;