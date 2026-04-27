class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Approach 1: Create 2 hasp maps and compare the freq of each char between the maps
        if(s.length != t.length) {
            return false;
        }else {
            const createFreqMap = (arr) => {
                const freqMap = new Map();
                for(let i in arr) {
                    if(freqMap.has(arr[i])) {
                        freqMap.set(arr[i], (freqMap.get(arr[i]) + 1))
                    }else{
                        freqMap.set(arr[i], 1)
                    } 
                }
                return freqMap;
            }
            const mapS = createFreqMap(s);
            const mapT = createFreqMap(t);
            for(let [key, value] of mapS){
                if(mapT.has(key))  {
                    if (mapT.get(key) !== mapS.get(key)) return false;
                }else {
                    return false;
                }
            }
            return true;
        }
    }
}
