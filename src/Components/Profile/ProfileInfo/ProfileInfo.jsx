import React from 'react';
import mod from './ProfileInfo.module.css';
import Preloader from "../../Commen/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={mod.discriptionBlok}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>

    );
}

export default ProfileInfo;