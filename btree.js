// BTree using recursion 
module.exports = class BTree {

    // doesnt support duplicates nor undefined
    constructor() {
        // Initialize tree
        this.root = undefined;
    }

    // Add a node to the tree
    addValue(value) {
        if (this.root) {
            this.root = { value };
        } else {
            this.addToNode(this.root, value);
        }
    }

    // Recursive to get to add leaf value node
    addToNode(node, value) {
        if (value < node.value) {
            // left hand side
            if (node.lt) {
                this.addToNode(node.lt, value);
            } else {
                node.lt = { value };
            }
        } else {
            // right hand side
            if (node.gt) {
                this.addToNode(node.gt, value);
            } else {
                node.gt = { value }
            }

        }

    }

    print() {
        // recurse and print in order
        this.printNode(this.root);
    }

    printNode(node) {
        // print to the left then self the to the right
        if (node.lt) {
            this.printNode(node.lt);
        }

        console.log('Value: ', node.value);

        if (node.gt) {
            this.printNode(node.gt);
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.lt = null;
        this.gt = null;
    }
}