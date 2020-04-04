package com.bomb0069;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class SumParts {
    public static int[] sumParts(int[] inputArray) {
        Integer[] tempArray = sumOfParts(inputArray).parts.toArray(new Integer[0]);
        int[] returnArray = new int[inputArray.length + 1];

        for (int i = 0; i < tempArray.length; i++ ) {
            returnArray[i] = tempArray[i];
        }

        return returnArray;
    }

    private static PartsWithSum sumOfParts(int[] inputArray) {
        PartsWithSum partsWithSum = new PartsWithSum();


        if (inputArray.length == 0) {
            partsWithSum.parts.add(0);
        } else {
            PartsWithSum tailOfParts = sumOfParts(Arrays.copyOfRange(inputArray, 1, inputArray.length));
            partsWithSum.sum = tailOfParts.sum + inputArray[0];

            partsWithSum.parts = tailOfParts.parts;
            partsWithSum.parts.add(0, partsWithSum.sum);
        }

        return partsWithSum;
    }

    static class PartsWithSum {
        public List<Integer> parts = new ArrayList<>();
        public int sum = 0;
    }
}
