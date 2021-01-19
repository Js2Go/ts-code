const helloWorld = 'Hello World'
let hiWorld = 'Hi World'

// String Literal Types
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement2 {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {}
    if (easing === 'ease-out') {}
    if (easing === 'ease-in-out') {}
  }
}
let btn = new UIElement2()
btn.animate(0, 0, 'ease-in-out')
// btn.animate(0, 0, 'uneasy')


// Numeric Literal Types
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6
}
console.log(rollDice())

interface MapConfig {
  lng: number
  lat: number
  tileSize: 8 | 16 | 32
}
function setupMap(config: MapConfig): void {}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 })


// Boolean Literal Types
interface ValidationSuccess {
  isValid: true
  reason: null
}
interface ValidationFailure {
  isValid: false
  reason: string
}
type ValidationResult = ValidationSuccess | ValidationFailure
// let hhh: ValidationResult = { isValid: false, reason: null }
