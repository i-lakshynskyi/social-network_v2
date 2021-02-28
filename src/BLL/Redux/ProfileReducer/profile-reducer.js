import { authAPI } from '../../../DAL/authAPI/authAPI';
import { profileAPI } from '../../../DAL/profileAPI/profileAPI';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initialState = {
   newPostText: '',
   posts: [
      { id: 1, postContent: 'Hi, how are you?', likes: 54 },
      { id: 2, postContent: "Wow!!! THX I'm great. What about U?", likes: 54 },
   ],
   friends: [
      { id: 0, name: 'Friend1', lastName: 'FR1_LN', ava: '' },
      { id: 1, name: 'Friend2', lastName: 'FR2_LN', ava: '' },
      { id: 2, name: 'Friend3', lastName: 'FR3_LN', ava: '' },
      { id: 3, name: 'Friend4', lastName: 'FR4_LN', ava: '' },
      { id: 4, name: 'Friend5', lastName: 'FR5_LN', ava: '' },
      { id: 5, name: 'Friend6', lastName: 'FR6_LN', ava: '' },
   ],
   profile: null,
   status: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.updatePostText,
         };
      }
      case ADD_POST: {
         if (state.newPostText) {
            let newPost = {
               id: state.posts.length + 1,
               postContent: state.newPostText,
               likes: 0,
            };
            return {
               ...state,
               posts: [...state.posts, newPost],
               newPostText: '',
            };
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }
      case SET_USER_STATUS: {
         return {
            ...state,
            status: action.status,
         };
      }
      default:
         return state;
   }
};

export const updateNewPostTextActionCreator = (currentText) => ({
   type: UPDATE_NEW_POST_TEXT,
   updatePostText: currentText,
});
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });


export const getUserProfile = (userID) => (dispatch) => {
   if (!userID) {
      authAPI.me().then((response) => {
         if (response.resultCode === 0) {
            profileAPI.getProfile(response.data.id).then((response) => {
               dispatch(setUserProfile(response));
            });
         }
      });
   }
   profileAPI.getProfile(userID).then((response) => {
      dispatch(setUserProfile(response));
   });
};

export const getStatus = (userID) => (dispatch) => {
   profileAPI.getUserStatus(userID).then((response) => {
      dispatch(setUserStatusAC(response.data));
   });
};

export const updateStatus = (newStatus) => (dispatch) => {
   profileAPI.updateUserStatus(newStatus).then((response) => {
      if (response.data.resultCode === 0) {
         dispatch(setUserStatusAC(newStatus));
      }
   });
};

export default profileReducer;
