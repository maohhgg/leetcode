/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x: number): boolean => {
    let a: string[];
    a = x.toString().split('');

    let l:number = a.length;

    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] != a[l - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome(123121));