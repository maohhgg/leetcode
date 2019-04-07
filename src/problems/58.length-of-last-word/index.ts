/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = (s: string): number => {
    if(s == '' || s == null) return 0;

    let a:string[] = s.split(/[ ]+/);
    let l = a.length - 1;

    return a[l] == '' ? a[l-1].length : a[l].length;
};
console.log(lengthOfLastWord("b   a    "));