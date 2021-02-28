import profileReducer from "./ProfileReducer/profile-reducer";
import dialogsReducer from "./DialogsReducer/dialogs-reducer";


/*
let store = {
   _state: {
      profilePage: {
         newPostText: "",
         posts: [
            { id: 1, postContent: "Hi, how are you?", likes: 54 },
            { id: 2, postContent: "Wow!!! THX I'm great. What about U?", likes: 54 },
         ],
         friends: [
            { id: 0, name: "Friend1", lastName: "FR1_LN", ava: "" },
            { id: 1, name: "Friend2", lastName: "FR2_LN", ava: "" },
            { id: 2, name: "Friend3", lastName: "FR3_LN", ava: "" },
            { id: 3, name: "Friend4", lastName: "FR4_LN", ava: "" },
            { id: 4, name: "Friend5", lastName: "FR5_LN", ava: "" },
            { id: 5, name: "Friend6", lastName: "FR6_LN", ava: "" },
         ],
      },
      chatPage: {
         dialogs: [
            {
               id: 0,
               name: "David_Geller",
               src: "https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png",
            },
            {
               id: 1,
               name: "Jaroslava",
               src: "https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png",
            },

            {
               id: 2,
               name: "Lagerta",
               src: "https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png",
            },
            {
               id: 3,
               name: "Alexa",
               src: "https://www.ejin.ru/wp-content/uploads/2017/12/large-1-1.png",
            },
         ],
         messages: [
            { id: 0, messageText: "HI, it's David" },
            { id: 1, messageText: "I like FrontEnd" },
            { id: 2, messageText: "What about U?" },
            { id: 3, messageText: "Wow!!! Great ))))" },
            { id: 4, messageText: "HI, I'm Jaroslava" },
            { id: 5, messageText: "I'm the most beautiful chika in the world :)))" },
            { id: 6, messageText: "Of course bl.." },
            { id: 7, messageText: ".....who knows..." },
            { id: 8, messageText: "Lagerta" },
            { id: 9, messageText: "message..." },
            { id: 10, messageText: "message..." },
            { id: 11, messageText: "Wow!!!message... ))))" },
            { id: 12, messageText: "It's Alexa" },
            { id: 13, messageText: "Do U like message..." },
            { id: 14, messageText: "message..." },
            { id: 15, messageText: "message... Great ))))" },
         ],
         newTextMessage: "",
      },
      sideBar: {},
   },
   _callSubscriber() {
      console.log("Store was changed");
   },
   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.chatPage = dialogsReducer(this._state.chatPage, action);

      this._callSubscriber(this._state);
   },
};
*/

// export default store;
