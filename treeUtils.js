import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";

export class treeUtils{
    constructor(tree) { 
        this.tree = tree; 
    }

    min(currentNode) { 
        if (!currentNode.left) return currentNode.data;
        return this.min(currentNode.left)
    }
    
    max(currentNode) { 
        if(!currentNode.right) return currentNode.data;
        return this.max(currentNode.right);
    }
}
