import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Musik from "./Components/Music/Musik";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




function App() {
          return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/musik' render={() => <Musik/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>

    );
}

export default App;
