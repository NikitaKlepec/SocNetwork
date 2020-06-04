import {profileAPI,usersAPI} from "../Api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialstate = {
    posts: [
        {id: 1, message: "Hou du yu now", like: "12", dislike: "10"},
        {id: 2, message: "Klfdfrg", like: "5", dislike: "15"},
        {id: 3, message: "terman kompf", like: "40", dislike: "0"},
    ],
    newPostText: "It-camasutra",
    status:"---"
}

const profileReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 10,
                dislike: 5
            };
            return {
                ...state,
               posts:[...state.posts,newPost],
               newPostText :''
                   }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
        }
        }
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile=(userId)=>(dispath)=>{  
    usersAPI.getProfile(userId).then(response=>{
        dispath(setUserProfile(response.data))
    })
}

export const getUserStatus=(userId)=>(dispath)=>{
    profileAPI.getStatus(userId)
        .then(response=>{
        dispath(setStatus(response.data))
    })
}

export const updateStatus=(status)=>(dispath)=>{
    profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode===0) {
                dispath(setStatus(response.data))
            }
        })
}

export default profileReducer;
