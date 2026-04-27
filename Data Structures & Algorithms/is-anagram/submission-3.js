class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Approach 3: Most Optimized (Fixed-Size Array)

        if(s.length !== t.length) { return false}

        const counts = new Int32Array(26);

        for(let i =0; i<s.length; i++) {
            counts[s.charCodeAt(i) - 97]++;
            counts[t.charCodeAt(i) - 97]--;
        }

        return counts.every(val => val === 0);
    }
}
