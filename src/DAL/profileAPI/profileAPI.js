import { instance } from '../instance';

export const profileAPI = {
   getProfile(userID) {
      return instance.get(`profile/${userID}`).then((response) => response.data);
   },
   getUserStatus(userID) {
      return instance.get(`profile/status/${userID}`);
   },
   updateUserStatus(status) {
      return instance.put(`profile/status/`, { status: status });
   },
};
