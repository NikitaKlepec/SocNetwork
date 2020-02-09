const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialstate = {
    posts: [
        {id: 1, message: "Hou du yu now", like: "12", dislike: "10"},
        {id: 2, message: "Klfdfrg", like: "5", dislike: "15"},
        {id: 3, message: "terman kompf", like: "40", dislike: "0"},
    ],
    newPostText: "It-camasutra",
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
