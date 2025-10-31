export class Card {
  #rank: string;
  #suit: string;
  #isFaceUp: boolean;

  constructor(rank:string, suit: string) {
    this.#rank = rank;
    this.#suit = suit;
    this.#isFaceUp = false;
  }

  get rank(): string {
    return this.#rank;
  }

  get suit(): string {
    return this.#suit;
  }

  get isFaceUp(): boolean {
    return this.#isFaceUp;
  }

  set isFaceUp(newState: boolean) {
    this.#isFaceUp = newState;
  }

  toggleFace(): void {
    if(this.#isFaceUp) this.#isFaceUp = false ;
        else this.#isFaceUp = true; 
  }

  setCardImage(id:string) {
    const card = document.getElementById(id);
    let imagePath = "../public/img/back.png";
    if(this.#isFaceUp) imagePath = "../public/img/AS.png"
    card.setAttribute("src", imagePath);
  }

  // spinCard():void {
    
  //   const currentLetter = document.getElementById("reverse-letter");
  //   currentLetter.addEventListener("click", () => {
  //     currentLetter.remove();
  //     console.log(currentLetter, 'soy current')
  //   const newCard = document.createElement("img");
  //   newCard.src = './img/AS.png';
  //   const container = document.querySelector("p");
  //   container.appendChild(newCard);
  
  // })}


}