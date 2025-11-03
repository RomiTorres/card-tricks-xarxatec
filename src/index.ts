import { Card } from "./Card.js";

// const cardInstance = new Card();

// cardInstance.spinCard();


const card1 = new Card("A", "spades"); // spades, hearts, diamonds, clubs
const card2 = new Card("K", "hearts")
document.getElementById("first-card").addEventListener("click", (e) => {
  card1.toggleFace();
  console.log(card1)
  if(e.target instanceof HTMLElement)  card1.setCardImage(e.target.getAttribute("id"));
});

document.getElementById("second-card").addEventListener("click", (e) => {
  card2.toggleFace();
  console.log(card2)
  if(e.target instanceof HTMLElement)  card2.setCardImage(e.target.getAttribute("id"));
});