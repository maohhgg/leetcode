import {IntervalUnit, Interval} from "../../common/interval";
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
let insert = (intervals: Interval[], newInterval: Interval): Interval[] => {
    intervals.push(newInterval);
    let res: Interval[] = [];
    if (intervals.length == 0) return res;

    intervals.sort((a, b) => a.start - b.start); // must be '-'  not '>'

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

let p1 = IntervalUnit.createCollection([
    [1, 2], [3, 5], [6, 7], [8, 10], [12, 16]
]);

console.log(IntervalUnit.toArray(insert(p1, IntervalUnit.createInterval([4, 9]))));