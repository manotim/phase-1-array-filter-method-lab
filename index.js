// Code your solution here
function findMatching(drivers, attribute) {
    return drivers.filter((driver) => driver.toLowerCase() === attribute.toLowerCase())
  }

  function fuzzyMatch(drivers, attribute) {
    return drivers.filter((driver) => driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase())
  }

  function matchName(drivers, argument) {
    return drivers.filter((driver) => driver.name === argument )
  }
