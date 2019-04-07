interface interval {
    start: any;
    end: any;
}

class Interval implements interval {
    start: any; end: any;
    constructor(start: any, end: any) {
        this.start = start;
        this.end = end
    }
}

class IntervalUnit {

    static createInterval = (array: any[]) => {
        if (array.length < 2) return null;
        return new Interval(array.shift(), array.shift())
    };

    static createCollection = (array: Array<any[]>) => {
        let collection: Array<interval> = [];

        array.forEach(e => collection.push(IntervalUnit.createInterval(e)));
        return collection;
    };

    static toArray = (collection: Array<interval>) => {
        let array:Array<any[]> = [];
        collection.forEach(e => array.push([e.start, e.end]));
        return array;
    }
}


export { Interval, IntervalUnit }

