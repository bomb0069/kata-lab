export const crossOther = (numbers: number[]): number[] => {
  const newNumbers = numbers.map((_, index, array) => {
    const outerIndex = index
    return array
      .filter((_, innerIndex) => {
        return innerIndex !== outerIndex
      })
      .reduce((multiply, element) => {
        return multiply * element
      }, 1)
  })
  return newNumbers
}
