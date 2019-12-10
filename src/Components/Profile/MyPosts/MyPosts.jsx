import React from 'react';
import mod from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {
   let postElements=props.posts.map(message=>
    <Post message={message.message} like={message.like} dislike={message.dislike}/>
)

    return (
                <div>
                    MyPosts
                    <div>
                        <textarea></textarea>
                        <button> add Post </button>
                    </div>
                    <div className={mod.posts}>
                        {postElements}
                    </div>
                </div>


    );
}

export default MyPosts;