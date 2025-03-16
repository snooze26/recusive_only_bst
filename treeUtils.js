import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";

export function min(currentNode) { 
    if (!currentNode.left) return currentNode.data;
    return min(currentNode.left)
    
}

export function max(currentNode) { 
    if(!currentNode.right) return currentNode.data;
    return max(currentNode.right);
}
