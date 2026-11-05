class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map();
        let map2 = new Map();
        if (s.length != t.length) return false;
        for (let i = 0; i < s.length; i++) {
            let item = s[i];
            if (map1.has(item)) {
                map1.set(item, map1.get(item) + 1);
            } else {
                map1.set(item, 1);
            }
        }
        for (let i = 0; i < t.length; i++) {
            let item = t[i];
            if (map2.has(item)) {
                map2.set(item, map2.get(item) + 1);
            } else {
                map2.set(item, 1);
            }
        }
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
