export const crossOther = (numbers: number[]): number[] => {
  const allCross = numbers.filter((element) => element !== 0)
    .reduce((multiply, element) => multiply * element, 1)

  const newNumbers = numbers.map((element, _, array) => {
    const someElementIsZero = array.some((element) => element === 0)
    if (someElementIsZero) {
      return (element === 0) ? allCross : 0
    } else {
      return allCross / element
    }
  })
  return newNumbers
}
