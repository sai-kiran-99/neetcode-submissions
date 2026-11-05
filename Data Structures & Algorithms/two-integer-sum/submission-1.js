class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map(); //. empty new map where we are gonna store the diff and the index of the nums[i] this difference came from

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (seen.has(diff)) {
                let idx = seen.get(diff);
                return [i, idx];
            } else {
                  seen.set(nums[i], i);
            }
        }
    }
}
