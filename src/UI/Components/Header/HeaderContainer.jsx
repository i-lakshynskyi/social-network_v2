import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, toMainProfile } from '../../../BLL/Redux/AuthReducer/auth-reducer';

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserData();
   }

   render() {
      return <Header {...this.props} toMainProfile={this.props.toMainProfile} />;
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   id: state.auth.userId,
});

export default connect(mapStateToProps, { toMainProfile, getAuthUserData })(HeaderContainer);
