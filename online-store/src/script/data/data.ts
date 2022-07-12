import Card from './Card';
import {  cardsData } from '../type/types';


export default class Data {
    cards: Card[] = [];
    constructor(data:  cardsData[]) {
        data.forEach(item => {
            const cardsItem: Card = new Card(...item);
            this.cards.push(cardsItem);
        })
    }
}
