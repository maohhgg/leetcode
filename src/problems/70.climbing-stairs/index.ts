/**
 * @param {number} n
 * @return {number}
 */

let climbStairs = (n: number): number => {

    if (n < 1) return 0;
    const mem = new Array(n + 1);
    mem[0] = 1;
    mem[1] = 1;
    mem[2] = 2;
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i - 1] + mem[i - 2];
    }
    return mem[n];
};
console.log(climbStairs(10));