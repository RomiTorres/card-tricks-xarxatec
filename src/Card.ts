export class Card {

  spinCard():void {
    
    const currentLetter = document.getElementById("reverse-letter");
    currentLetter.addEventListener("click", () => {
      currentLetter.remove();
      console.log(currentLetter, 'soy current')
    const newCard = document.createElement("img");
    newCard.src = './img/AS.png';
    const container = document.querySelector("p");
    container.appendChild(newCard);
  
  })}


}