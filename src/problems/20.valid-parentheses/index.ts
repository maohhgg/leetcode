/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = (s: string): boolean => {
    if (s == null || s.length < 2) return false;
    let m = {'(': ')', '{': '}', '[': ']', ']': '[', '}': '{', ')': '('};
    let a = s.split('');
    let t:string[] = [];

    a.forEach((element) => {
        if (m.hasOwnProperty(element)) {
            if      (        t.length == 0        ) t.push(element);
            else if (m[t[t.length - 1]] == element) t.pop();
            else                                    t.push(element);
        }
    });

    return t.length == 0;
};
console.log(isValid('([])'));