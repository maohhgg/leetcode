/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a == "" && b == "") return "";
    var a = a.split("");
    var b = b.split("");
    var l = Math.abs(b.length - a.length);
    var t = [],m=[];
    if(a.length > b.length){
        t = a;m = b;
    } else {
        t = b;m = a;
    }
    for(var i = 0; i < m.length; i++,l++){
        t[l] = parseInt(m[i]) + parseInt(t[l]);
    }
    for (var i = t.length-1; i >= 0; i--) {
        if(t[i] >= 2){
            t[i] %= 2;
            if(i == 0){
                t.unshift(1) 
            } else {
                t[i-1]++;
            }
        }
    }
    return t.join("").toString();
};
console.log(addBinary("101","111"))