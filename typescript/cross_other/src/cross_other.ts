export const crossOther = (numbers: number[]): number[] => {
  const newNumbers = numbers.map((_, index, array) => {
    const tempArray = [...array]
    tempArray.splice(index, 1)
    return tempArray.reduce((multiply, element) => {
      return multiply * element
    }, 1)
  })
  return newNumbers
}
