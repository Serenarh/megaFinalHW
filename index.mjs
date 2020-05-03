import users from './data.mjs'

const nums = [1, 2, 3, 4, 5, 6]

// total is initialized with first value in array
const sum = nums.reduce(function (total, currentNumber) {
  console.log(`total is: ${total}`, `current number is: ${currentNumber}`)
  total += currentNumber
  console.log(total, currentNumber)
  return total
})
