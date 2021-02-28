import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from '../../../BLL/Redux/ProfileReducer/profile-reducer';
import { withAuthRedirect } from '../../../HOCs/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount() {
      debugger;
      let userID = this.props.match.params.userId;
      this.props.getUserProfile(userID);
      this.props.getStatus(userID);
   }
   render() {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
         </div>
      );
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
});


export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter /*, withAuthRedirect*/
)(ProfileContainer);
