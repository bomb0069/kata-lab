export const crossOther = (numbers: number[]): number[] => {
  if (numbers.length === 1) {
    return [1]
  } else if (numbers.length === 2) {
    return [numbers[1], numbers[0]]
  }
  return numbers
}
