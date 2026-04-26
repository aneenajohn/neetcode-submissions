class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Smarter approach with sets
        return new Set(nums).size !== nums.length;

        // Approach with Sets are better as I just need to know whether I have a repetition or not
        // const seen = new Set();
        // for(let num of nums){
        //     if(seen.has(num)) {
        //         return true;
        //     }
        //     seen.add(num);
        // }
        // return false;


        // Approach with hash map(but you dont need to know the freq of repeat)
        // let numsMap = new Map()
        // for(let num in nums){
        //     if(numsMap.has(nums[num])) {
        //         numsMap.set(nums[num], (numsMap.get(nums[num]) + 1));
        //         return true
        //     }else {
        //         numsMap.set(nums[num], 1);
        //     }
        // }
        // console.log(numsMap)
        // return false;
    }
}
