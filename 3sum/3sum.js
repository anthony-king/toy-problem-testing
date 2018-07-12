/* eslint no-multiple-empty-lines: 0 */

/*
 * Given an array nums of n integers,
 * are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note:
 * The solution set must not contain duplicate triplets.
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums Numbers to get sum of
 * @param {number} [sumTotal=0] Desired sum value
 * @param {number} [sumSize=3] Number of integers allowed in sum
 * @return {number[][]} All combinations summing to zer
 */
const threeSum = (nums, sumTotal = 0, sumSize = 3) => {
  // All values to um
  let allSums = [];

  nums.forEach((number, index) => {
    // Go through each number
    if (sumSize === 1) {
      if (number === sumTotal) {
        allSums.push([number]);
      }
    } else {
      // Recursive case
      // Get all combinations that may sum to sumTotal - number
      const numsSubset = nums.slice(index + 1);
      const subSetSums = threeSum(numsSubset, sumTotal - number, sumSize - 1);

      // Add current number to subset results
      const numSums = subSetSums.map((sum) => {
        // Add number to sum
        const newSum = sum.slice();
        newSum.unshift(number);
        return newSum;
      });

      // Update all sums
      allSums = allSums.concat(numSums);
    }
  });

  // Return all sums
  return allSums;
};

if (window.DEBUG) {
  module.exports = threeSum;
}
