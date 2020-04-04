export const crossOther = (numbers: number[]): number[] => {
  return numbers.map(
    (_, index, array) => array
      .map((number, innerIdx) => index === innerIdx ? 1 : number)
      .reduce((cross, element) => cross * element, 1)
  )
}
