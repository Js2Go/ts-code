// boolean
let isDone: boolean = false

// number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
// let big: bigint = 100n

// string
let color: string = 'blue'
color = 'green'

// Array
let list: number[] = [1, 2]
let list2: Array<number> = [1, 2]

// Tuple
let x: [string, number]
x = ['hello', 10]
x.push(2)
console.log(x[0].substring(1))
// console.log(x[2].substring(1))

// Enum
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
console.log(Color.Green)
console.log(Color[2])
enum Color2 {
  Red = 1,
  Green,
  Blue,
}
console.log(Color2.Green)
enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
console.log(Color3.Blue)

// Unknown
let notSure: unknown = 4
notSure = 'maybe a string instead'
notSure = false

declare const maybe: unknown

// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe
// if (maybe === true) {
//   const aBoolean: boolean = maybe
//   // const aString: string = maybe
// }
console.log(typeof maybe)
if (typeof maybe === 'string') {
  const aString: string = maybe
  console.log(aString)
  // const aBoolean: boolean = maybe
}

// Any
declare function getValue(key: string): any
// const str: string = getValue('myString')

// Void
function warnUser():  void {
  console.log('This is my warning message')
}

let unusable: void = undefined
// unusable = null

// Null and Undefined
let u: undefined = undefined
let n: null = null
// However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types (the one exception being that undefined is also assignable to void).

// Never
function error(message: string): never {
  throw new Error(message)
}
function fail() {
  return error('something failed')
}
function infiniteLoop(): never {
  while(true) {}
}
// fail()

// Object
declare function create(o: object | null): void
// create({ prop: 0 })
// create(null)
// create(1)
// create('')
// create(false)
// create(undefined)


// Type assertions
let someVal: unknown = 'this is a string'
let strLength: number = (someVal as string).length
strLength = (<string>someVal).length
