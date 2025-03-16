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

export function height(tree){ 
    console.log(`Tree that is being entered:  ${tree}` )
    if(!tree) return -1 


    if((max(tree.left) === max(tree.right))) return 0; 

    console.log(`LEFT TREE MAX ${max(tree.left)}`)
    console.log(`RIGHT TREE MAX ${max(tree.right)}`)



    return 1 + ((height(tree.left)) + height(tree.right)); 
    
    
}

//WORKING ON HEIGHT FUNCTION LEFT OFF ON AN ERROR CALLING A NULL RIGHT NODE AT THE END OF THE RUN AND GETTING A INCORRECT VALUE FOR HEIGHT