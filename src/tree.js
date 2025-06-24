import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.array);
    };

    buildTree(array) {
        let sortedUniq = this.sortArr(this.removeDup(array))
        console.log(sortedUniq)
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