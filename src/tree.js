import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.array = this.sortArr(this.removeDup(array));
        this.root = this.buildTree(this.array, 0, this.array.length - 1);
    };

    buildTree(array, start, end) {
        if (start > end) return null;
        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid], this.buildTree(array, start, mid - 1), this.buildTree(array, mid + 1, end))
        return root;
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

    insertValue(value) {

    };

    deleteItem(value) {

    };
}

export default Tree;