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

      expect(crossOther(input)).toEqual(expected)
    })

  it('two member array will Return swap member',
    () => {
      const input: number[] = [5, 1]
      const expected: number[] = [1, 5]

      expect(crossOther(input)).toEqual(expected)
    })

  it('three same value member array will return three of projection member',
    () => {
      const input: number[] = [2, 2, 2]
      const expected: number[] = [4, 4, 4]

      expect(crossOther(input)).toEqual(expected)
    })

  it('array of [1, 2, 3] will return three of [6, 3, 2]',
    () => {
      const input: number[] = [1, 2, 3]
      const expected: number[] = [6, 3, 2]

      expect(crossOther(input)).toEqual(expected)
    })

  it('array of [1, 2, 3, 4, 5] will return three of [120, 60, 40, 30, 24]',
    () => {
      const input: number[] = [1, 2, 3, 4, 5]
      const expected: number[] = [120, 60, 40, 30, 24]

      expect(crossOther(input)).toEqual(expected)
    })

  it('support to Zero array of [5, 0] will return three of [0, 5]',
    () => {
      const input: number[] = [5, 0]
      const expected: number[] = [0, 5]

      expect(crossOther(input)).toEqual(expected)
    })

  it('support to Zero array of [5, 0, 2, 3] will return three of [0, 30, 0, 0]',
    () => {
      const input: number[] = [5, 0, 2, 3]
      const expected: number[] = [0, 30, 0, 0]

      expect(crossOther(input)).toEqual(expected)
    })

  it('support to Negative array of [-5, 0] will return three of [0, -5]',
    () => {
      const input: number[] = [-5, 0]
      const expected: number[] = [0, -5]

      expect(crossOther(input)).toEqual(expected)
    })

  it('support to Negative array of [-5, 2, 3] will return three of [6, -15, -10]',
    () => {
      const input: number[] = [-5, 2, 3]
      const expected: number[] = [6, -15, -10]

      expect(crossOther(input)).toEqual(expected)
    })

  it('support to double Negative array of [-5, 2, 3, -4] will return three of [-24, 60, 40, -30]',
    () => {
      const input: number[] = [-5, 2, 3, -4]
      const expected: number[] = [-24, 60, 40, -30]

      expect(crossOther(input)).toEqual(expected)
    })
})
