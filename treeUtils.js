import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";

export function min(currentNode) { 
    if (!currentNode.left) return currentNode.data;
    return min(currentNode.left)
    
}

export function max(currentNode) { 
    if(!currentNode) return null;
    if(!currentNode.right) return currentNode.data;
    return max(currentNode.right);
}

export function height(tree) { 
    console.log(`Tree that is being entered:  ${tree}` )
    if(!tree) return -1 


    if((max(tree.left) === max(tree.right))) return 0; 

    console.log(`LEFT TREE MAX ${max(tree.left)}`)
    console.log(`RIGHT TREE MAX ${max(tree.right)}`)



    return 1 + ((height(tree.left)) + height(tree.right)); 
    
    
}

export function depth(value, currentNode) { 
    if(!currentNode) return -1;
    
    let dist = -1 

    if((value == currentNode.data) ||
    
    (dist = depth(value, currentNode.left)) >= 0 ||
    (dist = depth(value, currentNode.right)) >= 0){
     return dist + 1 
    }
    
    return dist
}

