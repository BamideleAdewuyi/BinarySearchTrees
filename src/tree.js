import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.array);
    }

    buildTree(array) {
        let uniq = this.removeDup(array)
        console.log(uniq)
    }

    removeDup(array) {
        const uniq = array.filter(function(elem, ind) {
            return array.indexOf(elem) == ind;
        })
        return uniq;
    }
}

export default Tree;