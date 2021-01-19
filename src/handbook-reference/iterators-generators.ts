let pets = new Set(['Cat', 'Dog', 'Hamster'])
pets['species'] = 'mammals'

console.log(pets)

for (let pet in pets) {
  console.log(pet)
}
for (let pet of pets) {
  console.log(pet)
}
