/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = (str: string): number => {
    if (!str) return 0;
    str = str.trim();

    let flag = '+';

    let i = 0;
    if (str.charAt(0) == '-') {
        flag = '-';
        i++;
    } else if (str.charAt(0) == '+') {
        i++;
    }

    let result:number = 0;

    while (str.length > i && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
        result = result * 10 + (parseInt(str.charAt(i)));
        i++;
    }

    if (flag == '-')
        result = -result;

    if (result > 2147483647)
        return 2147483647;

    if (result < -2147483648)
        return -2147483648;
    return result;
};

console.log(myAtoi("-12121"));