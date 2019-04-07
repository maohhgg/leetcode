import {Interval, IntervalUnit} from "../../common/interval";
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
let merge = (intervals: Interval[]): Interval[] => {
    let res:Interval[] = [];
    if (intervals.length == 0) return res;

    intervals.sort((a, b) => a.start - b.start ); // must be '-'  not '>'

    res.push(intervals.shift());

    while (intervals.length != 0) {
        let head = intervals.shift();
        if (res[res.length - 1].end >= head.start) {
            res[res.length - 1].end = Math.max(res[res.length - 1].end, head.end)
        } else {
            res.push(head);
        }
    }

    return res;
};

let po = IntervalUnit.createCollection([
    [2, 6],
    [1, 3],
    [8, 10],
    [15, 18]
]);
let p1 = IntervalUnit.createCollection([
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
console.log(IntervalUnit.toArray(merge(po)));
console.log(IntervalUnit.toArray(merge(p1)));