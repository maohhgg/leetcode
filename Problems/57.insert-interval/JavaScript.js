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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
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

var p1 = it.createCollection([
    [1,2],[3,5],[6,7],[8,10],[12,16]
]);

console.log(it.toArray(insert(p1,it.createInterval([4,9]))))