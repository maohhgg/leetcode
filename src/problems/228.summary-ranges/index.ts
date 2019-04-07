/**
 * @param {number[]} nums
 * @return {string[]}
 */
let summaryRanges = (nums: number[]): string[] => {
    if (nums.length <= 1) return nums.map(x => x.toString());

    nums.sort((a, b) => a - b);

    let res:string[] = [];
    let start = nums.shift(),
        end = start;
    nums.forEach(e => {
        if (e - end == 1) end = e;
        else {
            if (start == end) {
                res.push(start.toString());
            } else {
                res.push(`${start}->${end}`);
            }
            start = e;
            end = e;
        }
    });

    if (start == end) res.push(start.toString());
    else res.push(`${start}->${end}`);

    return res;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));