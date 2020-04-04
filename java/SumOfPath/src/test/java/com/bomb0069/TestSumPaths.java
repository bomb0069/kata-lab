package com.bomb0069;

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertArrayEquals;

public class TestSumPaths {

    @Test
    public void sumOfPathsForEmptyStringShouldBeListOfZero() {
        int[] expect = new int[] {0};
        int[] actual = SumParts.sumParts(new int[] {});
        assertArrayEquals(expect, actual);
    }

    @Test
    public void sumOfPathsOfOnlyOneMemberShouldBeListOfMemberAndZero() {
        int[] expect = new int[] {5, 0};
        int[] actual = SumParts.sumParts(new int[] {5});
        assertArrayEquals(expect, actual);
    }

    @Test
    public void sumOfPathsOf_2_3_ShouldBeListOf_5_3_0() {
        int[] expect = new int[] {5, 3, 0};
        int[] actual = SumParts.sumParts(new int[] {2, 3});
        assertArrayEquals(expect, actual);
    }

    @Test
    public void copyRange () {
        int[] input = new int[] {1, 2, 3};
        int[] expert = new int[] {2, 3};
        int[] actual = Arrays.copyOfRange(input, 1, input.length);
        assertArrayEquals(expert, actual);

    }

    @Test
    public void sumOfPathsOf_2_3_4_ShouldBeListOf_9_7_4_0() {
        int[] expect = new int[] {9, 7, 4, 0};
        int[] actual = SumParts.sumParts(new int[] {2, 3, 4});
        assertArrayEquals(expect, actual);
    }

    @Test
    public void temporary(){
        assertArrayEquals(new int[] {20, 20, 19, 16, 10, 0} , SumParts.sumParts(new int[] {0, 1, 3, 6, 10}));
        assertArrayEquals(new int[] {21, 20, 18, 15, 11, 6, 0}, SumParts.sumParts(new int[] {1, 2, 3, 4, 5, 6}));
        assertArrayEquals(new int[] {10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0},
                SumParts.sumParts(new int[] {744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358}));
    }

}
