import { crossOther } from '../src/cross_other'

describe('Cross value in other member in input array', () => {
  it('Empty Array will Return Empty Array',
    () => {
      const expected: number[] = []
      const input: number[] = []

      const actual = crossOther(input)
      expect(actual).toEqual(expected)
    })
})
