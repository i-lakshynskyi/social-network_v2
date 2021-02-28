import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../BLL/Redux/DialogsReducer/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../HOCs/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      chatPage: state.chatPage,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessage: (text) => {
         dispatch(updateNewMessageTextActionCreator(text));
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator());
      },
   };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
