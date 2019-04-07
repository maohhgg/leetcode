/**
 * @param {string} str
 * @returns {string}
 */
let reverseWords = (str: string): string => {
    return str.trim().split(/[ ]+/).reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("   a   b "));