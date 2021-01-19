// function color1(value: string) {
//   return function (target) {

//   }
// }


// function fffffffffffffff() {
//   console.log('f(): evaluated')
//   return function (
//     target,
//     propertyKey: string,
//     descriptor: PropertyDecorator
//   ) {
//     console.log('f(): called')
//   }
// }
// function ggggggggggggggg() {
//   console.log('g(): evaluated')
//   return function (
//     target,
//     propertyKey: string,
//     descriptor: PropertyDecorator
//   ) {
//     console.log('g(): called')
//   }
// }
// class CCCCCC {
//   @fffffffffffffff()
//   @ggggggggggggggg()
//   method() {}
// }


// function sealed(constructor: Function) {
//   console.log('emmm')
//   Object.seal(constructor)
//   Object.seal(constructor.prototype)
// }
// @sealed
// class Greeter111 {
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return `Hello, ${this.greeting}`
//   }
// }

// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = 'new property'
//     hello = 'override'
//   }
// }
// @classDecorator
// class Greeter1111 {
//   property = 'property'
//   hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter1111('world'))


// function enumerable(value: boolean) {
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDecorator
//   ) {
//     descriptor.enumerable = value
//   }
// }
// class Greeter222 {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }

//   @enumerable(false)
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// console.log(new Greeter222('2121').greet())
