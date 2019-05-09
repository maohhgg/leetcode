/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
    let len: number = 0, left: number = -1;
    let m: number[] = Array(128).fill(-1);
    
    for (let i = 0; i < s.length; i++) {
        left = Math.max(left, m[s.charCodeAt(i)]);
        m[s.charCodeAt(i)] = i;
        len = Math.max(len, i - left);
    }
    return len;
}
console.log(lengthOfLongestSubstring("abcabcbb"))