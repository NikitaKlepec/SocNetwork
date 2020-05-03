import React from 'react';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from "../../Redux/userReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Commen/Preloader";




class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //             this.props.setUsers(data.items);
        //             this.props.setTotalUsersCount(data.totalCount);
        //             this.props.toggleIsFetching(false);
        //         }
        //     )

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersApi.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //             this.props.setUsers(data.items);
        //             this.props.toggleIsFetching(false);
        //         }
        //     )

    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage,
        toggleFollowingProgress,getUsers})(UserContainer);
