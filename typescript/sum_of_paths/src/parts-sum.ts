export const partsSums = (numbers: number[]) : number[] => {
  const returnNumbers = []
  let sum = 0
  returnNumbers[numbers.length] = 0
  for (let i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i]
    returnNumbers[i] = sum
  }
  return returnNumbers
}
