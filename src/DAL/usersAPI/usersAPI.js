import { instance } from '../instance';

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 16) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`, {}).then((response) => response.data);
   },
   unFollow(userId) {
      return instance.delete(`follow/${userId}`).then((response) => response.data);
   },
};
