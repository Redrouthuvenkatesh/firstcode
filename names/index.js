// Importing the list of people's names from the city directory
const peopleList = require('../country/state/city')

// Importing the utility function to extract first names
const getFirstNames = require('../utilities/utils')

// Function to get first names of people in the city
function getPeopleInCity() {
  // Extracting first names using the utility function
  const firstNames = getFirstNames(peopleList)
  return firstNames
}

// Exporting the getPeopleInCity function as the default export
module.exports = getPeopleInCity
