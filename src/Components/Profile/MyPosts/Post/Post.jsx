import React from 'react';
import mod from './Post.module.css';

function Post(props) {
    return (
                    <div>
                        <div className={mod.item}>
                          <img src='https://media.istockphoto.com/vectors/surprised-man-avatar-vector-id903903640'/>
                            {props.message}
                            <div>
                                <span>like   {props.like}</span>

                            </div>
                            <div>
                                <span>dislike {props.dislike}</span>
                            </div>

                        </div>
                    </div>
                );
}
export default Post;