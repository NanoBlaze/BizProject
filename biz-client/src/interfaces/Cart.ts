import { Card } from "./Card";

export interface Cart{
    _id?:string
    userId?: string;
    cards: Card[];
    active: boolean;

}