import React from "react";
import FonPicture from "./FonPicture/FonPicture";
import MyPostsContainerRR from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div>
         <FonPicture />
         <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
         <MyPostsContainerRR />
      </div>
   );
};
export default Profile;
