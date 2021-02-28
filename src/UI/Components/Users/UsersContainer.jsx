import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, pageChanged, unFollow } from '../../../BLL/Redux/UsersReducer/users-reducer';
import Users from './Users';
import Preloader from '../commonComponents/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../HOCs/withAuthRedirect';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.pageChanged(pageNumber, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ? (
               <Preloader />
            ) : (
               <Users
                  onPageChanged={this.onPageChanged}
                  unFollow={this.props.unFollow}
                  follow={this.props.follow}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  followingInProgress={this.props.followingInProgress}
               />
            )}
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.isFollowingInProgress,
   };
};

export default compose(
   connect(mapStateToProps, { follow, unFollow, getUsers, pageChanged }),
   withAuthRedirect
)(UsersContainer);
