interface Named {
  name: string
}

class Personn {
  name: string
}

let p: Named
p = new Personn()


// A Note on Soundness
// Starting out
let xxx: Named
let y = { name: 'Alice', location: 'Seattle' }
xxx = y


// Comparing two functions
let xxxx = (a: number) => 0
let yyyy = (b: number, s: string) => 0
yyyy = xxxx
// xxxx = yyyy

let items = [1, 2, 3]
items.forEach((item, index, array) => console.log(item))
items.forEach((item) => console.log(item))

let xxxxx = () => ({ name: 'Alice' })
let yyyyy = () => ({ name: 'Alice', location: 'Seattle' })
xxxxx = yyyyy
// yyyyy = xxxxx


// Function Parameter Bivariance

