/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
const it = require("../../Common/Array/IntervalFunction.js");
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    let res = [];
    if (intervals.length == 0) return res;

    intervals.sort(function (a, b) {
        return a.start - b.start; // must be '-'  not '>'
    });

    res.push(intervals.shift());

    while (intervals.length != 0) {
        let head = intervals.shift()
        if (res[res.length - 1].end >= head.start) {
            res[res.length - 1].end = Math.max(res[res.length - 1].end, head.end)
        } else {
            res.push(head);
        }
    }
    return res;
};

var po = it.createCollection([
    [2, 6],
    [1, 3],
    [8, 10],
    [15, 18]
]);
var p1 = it.createCollection([
    [2, 3],
    [0, 1],
    [1, 2],
    [3, 4],
    [4, 5],
    [1, 1],
    [0, 1],
    [4, 6],
    [5, 7],
    [1, 1],
    [3, 5]
]);
console.log(it.toArray(merge(po)))
console.log(it.toArray(merge(p1)))