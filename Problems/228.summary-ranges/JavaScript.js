/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length <= 1) {
        return nums.map(x => x + '');
    }
    nums.sort(function (a, b) {
        return a - b;
    });

    var res = [];
    var start = nums.shift(),
        end = start;
    nums.forEach(e => {
        if (e - end == 1) {
            end = e;
        } else {
            if (start == end) {
                res.push(start + '');
            } else {
                res.push(start + '->' + end);
            }
            start = e;
            end = e;
        }
    });
    if (start == end) {
        res.push(start + '');
    } else {
        res.push(start + '->' + end);
    }

    return res;
};

console.log(summaryRanges([0,2,3,4,6,8,9]))