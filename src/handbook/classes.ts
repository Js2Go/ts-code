// Classes
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}
let greeter = new Greeter('world')
console.log(greeter.greet())


// Inheritance
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}
const dog = new Dog('dog')
dog.bark()
dog.move(10)
dog.bark()

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}
let sam = new Snake('Sammy the Python')
let tom: Animal = new Horse('Tommy the Palomino')
sam.move()
tom.move(34)


// Public, private, and protected modifiers
// Public by default


// ECMAScript Private Fields
class A {
  #name: string
  constructor(theName: string) {
    this.#name = theName
  }
}
console.log(new A('asdsd'))


// Understanding TypeScript’s private
class B {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}
// console.log(new B('asdsd').name)

class C extends B {
  constructor() {
    super('Rhino')
  }
}
class E {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}
let animal = new B('Goat')
let rhino = new C()
let employee = new E('Bob')
animal = rhino
// animal = employee


// Understanding protected
class Person {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
}
class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}
let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// let john = new Person('John')
// console.log(howard.name)


// Readonly modifier
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 0b1
  constructor(theName: string) {
    this.name = theName
  }
}
let dad = new Octopus('Man with the 8 strong legs')
console.log(dad.numberOfLegs)
// dad.name = 'Man with the 3-pipce suit'


// Parameter properties
class Octopus2 {
  readonly numberOfLegs: number = 0xa
  constructor(readonly name: string) {}
}
let dad2 = new Octopus('Man with the 8 strong legs')
console.log(dad2.numberOfLegs)
dad.name


// Accessors
class Employee2 {
  fullName: string
}
let employee2 = new Employee2()
employee2.fullName = 'Bob Smith'
if (employee2.fullName) {
  console.log(employee2.fullName)
}

const fullNameMaxLength = 10
class Employee3 {
  private _fullName: string = ''
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength)
    }
    this._fullName = newName
  }
}
let employee3 = new Employee3()
employee3.fullName = 'Bob Smith'
if (employee3.fullName) {
  console.log(employee3.fullName)
}


// Static Properties
class Grid {
  static origin = { x: 0, y: 0 }
  constructor(public scale: number) {
    this.scale = scale
  }
  calculateDistanceFromOrigin(point: { x: number, y: number }) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
}
let grid1 = new Grid(1.0) // 1x scale
let grid2 = new Grid(5.0) // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }))


// Abstract Classes
abstract class Animal1 {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth...')
  }
}

abstract class Department {
  constructor(public name: string) {
    this.name = name
  }
  printName(): void {
    console.log('Department name: ', this.name)
  }
  abstract printMeeting(): void
}
class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}
let department: Department
// error: cannot create an instance of an abstract class
// department = new Department()
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// Property 'generateReports' does not exist on type 'Department'.
// department.generateReports()


// Advanced Techniques
// Constructor functions
class Greeter1 {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}
let greeter1: Greeter1 = new Greeter1('world')
console.log(greeter1.greet())

class Greeter2 {
  static standardGreeting = 'Hello, there'
  greeting: string
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter2.standardGreeting
    }
  }
}
let greeter2: Greeter2 = new Greeter2()
console.log(greeter2.greet())
let greeterMaker: typeof Greeter2 = Greeter2
greeterMaker.standardGreeting = 'Hey there'
let greeter22: Greeter2 = new greeterMaker()
console.log(greeter22.greet())
let greeter23: Greeter2 = new Greeter2()
console.log(greeter23.greet())


// Using a class as an interface
class Point2 {
  x: number
  y: number
}
interface Point3d extends Point2 {
  z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 }
console.log(point3d)
