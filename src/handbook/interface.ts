// First Interface
interface LabelValue {
  label: string
}
function printLabel(labelObject: LabelValue) {
  console.log(labelObject.label)
}
let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)

// Optional Properties
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}
function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}
let mySquare = createSquare({ color: 'black' })
console.log(mySquare)

// Readonly properties
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5
console.log(p1)

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro = ro as number[]
// ro[0] = 12
// ro.push(5)

// Variables use const whereas properties use readonly


// Excess Property Checks
function createSquare2(config: SquareConfig): { color: string, area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  }
}
mySquare = createSquare2({ color: 'red', width: 100 })
console.log(mySquare)

mySquare = createSquare2({ width: 100, opacity: .5 })
console.log(mySquare)

let squareOpts = { colour: 'red' }
mySquare = createSquare2(squareOpts)


// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}
mySearch = (src, sub) => src.search(sub) > -1
console.log(mySearch('asdds', 's'))


// Indexable Types
interface StringArray {
  [index: number]: string
}
let myArray: StringArray = ['Bob', 'Fred']
console.log(myArray[0])

interface Animal {
  name: string
}
interface Dog extends Animal {
  breed: string
}
interface NotOkay {
  [x: number]: Animal
  [x: string]: Dog | Animal
}
interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string
}
interface NumberOrStringDictionary {
  [index: string]: number | string
  length: number
  name: string
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray2: ReadonlyStringArray = ['a', 'b']
// myArray2[2] = 'c'
console.log(myArray2)


// Class Types
interface ClockInterface {
  currentTime: Date
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
interface ClockInterface2 extends ClockInterface {
  setTime(d: Date): void
}
class Clock2 implements ClockInterface2 {
  currentTime: Date = new Date()
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

// interface ClockConstructor {
//   new(hour: number, minute: number)
// }
// class Clock3 implements ClockConstructor {
//   currentTime: Date
//   constructor(h: number, m: number) {}
// }
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface3
}
interface ClockInterface3 {
  tick(): void
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface3 {
  return new ctor(hour, minute)
}
class DigitalClock implements ClockInterface3 {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface3 {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}
let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

const Clock4: ClockConstructor = class Clock4 implements ClockInterface3 {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}
new Clock4(1, 2).tick()


// Extending Interfaces
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}
let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0
console.log(square)


// Hybrid Types
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter {
  let counter = function (start: number) {
    return `${start}`
  } as Counter
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5.0


// Interfaces Extending Classes
class Control {
  private state: any
}
interface SelectableControl extends Control {
  select(): void
}
class Button extends Control implements SelectableControl {
  select() {}
}
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
// 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时
// 这个接口类型只能被这个类或其子类所实现
// class ImageControl implements SelectableControl {
//   private state: any
//   select() {}
// }
