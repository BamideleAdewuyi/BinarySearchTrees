import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.array = this.sortArr(this.removeDup(array));
        this.root = this.buildTree(this.array);
    };

    buildTree(array) {
        let start = 0;
        let end = array.length - 1;
        if (start > end) return null;
        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid], this.buildTree(array.slice(start, mid)), this.buildTree(array.slice(mid+1, end+1)))
        return root
    };

    removeDup(array) {
        return array.filter(function(elem, ind) {
            return array.indexOf(elem) == ind;
        })
    };

    sortArr(array) {
        return array.sort(function(a, b) {
            return a - b;
        })
    };
}

export default Tree;