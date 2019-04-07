/**
 * @param {number} x
 * @return {number}
 */
let reverse = (x: number): number => {
    let start = 0;
    let a: string[];
    a = x.toString().split('');

    if (a[start] == '-') {
        start = 1;
    }
    let length = a.length - 1;
    while (start <= length) {
        let num = a[start];
        a.splice(start, 1, a[length]);
        a.splice(length, 1, num);
        start++;
        length--;
    }
    let result: number = parseInt(a.join(''));
    if (-2147483648 > result || result > 2147483648) {
        return 0;
    } else {
        return result;
    }

};
console.log(reverse(214748364));