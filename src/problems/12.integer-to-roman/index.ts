/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = (num: number): string => {
    let s: string = '';
    let m = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        "IV": 4,
        'I': 1
    };
    let i = 0;

    for (let key in m) {
        if (num >= m[key]) {
            i = Math.floor(num / m[key]);
            num = num % m[key];
            s += '' + str(key, i);
        }
        i = 0;
    }
    return s;
};

let str = (s: string, n: number): string => {
    let str: string = '';
    for (let i = 0; i < n; i++) {
        str += '' + s;
    }
    return str;
};

// intToRoman(100);
console.log(intToRoman(11));