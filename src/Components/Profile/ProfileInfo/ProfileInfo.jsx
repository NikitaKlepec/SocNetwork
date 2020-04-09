import React from 'react';
import mod from './ProfileInfo.module.css';
import Preloader from "../../Commen/Preloader";

function ProfileInfo(props) {
    if(!props.profile){
        return <Preloader/>
    }
        return (
        <div>
            <div className={mod.discriptionBlok}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                ava+description
            </div>
        </div>


    );
}

export default ProfileInfo;