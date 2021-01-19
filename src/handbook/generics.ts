// Hello World of Generics
function identity<T>(arg: T): T {
  return arg
}
console.log(identity('sads'))


// Working with Generic Type Variables
// function loggingIdentity<T>(arg: T[]): T[] {
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}


// Generic Types
let myIdentity: <T>(arg: T) => T = identity
let myIdentity2: { <T>(arg: T): T } = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}
interface GenericIdentityFn1<T> {
  (arg: T): T
}
let myIdentity3: GenericIdentityFn = identity
let myIdentity4: GenericIdentityFn1<number> = identity


// Generic Classes
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function (x, y) {
  return x + y
}
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))


// Generic Constraints
interface Lengthwise {
  length: number
}
function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity1({ length: 10, value: 10 })


// Using Type Parameters in Generic Constraints
function getProperty1<T, K extends keyof T>(obj: T, key: K) {
  console.log(obj[key])
  return obj[key]
}
let x1 = { a: 1, b: 2, c: 3, d: 4 }
getProperty1(x1, 'd')
// getProperty(x1, 'm')


// Using Class Types in Generics
function create1<T>(c: { new (): T }): T {
  return new c()
}
class BeeKeeper {
  hasMark: boolean
}
class ZooKeeper {
  nameTag: string
}
class Animall {
  numLegs: number
}
class Bee extends Animall {
  keeper: BeeKeeper = {
    hasMark: true
  }
}
class Lion extends Animall {
  keeper: ZooKeeper = {
    nameTag: 'lion'
  }
}
function createInstance<A extends Animall>(c: new () => A): A {
  return new c()
}
console.log(createInstance(Lion).keeper.nameTag)
console.log(createInstance(Bee).keeper.hasMark)
