import axios from "axios";
import { User } from "../interfaces/User";
import jwt_decode from "jwt-decode";

const api: string = process.env.REACT_APP_API || "";

// Add New User
export const addUser = (newUser: User): Promise<any> => {
  return axios.post(`${api}register`, newUser);
};
// Login
export const login = (values: User): Promise<any> => {
  return axios.post(`${api}login`, values);
};
// Get User Details
export const getUser = (): Promise<any> => {
  return axios.get(`${api}profile`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// get "isAdmin" Payload From Token
export const getIsAdmin = () => {
  return (jwt_decode(sessionStorage.getItem("token") as string) as any).isBiz;
};