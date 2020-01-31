import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileRecucer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store)=>{
                let state = store.getState();

                let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            }

                let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
       return  <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>}}
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;