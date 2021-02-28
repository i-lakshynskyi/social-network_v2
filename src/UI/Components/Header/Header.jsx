import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={style.header}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU" alt="logo" />
         <div className={style.loginBlock}>
            {props.isAuth ? (
               <NavLink to={`/profile/${props.id}/${props.login}`} onClick={() => props.toMainProfile(props.id)}>
                  {props.login}
               </NavLink>
            ) : (
               <NavLink to={'/login'}>Login</NavLink>
            )}
         </div>
      </header>
   );
};
export default Header;
