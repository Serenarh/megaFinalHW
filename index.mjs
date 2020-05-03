import users from './data.mjs'

// TODO: FILTER out all of the 'plurals'
const groceryList = ['Apples', 'Bananas', 'TP', 'Bars', 'Bacon', 'Eggs']

const plurals = groceryList.filter(function (item) {
  // Does the item end with the letter 's'?
  // RETURNS current element ('item') if callback RETURNS TRUE
  return item.endsWith('s')
})

console.log(plurals, groceryList)
