// Type Guards and Differentiating Types
interface Fish1 {
  swim: () => void
}
interface Bird1 {
  fly: () => void
}
type Pet1 = Fish1 | Bird1
function getSmallPet1(): Pet1 {
  let pet: Pet1 = {
    // swim: () => console.log('swim'),
    fly: () => console.log('fly'),
  }
  return pet
}
let pet = getSmallPet1()
if ('swim' in pet) {
  pet.swim()
}
// if (pet.fly) {
//   pet.fly()
// }

let fishPet = pet as Fish1
let birdPet = pet as Bird1
if (fishPet.swim) {
  fishPet.swim()
} else if (birdPet.fly) {
  birdPet.fly()
}


// User-Defined Type Guards
// Using type predicates
function isFish(pet: Pet1): pet is Fish1 {
  return (pet as Fish1).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
const zoo: (Fish1 | Bird1)[] = [getSmallPet1(), getSmallPet1(), getSmallPet1()]
const underWater1: Fish1[] = zoo.filter(isFish)
const underWater2: Fish1[] = zoo.filter<Fish1>(isFish)
// const underWater3: Fish1[] = zoo.filter<Fish1>(pet => isFish(pet))


// Using the in operator
function move(pet: Fish1 | Bird1) {
  if ('swim' in pet) {
    return pet.swim()
  }
  return pet.fly()
}

// typeof type guards
function isNumber(x: any): x is number {
  return typeof x === 'number'
}
function isString(x: any): x is string {
  return typeof x === 'string'
}
function padLeft2(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
console.log(padLeft2('10', 11))


// instanceof type guards
interface Padder {
  getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ')
  }
}
class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value
  }
}
function getRandomPadder() {
  return Math.random() < .5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder('  ')
}
let padder: Padder = getRandomPadder()
// console.log(padder.getPaddingString())
if (padder instanceof SpaceRepeatingPadder) {
  console.log(padder)
}
if (padder instanceof StringPadder) {
  console.log(padder)
}


// Nullable types
let exampleString = 'foo'
// exampleString = null

type StringNullUndefined = string | null | undefined
let stringOrNull: StringNullUndefined = 'bar'
stringOrNull = null
stringOrNull = undefined


// Optional parameters and properties
function f(x: number, y?: number) {
  return x + (y ?? 0)
}
console.log(f(1, 2))
console.log(f(1))
console.log(f(1, undefined))
// console.log(f(1, null))

class Cc {
  a: number
  b?: number
}
let ccc = new Cc()
ccc.a = 12
// ccc.a = undefined
ccc.b = 13
ccc.b = undefined
// ccc.b = null


// Type guards and type assertions
function ff(stringOrNull: string | null): string {
  // if (stringOrNull === null) {
  //   return 'default'
  // }
  // return stringOrNull
  return stringOrNull ?? 'default'
}
interface UserAccount {
  id: number
  email?: string
}
function getUser(type: string): UserAccount | undefined {
  return {
    id: 1,
    email: `${type}@qq.com`
  }
}
const user = getUser('admin')
// user.id
// if (user) {
//   user.email.length
// }
user!.email!.length


// Type Aliases
type Second = number
let timeInSecond: number = 10
let time: Second = 10

type Container<T> = { value: T }

type Tree<T> = {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}

type LinkedList<Type> = Type & { next?: LinkedList<Type> }
interface Personn {
  name: string
}
function getDriversLicenseQueue(): LinkedList<Personn> {
  return {
    name: '1',
    next: {
      name: '2',
      next: {
        name: '3'
      }
    }
  }
}
let person = getDriversLicenseQueue()
person.name
person!.next!.name
person!.next!.next!.name
person?.next?.next?.next?.name


// Interfaces vs. Type Aliases
interface Animalll {
  name: string
}
interface Bearr extends Animalll {
  honey: boolean
}
const bearr: Bearr = {
  name: 'bear',
  honey: false
}
console.log(bearr)

type Animallll = {
  name: string
}
type Bearrr = Animallll & {
  honey: boolean
}
const bearrr: Bearrr = {
  name: 'bearr',
  honey: true
}
console.log(bearrr)

// interface Window {
//   title: string
// }
// interface Window {
//   ts: import('typescript')
// }
// const src = `const a = 'hello world'`
// window.ts.transpileModule(src, {})

// type Window = {
//   title: string
// }
// type Window = {
//   ts: import('typescript')
// }


// Enum Member Types
// Polymorphic this types
class BasicCalculator {
  public constructor(protected value: number) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number): this {
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
}
class ScientifiCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value)
  }
  public sin(): this {
    this.value = Math.sin(this.value)
    return this
  }
}
let v = new ScientifiCalculator(2).multiply(5).sin().add(1).currentValue()
console.log(v)


// Index types
// function pluck(o, propertyNames) {
//   return propertyNames.map(n => o[n])
// }
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n])
}
function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]
}
interface Carr {
  manufacturer: string
  model: string
  year: number
}
let taxi: Carr = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014
}
type hhhhhh = Pick<Carr, 'model' | 'year'>
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model'])
let modelYear = pluck(taxi, ['model', 'year'])
console.log(makeAndModel, modelYear)
let aaa: hhhhhh = {
  model: '',
  year: 1
}
let manufacturer: string = getProperty(taxi, 'manufacturer')
let year: number = getProperty(taxi, 'year')
console.log(manufacturer, year)
// let unknown = getProperty(taxi, 'unknown')


