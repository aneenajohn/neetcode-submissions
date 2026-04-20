class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        ans = [...nums, ...nums]
        return ans;
    }
}
