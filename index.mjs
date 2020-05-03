import users from './data.mjs'

// TODO: Get all emails that end with .org
// const orgUsers = users.filter(user => user.email.endsWith('.org'))
const orgUsers = users.filter(({ email }) => email.endsWith('.org'))
console.log(orgUsers)
