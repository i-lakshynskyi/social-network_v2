import { authAPI } from '../../../DAL/authAPI/authAPI';
import { setUserProfile } from '../ProfileReducer/profile-reducer';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         {
            return {
               ...state,
               ...action.data,
               isAuth: true,
            };
         }
         break;
      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const getAuthUserData = () => (dispatch) => {
      authAPI.me().then((response) => {
         if (response.resultCode === 0) {
            let { id, email, login } = response.data;
            dispatch(setAuthUserData(id, email, login));
         }
      });
   };


export const toMainProfile = (id) => {
   return (dispatch) => {
      authAPI.toMainProfile(id).then((response) => {
         dispatch(setUserProfile(response.data));
      });
   };
};

export default authReducer;
