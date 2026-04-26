class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = new Map()
        for(let num in nums){
            if(numsMap.has(nums[num])) {
                numsMap.set(nums[num], (numsMap.get(nums[num]) + 1));
                return true
            }else {
                numsMap.set(nums[num], 1);
            }
        }
        console.log(numsMap)
        return false;
    }
}
