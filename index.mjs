import users from './data.mjs'

const me = {
  name: 'Manav'
}

const planet = 'Earth'

// parameter is an object--OBJECTS ARE PASSED BY REFERENCE
function changeName (person) {
  person.name = 'Dhanav'
  return person
}

// parameter is a string--PRIMITIVES ARE PASSED BY COPY
function changePlanet (currentPlanet) {
  currentPlanet = 'Epsilon Eridani II'
  return currentPlanet
}

const newMe = changeName(me)
const newPlanet = changePlanet(planet)

console.log(`planet is: ${planet}`)
console.log(`newPlanet is : ${newPlanet}`)
console.log(`me is ${me.name}`)
console.log(`newMe is ${newMe.name}`)
