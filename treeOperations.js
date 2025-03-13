import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";

export class treeOperations{
    constructor(tree) { 
        this.tree = tree;
    }

    insert(value) { 
        this.tree.root = this.insertNode(value, this.tree.root)
    }
    insertNode(value, currentNode) { 
        if(!currentNode) return new Node(value); 
        if(value === currentNode.data) return currentNode; 
        
        if(value < currentNode.data){
            currentNode.left = this.insertNode(value, currentNode.left);
        }else{ 
            currentNode.right = this.insertNode(value, currentNode.right);
        }
        return currentNode;
        }

}