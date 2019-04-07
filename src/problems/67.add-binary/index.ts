/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a:string, b:string):string => {
    let i:number = a.length - 1,
        j:number = b.length - 1,
        carry:number = 0,
        res:string = '';

    while(i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        res = (carry % 2).toString() + res;
        carry >>= 1;
    }
    return res;
};

console.log(addBinary('1', '111'));


/*
let addBinary = (a: string, b: string): string => {
    if (a == '' && b == '') return '';
    let aa: string[] = a.split('');
    let bb: string[] = b.split('');

    let result: string[] = [];

    while (aa.length > 0 && bb.length > 0){
        result.unshift((parseInt(aa.pop()) + parseInt(bb.pop())).toString());
    }

    if (aa.length > 0) result = [...aa, ...result];
    if (bb.length > 0) result = [...bb, ...result];

    let carry = 0;
    console.log(result);
    for (let i = result.length - 1; i >= 0; i--) {
        let t = parseInt(result[i]) + carry;

        if (t > 1) {
            result[i] = (t % 2).toString();
            carry = 1;
        } else {
            carry = 0;
            result[i] = t.toString();
        }
    }

    if (carry == 1) result.unshift('1');
    return result.join('');
};
*/
