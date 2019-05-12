/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = (s: string): string => {
    let len = s.length;
    if (len < 2) return s;
    let result: string = '';
    for (let i = 1; i < len; i++) {
        let t: string = s.charAt(i);
        let pre = i - 1;
        let next = i + 1;
        while (pre >= 0 && next <= len) {
            if (s.charAt(pre) == s.charAt(next)) {
                t = s.charAt(pre) + t + s.charAt(pre);
                pre--;
                next++;
            } else break;
        }
        if (t.length > result.length) result = t;
    }
    for (let i = 0; i < len; i++) {
        let t: string = '';
        let pre = i;
        let next = i + 1;
        while (pre >= 0 && next <= len) {
            if (s.charAt(pre) == s.charAt(next)) {
                t = s.charAt(pre) + t + s.charAt(pre);
                pre--;
                next++;
            } else break;
        }
        if (t.length > result.length) result = t;
    }
    return result;
};

console.log(longestPalindrome('babad'));