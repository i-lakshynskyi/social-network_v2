/*
import React from "react";

const StoreContext = React.createContext(null);

 export const Provider = (props) => {
   return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>;
};

export default StoreContext;
*/

/*let deepClone = (obj) => {
  let clone = {};
  for (let i = 0; i < obj.length; i++) {
    if(obj[i].typeof !== Object || obj[i].typeof !== Array){
      clone = { ...obj,deepClone(obj[i]) };
    }
    clone = {...obj};
    return clone;
  }
};

let testObj = {
   profilePage: {
      newPostText: "WOW",
      posts: [
         { id: 1, postContent: "Hi, how are you?", likes: 54 },
         { id: 2, postContent: "Wow!!! THX I'm great. What about U?", likes: 54 },
      ],
   },
};
let b = deepClone(testObj);
console.log(b);

b.newPostText = "BBB";
console.log("b = ", b);
console.log("testObj = ", testObj);*/
