/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == null || s.length < 2) return false;
    var m = { "(":")","{":"}","[":"]","]":"[","}":"{",")":"("};
    var a = s.split("");
    var temp = [];
    a.forEach(function(element) {
        if(m.hasOwnProperty(element)){
            if(temp.length == 0){
                temp.push(element);
            }else if(m[temp[temp.length-1]] == element){
                temp.pop();
            } else {
                temp.push(element);
            }
        }
    }, this);
    if(temp.length == 0){
        return true;
    } else {
        return false;
    }
};
console.log(isValid("([)"))