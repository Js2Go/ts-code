type T0 = ConstructorParameters<ErrorConstructor>
type T11 = ConstructorParameters<FunctionConstructor>
type T22 = ConstructorParameters<RegExpConstructor>
type T33 = ConstructorParameters<any>


declare function ff1(): { a: number, b: string }
type T44 = ReturnType<typeof ff1>
type T55 = ReturnType<any>
type T66 = ReturnType<never>


class CCC {
  x = 0
  y = 0
}
type T77 = InstanceType<typeof CCC>


interface Props {
  a?: number
  b?: string
}
type ReqType<T> = {
  [K in keyof T]-?: T[K]
}
const objj: Props = { a: 5 }
const objj2: ReqType<Props> = { a: 5, b: '2' }


function toHex(this: Number) {
  return this.toString(16)
}
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}
console.log(numberToString(15))

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)
console.log(fiveToHex())


type ObjectDescriptior<D, M> = {
  data?: D
  methods?: M & ThisType<D & M>
}
function makeObject<D, M>(desc: ObjectDescriptior<D, M>): D & M {
  let data: object = desc.data || {}
  let methods: object = desc.methods || {}
  return { ...data, ...methods } as D & M
}
let obj = makeObject({
  data: {
    x: 0,
    y: 0
  },
  methods: {
    moveBy(dx: number, dy: number) {
      console.log(this.moveBy)
      this.x += dx
      this.y += dy
    }
  }
})
obj.x = 10
obj.y = 20
obj.moveBy(5, 5)
console.log(obj)
