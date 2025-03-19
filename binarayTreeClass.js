import { Node } from "./node.js";
import { inOrder } from "./treeTraversal.js";
import { insertNode } from "./treeOperations.js";

export class Tree { 
    constructor(array) { 
        this.array = array;
        this.root = this.buildTree(this.array, 0, this.array.length-1);
    }

    buildTree(array, start, end) { 
        if(start > end) return null; 
        
        let mid = Math.floor((start + end) / 2); 
        let root = new Node(array[mid]); 
        
        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root
    }

    reBalance() { 
        let nodes = [];
        
        inOrder(this.root, nodes); 
        
        this.root = this.buildTree(nodes, 0, nodes.length - 1);
    }

    insert(value) { 
        this.root = insertNode(value, this.root)
    }
}