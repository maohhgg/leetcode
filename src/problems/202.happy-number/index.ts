/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n: number): boolean => {
    return innerHappy(n)
};

const innerHappy = (n: number, know: any = null): boolean => {
    if (n.toString().replace("0", "") === "1") return true;

    know = know || new Set();

    if (know.has(n)) return false;
    know.add(n);

    let splitArray: string[] = n.toString().split("");
    let sum = splitArray.reduce((acc, digit) => acc + parseInt(digit) ** 2, 0);

    return innerHappy(sum, know)
};

console.log(isHappy(10));