let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hou du yu now", like: "12", dislike: "10"},
            {id: 2, message: "Klfdfrg", like: "5", dislike: "15"},
            {id: 3, message: "terman kompf", like: "40", dislike: "0"},
        ],
        newPostText:"It-camasutra",
    },

    messagesPage: {
        messages: [
            {id: 1, message: "Oleg ns Yu"},
            {id: 2, message: "Peter"},
            {id: 3, message: "Linkoln"},
            {id: 4, message: "Dfetbbhdf"},

        ],
        dialogs: [
            {id: 1, name: "Oleg"},
            {id: 2, name: "Kolya"},
            {id: 3, name: "Lera"},
            {id: 4, name: "Sergey"},
        ]
    }
}

let rerenderEntireTree=()=>{
    console.log('state changed') ;
}

export const addPost=( )=>{
    let newPost={
        id:5,
        message: state.profilePage.newPostText,
            like:10,
        dislike:5
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export const subscribe=(observer)=>{
    rerenderEntireTree=observer;
}

export default state;