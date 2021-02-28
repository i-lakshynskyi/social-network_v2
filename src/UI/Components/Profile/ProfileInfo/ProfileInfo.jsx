import React from 'react';
import style from './profile-info.module.css';
import Description from './Description/Description';
import Preloader from '../../commonComponents/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />;
   }
   return (
      <div>
         <div className={style.ava_container}>
            <div className={style.description_container}>
               <Description profile={props.profile} />
            </div>
            <div className={style.ava}>
               <img
                  src={
                     props.profile.photos.large
                        ? props.profile.photos.large
                        : props.profile.photos.small
                        ? props.profile.photos.small
                        : 'https://lifeo.ru/wp-content/uploads/1-1-e1509441693990.jpg'
                  }
                  alt=""
               />
            </div>
            <div className={style.third}>
               <div className={style.status}>
                  <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
               </div>
               {/*<div>{props.testProps.location.pathname}</div>
               <div>{props.testProps.match.path}</div>
               <div>{props.testProps.match.isExact + ''}</div>*/}
            </div>
         </div>
      </div>
   );
};
export default ProfileInfo;
