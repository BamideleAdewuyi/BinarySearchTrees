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

    insertValue(root, value) {
        if (root === null) {
            return new Node(value, null, null)
        };

        if (root.data === value) {
            return root;
        };

        if (value < root.data) {
            root.left = this.insertValue(root.left, value)
        } else if (value > root.data) {
            root.right = this.insertValue(root.right, value)
        };

        return root;
    };

    deleteItem(root, value) {
        if (root === null) {
            return root;
        }

        if (root.data > value) {
            root.left = this.deleteItem(root.left, value);
        } else if (root.data < value) {
            root.right = this.deleteItem(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            }

            if (root.right === null) {
                return root.left;
            }

            let succ = root.right;
            while (succ!== null && succ.left !== null) {
                succ = succ.left
            };

            root.data = succ.data;
            root.right = this.deleteItem(root.right, succ.data);

        }
        return root;
    };

    find(value, root) {
        if (root === null || root.data === value) return root;

        if (root.data < value) return this.find(value, root.right);

        return this.find(value, root.left);
    };

    levelOrder(callback, root) {
        if (typeof(callback) != "function") {
            throw new Error("You must pass a callback function.");
        }

        if (root === null) return;

        let q = [root];

        while (q.length > 0) {
            let current = q[0];
            callback(current.data);
            if (current.left != null) q.push(current.left);
            if (current.right != null) q.push(current.right);
            q.shift(); 
        }
    };

    inOrder(callback, root) {
        if (typeof(callback) != "function") {
            throw new Error("You must pass a callback function.");
        };
    };

    preOrder(callback, root) {
        if (typeof(callback) != "function") {
            throw new Error("You must pass a callback function.");
        }

        if (root === null) return;
        callback(root.data);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
    };

    postOrder(callback, root) {
        if (typeof(callback) != "function") {
            throw new Error("You must pass a callback function.");
        };
    };
}

export default Tree;