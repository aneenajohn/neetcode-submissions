class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Approach 3: Most Optimized (Fixed-Size Array)

        if(s.length !== t.length) { return false}

        // Using a typed array for even better performance
        const counts = new Int32Array(26);

        for(let i =0; i<s.length; i++) {
            counts[s.charCodeAt(i) - 97]++;
            counts[t.charCodeAt(i) - 97]--;
        }

        return counts.every(val => val === 0);
    }
}

//Notes:
// Since the constraints specify "lowercase English letters," we can use a fixed-size array of length 26 instead of a Map. This is faster in many environments because array indexing is cheaper than hash map lookups.

// Explanation:

// Create an array of size 26 initialized with 0s.

// Iterate through the strings. For each character, find its "index" by subtracting the character code of 'a' from the current character's code.

// Increment for s and decrement for t.