// Index types and index signatures
interface Dictionary<T> {
  [key: string]: T
}
interface Dictionary2<T> {
  [key: number]: T
}
let kks: Dictionary<number> = {
  10: 555,
  3: 4
}
let keys: keyof Dictionary<number> = '10'
let value: Dictionary<number>['foo'] = 1
let value2: Dictionary2<number>[0] = 2
console.log(keys, value, value2, kks[keys])


// Mapped types
interface PersonSubset {
  name?: string
  age?: number
}
interface PersonReadonly {
  readonly name: string
  readonly age: number
}
type PartialWithNewMember<T> = {
  [P in keyof T]?: T[P]
} & { newMember: boolean }
// type PartialWithNewMember<T> = {
//   [P in keyof T]?: T[P]
//   newMember: boolean
// }
type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }
let aaaa: Flags[] = [{
  option1: true,
  option2: false
}]

type Proxy<T> = {
  get(): T
  set(value: T): void
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(o: T): Proxify<T> {
  let obj: Proxify<T> = {} as Proxify<T>
  for (let key in o) {
    obj[key] = {
      get: () => {
        return o[key]
      },
      set: val => {
        o[key] = val
      }
    }
  }
  return obj
}
let props = { rooms: 4 }
let proxyProps = proxify(props)
console.log(proxyProps.rooms.get())
proxyProps.rooms.set(10)
console.log(proxyProps.rooms.get())

type ThreeStringProps = Record<'prop1' | 'prop2' | symbol, string>
let emmmmmm: ThreeStringProps = {
  prop1: 'f',
  prop2: '2',
  [Symbol()]: '2'
}
console.log(emmmmmm)


// Inference from mapped types
function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}
let originalProps = unproxify(proxyProps)
console.log(originalProps)


// Conditional Types
declare function fffff<T extends boolean>(x: T): T extends true ? string : number
// let xxxx = fffff(Math.random() < 0.5)
// console.log(xxxx)

interface Foo {
  propA: boolean
  propB: boolean
}
declare function fffffffffff<T>(x: T): T extends Foo ? string : number
// (function foo<U>(x: U) {
//   let a = fffffffffff(x)

//   let b: string | number = a
// })({
//   propA: false,
//   propB: false
// })


// Distributive conditional types
type BoxedValue<T> = { value: T }
type BoxedArray<T> = { array: T[] }
type Boxed<T> = T extends any[] ? BoxedArray<T> : BoxedValue<T>
type T1 = Boxed<string>
type T2 = Boxed<number[]>
type T3 = Boxed<string | number[]>

// function ff1<T>(x: T, y: NonNullable<T>) {
//   x = y
//   y = x
// }
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>

interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}
type TT1 = FunctionPropertyNames<Part>
type TT2 = NonFunctionPropertyNames<Part>
type TT3 = FunctionProperties<Part>
type TT4 = NonFunctionProperties<Part>

type ElementType<T> = T extends any[] ? ElementType<T[number]> : T // Error
let aaaaaaaaaa: ElementType<boolean[]> = false
console.log(aaaaaaaaaa)


// Type inference in conditional types
type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any
let eae: ReturnTypee<(a: string) => string> = 'a'

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T
type T00 = Unpacked<string>
type T01 = Unpacked<string[]>
type T02 = Unpacked<() => string>
type T03 = Unpacked<Promise<string>>
type T04 = Unpacked<Promise<string>[]>
type T05 = Unpacked<Unpacked<Promise<string>[]>>

type Fooo<T> = T extends { a: infer U, b: infer U } ? U : never
type T001 = Fooo<{ a: string, b: string }>
type T002 = Fooo<{ a: string, b: number }>

type Barr<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never
type T0001 = Barr<{ a: (x: string) => void, b: (x: string) => void }>
type T0002 = Barr<{ a: (x: string) => void, b: (x: number) => void }>
// let asdasdasd: T0002 = '1'

class TestClass {
  constructor(public name: string, public age: number) {}
}
type Params = ConstructorParameters<typeof TestClass>
type Instance = InstanceType<typeof TestClass>

type TTuple = [string, number]
type TArray = Array<string | number>

type Res = TTuple extends TArray ? true : false // true
type ResO = TArray extends TTuple ? true : false // false


type T1111 = { name: string }
type T2222 = { age: number }
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type Result111 = UnionToIntersection<T1111 | T2222>


type Barrrr<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void }
  ? U
  : never
type T20 = Barrrr<{ a: (x: string) => void, b: (x: string) => void }> // string
type T21 = Barrrr<{ a: (x: string) => void, b: (x: number) => void }> // 2.8 string & number


declare function foooo(x: string): number
declare function foooo(x: number): string
declare function foooo(x: string | number): string | number
type TTT1 = ReturnType<typeof foooo>

// type ReturnedType<T extends (...args: any[]) => infer R> = R;
type ReturnedType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type TTT2 = ReturnedType<typeof foooo>
