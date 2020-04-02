import { crossOther } from '../src/cross_other'

describe('Cross value in other member in input array', () => {
  it('Empty Array will Return Empty Array',
    () => {
      const input: number[] = []
      const expected: number[] = []

      const actual = crossOther(input)
      expect(actual).toEqual(expected)
    })

  it('Only one member array will Return Array of 1',
    () => {
      const input: number[] = [5]
      const expected: number[] = [1]

      const actual = crossOther(input)
      expect(actual).toEqual(expected)
    })

  it('two member array will Return swap member',
    () => {
      const input: number[] = [5, 1]
      const expected: number[] = [1, 5]

      const actual = crossOther(input)
      expect(actual).toEqual(expected)
    })
})
