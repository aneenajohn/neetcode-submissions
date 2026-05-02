class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // brute force approach
        if(s.length !== t.length) return false;
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');

        return sortedS === sortedT
    }
}
