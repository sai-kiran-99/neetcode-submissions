class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0 ; i < nums.length ; i++){
            let item = target - nums[i];
            if(map.has(item)){
                let inde = map.get(item);
                return [inde, i];
            }else{
                map.set(nums[i], i);
            } 
        }
    }
}
