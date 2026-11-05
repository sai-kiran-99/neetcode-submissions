class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            let a = nums[i];
            if (set.has(a)) {
                return true;
            } else {
                set.add(a);
            }
        }
        return false;
    }
}
