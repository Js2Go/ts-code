interface User {
  name: string
  id: number
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const eVar: string = 'Hello World'
console.log(eVar)

const user: User = new UserAccount('mazi', 1)

function getAdminUser(): User {
  return {
    id: 1,
    name: 'mazi'
  }
}

function deleteUser(user: User) {
  console.error(user)
}

type MyBool = true | false

const b: MyBool = false

const Starter = () => {
  console.log('emmmm')
}

export default Starter

function wrapInArray(obj: string | string[]): string[] {
  if (typeof obj === 'string') {
    return [obj]
  } else{
    return obj
  }
}

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

let o: ObjectWithNameArray = [
  { name: '1' }
]

interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

// declare const backpack: Backpack<string>

// const object = backpack.get()

// backpack.add('2')

interface Point {
  x: number
  y: number
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

printPoint({ x: 1, y: 2 })

const rect = { x: 33, y: 3, width: 30, height: 80 }
printPoint(rect)

class VirtualPoint {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const newVPoint = new VirtualPoint(13, 56)
printPoint(newVPoint)
