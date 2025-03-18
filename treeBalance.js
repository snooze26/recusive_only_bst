import { height } from "./treeUtils.js";
export function isBalanced(currentNode) { 
    if(!currentNode) return true; 

    let leftHeight = height(currentNode.left); 
    console.log("Left height " , leftHeight);
    let rightHeight = height(currentNode.right); 
    console.log("right height" , rightHeight)

    if (Math.abs(leftHeight - rightHeight) > 1) {         
        return false;
    }
    return isBalanced(currentNode.left) && isBalanced(currentNode.right);
    

}