
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = new Map();
        let tMap = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) {
                let count = sMap.get(s[i]);
                sMap.set(s[i], count + 1);
            } else {
                sMap.set(s[i], 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (tMap.has(t[j])) {
                let count = tMap.get(t[j]);
                tMap.set(t[j], count + 1);
            } else {
                tMap.set(t[j], 1);
            }
        }

        for (const [char, count] of tMap) {
            if (!sMap.has(char)) {
                return false;
            }

            const count1 = sMap.get(char);

            if (count1 !== count) {
                return false;
            }
        }

        return true;
    }
}
