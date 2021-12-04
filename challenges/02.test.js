function listGifts(letter) {
  return letter.split(' ').reduce((list, gift) => {
    const cleanedGift = gift.trim()
    return cleanedGift.length < 1 || cleanedGift.startsWith('_')
      ? list
      :{
        ...list,
        [cleanedGift]: (list[cleanedGift] ?? 0) + 1
      }
  }, {})
}

it('Clean gift letter', () => {
  const letter = ' bici coche     balón _playstation bici coche   peluche'
  expect(listGifts(letter)).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})
