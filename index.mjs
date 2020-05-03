import users from './data.mjs'

import cloneDeep from 'lodash.clonedeep'

// const umbrellaUsers = users.map(function (user)
const umbrellaUsers = users.map((user) => {
  const clonedUser = cloneDeep(user) // clonedUser is a coder created name; cloneDeep is NOT--it is a name from node_modules
  clonedUser.company.name = 'The Umbrella Corporation'
  return clonedUser
})

console.log(umbrellaUsers)
console.log(users)
