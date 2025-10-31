import { Card } from "./Card.js";

// const cardInstance = new Card();

// cardInstance.spinCard();


const card = new Card("A", "spades");
document.getElementById("reverse-letter").addEventListener("click", (e) => {
  card.toggleFace();
  console.log(card)
  if(e.target instanceof HTMLElement)  card.setCardImage(e.target.getAttribute("id"));
});