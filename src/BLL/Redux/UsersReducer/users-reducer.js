import { usersAPI } from '../../../DAL/usersAPI/usersAPI';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
   users: [],
   pageSize: 16,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userID) {
                  return { ...user, followed: true };
               }
               return user;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userID) {
                  return { ...user, followed: false };
               }
               return user;
            }),
         };
      case SET_USERS:
         return {
            ...state,
            users: [...action.users],
         };
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalUsersCount: action.usersCount,
         };
      case SET_CURRENT_PAGE:
         if (state.currentPage !== action.currentPage) {
            return {
               ...state,
               currentPage: action.currentPage,
            };
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         };
      case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
         return {
            ...state,
            isFollowingInProgress: action.followingInProgress
               ? [...state.isFollowingInProgress, action.userID]
               : state.isFollowingInProgress.filter((id) => id !== action.userID),
         };
      default:
         return state;
   }
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount });
export const setCurrentPageAC = (curPage) => ({ type: SET_CURRENT_PAGE, currentPage: curPage });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgressAC = (isDisable, userID) => ({
   type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
   followingInProgress: isDisable,
   userID,
});

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
         dispatch(toggleIsFetchingAC(false));
         dispatch(setTotalUsersCountAC(data.totalCount));
         dispatch(setUsersAC(data.items));
      });
   };
};

export const pageChanged = (pageNumber, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      dispatch(setCurrentPageAC(pageNumber));
      usersAPI.getUsers(pageNumber, pageSize).then((data) => {
         dispatch(setUsersAC(data.items));
         dispatch(toggleIsFetchingAC(false));
      });
   };
};

export const follow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgressAC(true, userID));
      usersAPI.follow(userID).then((data) => {
         if (data.resultCode === 0) {
            dispatch(followSuccess(userID));
         }
         dispatch(toggleFollowingInProgressAC(false, userID));
      });
   };
};

export const unFollow = (userID) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgressAC(true, userID));
      usersAPI.unFollow(userID).then((data) => {
         if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userID));
         }
         dispatch(toggleFollowingInProgressAC(false, userID));
      });
   };
};

export default usersReducer;
