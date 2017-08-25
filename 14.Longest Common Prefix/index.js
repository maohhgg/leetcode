/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix_d = function(strs) {
    if (strs == null || strs.length == 0) return "";
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
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return "";
    for (var i = 0; i < strs[0].length ; i++){
        var c = strs[0].charAt(i);
        for (var j = 1; j < strs.length; j ++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substr(0, i);             
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(['ab','abc']));