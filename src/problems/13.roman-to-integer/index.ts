/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s:string): number => {
    let res = 0;
    let m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0; i < s.length; ++i) {
        if (i == 0 || m[s[i]] <= m[s[i - 1]]) res += m[s[i]];
        else res += m[s[i]] - 2 * m[s[i - 1]];
    }
    return res;
};
console.log(romanToInt("XXX"));