import React from "react";
import style from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
   let name = props.name;
   let path = "/dialogs/" + props.id + "/" + name;
   let src = props.src;

   return (
      <div className={style.dialog} >
         <NavLink to={path} activeClassName={style.active}>
            <img src={props.src} alt="" />
            {name}
         </NavLink>
      </div>
   );
};

export default DialogItem;
