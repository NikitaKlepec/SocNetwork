import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Musik from "./Components/Music/Musik";
import Setting from "./Components/Setting/Setting";




function App(props) {
     return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.messagesPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/musik' render={() => <Musik/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>

    );
}

export default App;
