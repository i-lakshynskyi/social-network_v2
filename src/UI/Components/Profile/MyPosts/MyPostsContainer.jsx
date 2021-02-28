import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../BLL/Redux/ProfileReducer/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addNewPost: () => {
         dispatch(addPostActionCreator());
      },
   };
};

const MyPostsContainerRR = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainerRR;
