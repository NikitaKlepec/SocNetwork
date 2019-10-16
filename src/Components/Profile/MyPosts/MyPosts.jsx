import React from 'react';
import mod from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (

                <div>
                    MyPosts
                    <div>
                        <textarea></textarea>
                        <button> add Post </button>
                    </div>
                    <div className={mod.posts}>
                    <Post message='How du yoy du' like='30' dislike='2'/>
                    <Post message='My Name Ivan' like='25' dislike='4'/>
                    <Post message='Tru' like='45' dislike='1'/>
                    </div>
                </div>


    );
}

export default MyPosts;