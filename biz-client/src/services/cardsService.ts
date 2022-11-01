import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash";
const api: string = process.env.REACT_APP_API || "";

// //get all cards
// export const getAllCards = (): Promise<any> =>
//   axios.get(`${api}cards`, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });

// // add card
// export const addCard = (newCard: Card): Promise<any> =>
//   axios.post(`${api}cards`, newCard, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });

// // edit card
// export const editCard = (card: Card): Promise<any> => {
//   let body = _.omit(card, ["_id"]);
//   return axios.put(`${api}cards/${card._id}`, body, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });
// };


// // get card
// export const getCard = (id: string): Promise<any> =>
//   axios.get(`${api}cards/${id}`, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });


// // delete card
// export const deleteCard = (id: string): Promise<any> =>
//   axios.delete(`${api}cards/${id}`, {
//     headers: { Authorization: `${sessionStorage.getItem("token")}` },
//   });
// add Card
export const addCard = (newCard: Card): Promise<any> => {
  return axios.post(`${api}cards`, newCard, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get all Cards
export const getAllCards = (): Promise<any> => {
  return axios.get(`${api}cards`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get card By ID
export const getCard = (id: string): Promise<any> => {
  return axios.get(`${api}cards/${id}`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Get Card by User ID
export const getCardByUserId = (): Promise<any> => {
  return axios.get(`${api}cards/my-cards`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

// Edit Card
export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// delete card
export const deleteCard = (id: string): Promise<any> =>
  axios.delete(`${api}cards/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
