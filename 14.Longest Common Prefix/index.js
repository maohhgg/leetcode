/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return '';
    }
    var temp = strs[0];
    strs.forEach(function(element) {
        if(element.length <= temp.length){
            temp = element;
        }
    }, this);
    while(len != 0 && temp != ""){
        var len = strs.length;
        strs.forEach(function(element) {
            if(element.indexOf(temp) == 0){
                len=len-1;
            }
        }, this);
        if(len != 0 && temp!=""){
            if(temp.length == 1){
                temp = "";
                len = 0;
            } else {
                temp = temp.substr(0,temp.length-1);
            }
        }
    }
    return temp;
};
console.log(longestCommonPrefix(['ca','a']));