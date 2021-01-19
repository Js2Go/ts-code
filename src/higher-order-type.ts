// Partial
interface PartialType {
  id: number
  firstName: string
  lastName: string
}
const showType = (args: Partial<PartialType>) => {
  console.log(args)
}
showType({ id: 1 })
showType({ firstName: 'ma', lastName: 'zi' })


// Required
interface RequiredType {
  id: number
  firstName?: string
  lastName?: string
}
const showType2 = (args: Required<RequiredType>) => {
  console.log(args)
}
showType2({ id: 1, firstName: 'ma', lastName: 'zi' })
// showType2({ id: 1 })


// Readonly
interface ReadonnlyType {
  id: number
  name: string
}
const showType3 = (args: Readonly<ReadonnlyType>) => {
  // args.id = 4
  console.log(args)
}
showType3({ id: 1, name: 'mazi' })


// Pick
interface PickType {
  id: number
  firstName: string
  lastName: string
}
const showType4 = (args: Pick<PickType, 'firstName' | 'lastName'>) => {
  console.log(args)
}
// showType4({ id: 1, name: 'mazi' })
showType4({ firstName: 'ma', lastName: 'zi' })


// Omit
interface OmitType {
  id: number
  firstName: string
  lastName: string
}
const showType5 = (args: Omit<OmitType, 'firstName' | 'lastName'>) => {
  console.log(args)
}
showType5({ id: 7 })
// showType5({ firstName: 'ma' })


// Extract
interface FirstType {
  id: number
  firstName: string
  lastName: string
}
interface SecondType {
  id: number
  address: string
  city: string
}
type ExtractType = Extract<keyof FirstType, keyof SecondType>
const showType6 = (args: ExtractType) => {
  console.log(args)
}
showType6('id')

// Exclude
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>
const showType7 = (args: ExcludeType) => {
  console.log(args)
}
// showType7('id')
showType7('firstName')
showType7('lastName')


// Record
interface EmployeeType {
  id: number
  fullname: string
  role: string
}
let s = (t: number) => Symbol(t)
let s1: symbol, s2: symbol, s3: symbol
let employees: Record<symbol, EmployeeType> = {
  [s1 = s(0)]: { id: 1, fullname: 'mazi', role: 'dev' },
  [s2 = s(1)]: { id: 2, fullname: 'haozi', role: 'dev' },
  [s3 = s(2)]: { id: 3, fullname: 'guozi', role: 'dev' },
}
console.log(employees[s2])


// NonNullable
type NonNullableType = string | number | null | undefined
const showType8 = (args: NonNullable<NonNullableType>) => {
  console.log(args)
}
showType8('asd')
showType8(1)
// showType8(null)
// showType8(undefined)


// Mapped types
// StringMap<T> 会将传入的任何类型转换为字符串
type StringMap<T> = {
  [P in keyof T]: string
}
const showType9 = (args: StringMap<{ id: number, name: string }>) => {
  console.log(args)
}
// showType9({ id: 1, name: 'test' })
showType9({ id: '1', name: 'test' })

type NumberMap<T> = {
  [P in keyof T]: number
}
const showType10 = (args: NumberMap<{ id: number, name: string }>) => {
  console.log(args)
}
// showType10({ id: '1', name: 2 })
showType10({ id: 1, name: 2 })


// 类型保护

// 1. typeof
const showType11 = (x: number | string) => {
  if (typeof x === 'number') {
    return `The result is ${x + x}`
  }
  throw new Error(`This operation can't be done on a ${typeof x}`)
}
console.log(showType11(10))
// showType11(`I'm not a number`)

// 2. instanceof
class Foo {
  bar() {
    return 'Hello World'
  }
}
class Bar {
  baz = '123'
}
const showType12 = (arg: Foo | Bar) => {
  if (arg instanceof Foo) {
    console.log(arg.bar())
    return arg.bar()
  }
  throw new Error('The type is not supported')
}
console.log(showType12(new Foo()))
// showType12(new Bar())

// 3. in
interface FirstType1 {
  x: number
}
interface SecondType1 {
  y: string
}
const showType13 = (arg: FirstType1 | SecondType1): string | void => {
  if ('x' in arg) {
    console.log(`The property ${arg.x} exists`)
    return `The property ${arg.x} exists`
  }
  throw new Error(`This type is not supported`)
}
showType13({ x: 7 })
// showType13({ y: '7' })


// 条件类型
type NonNullable1<T> = T extends null | undefined ? never : T
const showType14 = (arg: NonNullable1<string | number | null | undefined | boolean>) => {
  console.log(arg)
}
showType14(1)


interface Person1 {
  name: string
  age: number
  location: string
  hhh: never
  hhh1: null
  hhh2: undefined
}
type Hhh<T> = Pick<T, {[P in keyof T]: T[P] extends never ? never : P}[keyof T]>
let hhh: Hhh<Person1> = {
  name: 'asd',
  age: 12,
  location: 'assdd',
  hhh1: null,
  hhh2: undefined
}
console.log(hhh)
