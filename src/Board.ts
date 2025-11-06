import { Card } from "./Card.js";

export class Board {
  #numberOfVisbleCards: number;
  #visibleCards: Map<number, Card> 

  constructor(deck:Array<Card>, numberOfVisbleCards: number ) {
    this.#numberOfVisbleCards = numberOfVisbleCards;
    this.#visibleCards = new Map<number, Card> 
    const deckCopy: Array<Card> = deck.map((card) => {return new Card(card.rank, card.suit)});
    for(let i = 1; i <= numberOfVisbleCards; i++) {
      const randomNumberCard = Math.floor(Math.random() * deckCopy.length);
      this.#visibleCards.set(i, deckCopy[randomNumberCard]);
      deckCopy.splice(randomNumberCard, 1);
    }
    
  }

  get visibleCards():Map<number, Card> {
    return this.#visibleCards;
  }

  renderBoard() {
    const boardCards = document.getElementsByClassName("deck-card");
    for(let i = 0; i < boardCards.length; i++) {
      if( this.#visibleCards.get(i+1) instanceof Card){
        this.#visibleCards.get(i+1).setCardImage(`card-${i+1}`);
      } 
    }
  }
}