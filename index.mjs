import users from './data.mjs'

console.log(users)

const groceryList = ['Apples', 'Bananas', 'TP', 'Bars', 'Bacon', 'Eggs']

// TODO 'map' over 'groceryList' and 'transform' each item by adding 'from Schnucks'
// function (item) is a callback function
const schnuckList = groceryList.map(function (item) {
  item += ' from Schnucks' // item = item + 'from Schnucks'
  return item
})

console.log(schnuckList, groceryList) // map creates a new, separate array while (generally) leaving the original array intact
