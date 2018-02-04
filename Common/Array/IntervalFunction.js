const it = require("./Interval.js");

this.createInterval = function (array) {
    let ob = new it.Interval();
    ob.start = array[0];
    ob.end = array[1];
    return ob;
}

this.createCollection  = function (array) {
    let ce = [];
    array.forEach(e => {
        ce.push(this.createInterval(e))
    });
    return ce;
}

this.toArray = function (collection) {
    let array = [];
    collection.forEach(e => {
        array.push([e.start,e.end])
    });
    return array;
}

