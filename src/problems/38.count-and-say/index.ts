/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = (n: number): string => {
    if (n == 1) return '1';
    if (n == 2) return '11';
    let str = countAndSay(n - 1).split('');
    let s: string = '';
    let c = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            c++;
        } else {
            s = s + c + str[i];
            c = 1;
        }
    }
    return s;
};
console.log(countAndSay(10));