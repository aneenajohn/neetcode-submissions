class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // If the array is sorted in an ascending order this works else it wont
    // twoSum(nums, target) {
    //     let n = nums.length;
    //     let left = 0;
    //     let right = n-1;
    //     while(left < right) {
    //         let sum = nums[left] + nums[right];
    //         if(sum < target) {
    //             left++
    //         }else if(sum > target) {
    //             right--
    //         }else {
    //             return [left, right]
    //         }
    //     }
    //     return [];
    // }
    twoSum(nums, target) {
        const map = new Map();
        for(let i =0; i< nums.length; i++) {
            const compliment = target - nums[i];
            if(map.has(compliment)) {
                return [map.get(compliment),i]
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
