/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (str == null || str.length < 1)
        return 0;
    str = str.trim();

    var flag = '+';

    var i = 0;
    if (str.charAt(0) == '-') {
        flag = '-';
        i++;
    } else if (str.charAt(0) == '+') {
        i++;
    }
    var result = 0;

    while (str.length > i && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
        result = result * 10 + (str.charAt(i) - '0');
        i++;
    }

    if (flag == '-')
        result = -result;

    if (result > 2147483647)
        return 2147483647;

    if (result < -2147483648)
        return -2147483648;
    return parseInt(result);
};
console.log(myAtoi("12121"));