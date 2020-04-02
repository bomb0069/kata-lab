export const crossOther = (numbers: number[]): number[] => {
  const newNumbers = numbers.map((_, index) => {
    return [...numbers]
      .filter((_, innerIndex) => {
        return innerIndex !== index
      })
      .reduce((multiply, element) => {
        return multiply * element
      }, 1)
  })
  return newNumbers
}
