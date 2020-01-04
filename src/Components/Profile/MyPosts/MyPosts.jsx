import React from 'react';
import mod from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts=(props)=> {
   let postElements=props.posts.map(message=>
    <Post message={message.message} like={message.like} dislike={message.dislike}/>
);

    let newPostElement=React.createRef();

    let addPost=()=>{
        props.addPost();
          }

    let onPostChange=()=>{
            let text=newPostElement.current.value;
            props.updateNewPostText(text);
    }

    return (
                <div>
                    MyPosts
                    <div>
                        <div><textarea ref={newPostElement}  onChange={onPostChange} value={props.newPostText}></textarea></div>
                        <button onClick={addPost}> add Post </button>
                    </div>
                    <div className={mod.posts}>
                        {postElements}
                    </div>
                </div>


    );
}

export default MyPosts;