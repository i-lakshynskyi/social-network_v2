import React from 'react';
import style from './dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Messages/Messages';

const Dialogs = (props) => {
   let dialogsElements = props.chatPage.dialogs.map((dialog) => (
      <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} key={dialog.id} messages={dialog.messages} />
   ));
   let messageElements = props.chatPage.messages.map((mes) => <Message message={mes.messageText} key={mes.id} />);
   messageElements.reverse();

   let onNewMesageChange = (e) => {
      let currentText = e.target.value;
      props.updateNewMessage(currentText);
   };

   let onSendMessageClick = () => {
      props.sendMessage();
   };
   return (
      <div className={style.dialogs_container}>
         <div className={style.textAreaContainer}>
            <button onClick={onSendMessageClick}>Send</button>
            <textarea value={props.chatPage.newTextMessage} placeholder={'Enter message'} onChange={onNewMesageChange} />
            <div className={style.smile}></div>
         </div>
         <div className={style.dialogsItemsContainer}>
            <div className={style.dialogs_items}>{dialogsElements}</div>
         </div>
         <div className={style.messages_container}>
            <div className={style.messageElements}>{messageElements}</div>
         </div>
      </div>
   );
};

export default Dialogs;
