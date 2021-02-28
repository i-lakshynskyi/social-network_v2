const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   dialogs: [
      {
         id: 0,
         name: 'David_Geller',
         src: 'https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png',
      },
      {
         id: 1,
         name: 'Jaroslava',
         src: 'https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png',
      },

      {
         id: 2,
         name: 'Lagerta',
         src: 'https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png',
      },
      {
         id: 3,
         name: 'Alexa',
         src: 'https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png',
      },
   ],
   messages: [
      { id: 0, messageText: "HI, it's David" },
      { id: 1, messageText: 'I like FrontEnd' },
      { id: 2, messageText: 'What about U?' },
      { id: 3, messageText: 'Wow!!! Great ))))' },
      { id: 4, messageText: "HI, I'm Jaroslava" },
      { id: 5, messageText: "I'm the most beautiful chika in the world :)))" },
      { id: 6, messageText: 'Of course bl..' },
      { id: 7, messageText: '.....who knows...' },
      { id: 8, messageText: 'Lagerta' },
      { id: 9, messageText: 'message...' },
      { id: 10, messageText: 'message...' },
      { id: 11, messageText: 'Wow!!!message... ))))' },
      { id: 12, messageText: "It's Alexa" },
      { id: 13, messageText: 'Do U like message...' },
      { id: 14, messageText: 'message...' },
      { id: 15, messageText: 'message... Great ))))' },
   ],
   newTextMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         {
            return {
               ...state,
               newTextMessage: action.updateTextMessage,
            };
         }
         break;
      case SEND_MESSAGE:
         {
            if (state.newTextMessage) {
               let newMessage = {
                  id: state.messages.length + 1,
                  messageText: state.newTextMessage,
               };
               return {
                  ...state,
                  messages: [...state.messages, newMessage],
                  newTextMessage: '',
               };
            }
         }
         break;
      default:
         return state;
   }
};

export const updateNewMessageTextActionCreator = (currentText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, updateTextMessage: currentText });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
