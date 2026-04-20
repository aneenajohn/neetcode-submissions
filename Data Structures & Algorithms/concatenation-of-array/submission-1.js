class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Optimised
    getConcatenation(nums) {
        let ans = [];
        ans = [...nums, ...nums]
        return ans;
    }

    // Better
    // getConcatenation(nums) {
    //     let n = nums.length
    //     let ans = new Array(2*n);
    //     for(let i=0; i< n; i++) {
    //         ans[i] = nums[i];
    //         ans[i+n] = nums[i];
    //     }
    //     return ans;
    // }

    //Brute force:
    // getConcatenation(nums) {
    //     let n = nums.length;
    //     let ans = [];
    //     for(let i=0; i< n; i++) {
    //        ans.push(nums[i])
    //     }
    //     for(let i=0; i< n; i++) {
    //        ans = [...ans, nums[i]];
    //     }
    //     return ans;
    // }

}
