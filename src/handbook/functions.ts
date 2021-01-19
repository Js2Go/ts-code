function add(x: number, y: number): number {
  return x + y
}

// let myAdd = function(x: number, y: number): number {
//   return x + y
// }

let z = 100
function addToZ(x, y) {
  return x + y + z
}

let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  info: string
  // onClickBad(this: Handler, e: Event) {
  //   this.info = e.message
  // }
  onClickGood(this: void, e: Event) {
    console.log('clicked')
  }
  // onClickGood2 = (e: Event) => {
  //   this.info = e.message
  // }
}
let h = new Handler()
interface HTMLDivElement extends UIElement {}
let uiElement: UIElement = document.createElement('div')
uiElement.addClickListener = (func: Function) => {
  func()
}
// uiElement.addClickListener(h.onClickBad)
uiElement.addClickListener(h.onClickGood)


// Overloads
let suits = ['hearts', 'spades', 'clubs', 'diamonds']
function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string, card: number }
function pickCard(x: any): any {
  if (typeof x === 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}
let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
]
let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)
let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)


let arr = [1]
arr.splice
