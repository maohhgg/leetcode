/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var start=0;
    var a = x.toString().split("");

    if(a[start] == '-'){
        start = 1;
    }
    var length = a.length - 1;
    while(start <= length){
        var num = a[start];
        a.splice(start,1,a[length]);
        a.splice(length,1,num);
        start++;length--;
    }
    var a = parseInt(a.join(""))
    if(-2147483648 > a || a > 2147483648 ){
        return parseInt(0);
    } else {
        return a;
    }

};
console.log(reverse(-1534236469));