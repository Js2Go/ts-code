// Enums
// Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction)

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction1)

enum UserResponse {
  No = 0,
  Yes = 1
}
function respond(recipient: string, message: UserResponse): void {
  console.log(recipient + message)
}
respond('Princess Caroline', UserResponse.Yes)

// enum E {
//   A = getSomeValue(),
//   // Enum member must have initializer.
//   B,
// }


// String enums
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
console.log(Direction2)


// Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}
console.log(BooleanLikeHeterogeneousEnum)


// Computed and constant members
enum E1 {
  X,
  Y,
  Z,
}
enum E2 {
  A = 1,
  B,
  C,
}
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length
}


// Union enums and enum member types
enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle
  radius: number
}
interface Square {
  kind: ShapeKind.Square
  sideLength: number
}
let cc: Circle = {
  kind: ShapeKind.Circle,
  radius: 100
}
console.log(cc)

enum EE {
  Foo,
  Bar,
}
// function f(x: EE) {
//   if (x !== EE.Foo || x !== EE.Bar) {}
// }


// Enums at runtime
enum EEE {
  X,
  Y,
  Z,
}
function fff(obj: { X: number }) {
  console.log(obj)
  return obj.X
}
fff(EEE)


// Enums at compile time
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG
}
/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel
function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]
  if (num <= LogLevel.WARN) {
    console.log('Log level key is:', key)
    console.log('Log level value is:', num)
    console.log('Log level message is:', message)
  }
}
printImportant('ERROR', 'This is a message')


// Reverse mappings
enum Enum {
  A,
}
let aa = Enum.A
let nameOfA = Enum[aa] // 'A'
console.log(aa, nameOfA)



// const enums
// const enum Enum1 {
//   A = 1,
//   B = 2,
// }

// const enum Direction5 {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// let directions = [
//   Direction5.Up,
//   Direction5.Down,
//   Direction5.Left,
//   Direction5.Right,
// ]


// Ambient enums
declare enum Enum11 {
  A = 1,
  B,
  C = 2,
}
const e: Enum11 = 101212
console.log(e)
