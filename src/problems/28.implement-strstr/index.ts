/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack: string, needle: string): number => {
    return haystack.indexOf(needle);   
};
console.log(strStr('abcvv','c'));