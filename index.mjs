import users from './data.mjs'

// TODO 'map' over 'users and assign each 'user' to 'The Umbrella Corporation'

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const umbrellaUsers = users.map(function (user) {
  user.company.name = 'The Umbrella Corporation'
  return user
})

console.log(umbrellaUsers)

console.log(users) // user.company.name is also mutated here
