import React from 'react';
import Users from "./Users";
import {followAC, setusersAC, unFollowAC} from "../../Redux/userReducer";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unFollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setusersAC(users));
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)