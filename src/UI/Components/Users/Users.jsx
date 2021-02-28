import React from 'react';
import style from './users.module.css';
import avaBoy from '../../../assets/ava-anime-boy.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div className={style.userPageContainer}>
         <div className={style.pagesNumbersContainer}>
            {pages.map((page) => (
               <span
                  onClick={() => {
                     props.onPageChanged(page);
                  }}
                  className={props.currentPage === page ? style.selectedPage : style.notSelectedPage}
                  key={page}
               >
                  {page}
               </span>
            ))}
         </div>
         <div className={style.usersContainer}>
            {props.users.map((user) => (
               <div key={user.id} className={style.user}>
                  <span>
                     <div>
                        <NavLink to={`/profile/${user.id}/${user.name}`}>
                           <img className={style.photo} src={user.photos.small !== null ? user.photos.small : avaBoy} alt="ava" />
                        </NavLink>
                     </div>
                     <div className={style.buttons}>
                        {user.followed ? (
                           <button
                              disabled={props.followingInProgress.some((id) => id === user.id)}
                              className={style.followUnfollow}
                              onClick={() => {props.unFollow(user.id)}}>
                             UnFollow
                           </button>
                        ) : (
                           <button
                              disabled={props.followingInProgress.some((id) => id === user.id)}
                              className={style.followUnfollow}
                              onClick={() => {props.follow(user.id)}}>
                             Follow
                           </button>
                        )}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                     </span>
                     <span>
                        <div>{user.uniqueUrlName !== null ? user.uniqueUrlName : 'NickName'}</div>
                        <div>{user.id}</div>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                     </span>
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Users;
