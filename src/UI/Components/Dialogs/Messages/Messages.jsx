import React from "react";
import style from "./messages.module.css";

const Message = (props) => {

   return (
      <div className={style.message_container}>
         <div className={style.message_Items}>{props.message}</div>
      </div>
   );
};

export default Message;

