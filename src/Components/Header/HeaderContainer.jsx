import React from 'react';
import mod from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";

 class HeaderContainer extends React.Component{

         componentDidMount() {
                this.props.getAuthUserData();
     }

     render() {
         return <Header {...this.props}/>;
     }
 }

 const mapStateToProps=(state)=>{
     return {
         isAuth: state.auth.isAuth,
         login: state.auth.login
     }
 }

 export default connect(mapStateToProps,{getAuthUserData}) (HeaderContainer);