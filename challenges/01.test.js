function isRed({color}) {
  return color === 'rojo'
}

function isValidName({name}) {
  const lowerCasedName = name.toLowerCase()
  return lowerCasedName.includes('a') || lowerCasedName.includes('y')
}

function filterByChristmasSheep(sheep) {
  return isRed(sheep) && isValidName(sheep)
}

function extractChristmasSheep(sheep) {
  return sheep.filter(filterByChristmasSheep)
}

it('filter christmas sheep', () => {
  const sheep = [
    {name: 'Noa', color: 'azul'},
    {name: 'Euge', color: 'rojo'},
    {name: 'Navidad', color: 'rojo'},
    {name: 'Ki Na Ma', color: 'rojo'}
  ]
  const expectedSheep = [
    {name: 'Navidad', color: 'rojo'},
    {name: 'Ki Na Ma', color: 'rojo'}
  ]

  const filteredSheep = extractChristmasSheep(sheep)

  expect(filteredSheep).toEqual(expectedSheep)
})
