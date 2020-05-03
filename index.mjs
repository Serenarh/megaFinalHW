import users from './data.mjs'

// TODO: Get all emails that end with .org
/* const orgUsers = users.filter(({ email, website }) => email.endsWith('.org') || website.endsWith('.org'))

const orgUserEmails = orgUsers.map(({ email }) => email) */

// using destructuring here to look only at email & website
const orgUserEmails = users.filter(({ email, website }) => email.endsWith('.org') || website.endsWith('.org')).map(({ email }) => email)

console.log(orgUserEmails)
