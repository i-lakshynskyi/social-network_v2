import * as axios from "axios";

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '71c71759-2ce0-46ba-8d1d-49f6c0412c36' },
});