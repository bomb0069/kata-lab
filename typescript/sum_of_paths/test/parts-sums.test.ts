import { partsSums } from '../src/parts-sum'

describe('Sum of Parts int[] will return int[]', () => {
  it('empty array will return array of zero', () => {
    const input: number[] = []
    const expected = [0]
    const actual = partsSums(input)
    expect(actual).toEqual(expected)
  })

  it('one member array will return array member with zero', () => {
    const input = [5]
    const expected = [5, 0]
    const actual = partsSums(input)
    expect(actual).toEqual(expected)
  })

  function dotest (ls: number[], expected: number[]) {
    const actual = partsSums(ls)
    expect(actual).toEqual(expected)
  }

  it('Basic tests', function () {
    dotest([], [0])
    dotest([0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0])
    dotest([1, 2, 3, 4, 5, 6], [21, 20, 18, 15, 11, 6, 0])
    dotest([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
      [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0])
  })
})
