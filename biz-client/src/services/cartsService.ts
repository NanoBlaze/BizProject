import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash"

const api: string = process.env.REACT_APP_API || "";

// get user cart
export const getUserCart = (): Promise<any> =>
  axios.get(`${api}carts`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// add to user cart
export const addToUserCart = (card: Card): Promise<any> =>{
    let body = _.omit(card, ["_id", "__v"])
  return axios.post(`${api}carts`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
 
}


// delete item cart
export const deleteCart = (id: string): Promise<any> =>
  axios.delete(`${api}cart/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
