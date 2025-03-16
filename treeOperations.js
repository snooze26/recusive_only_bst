import { Node } from "./node.js";
import { min } from "./treeUtils.js";

    export function insertNode(value, currentNode) { 
        if(!currentNode) return new Node(value); 
        if(value === currentNode.data) return currentNode; 
        
        if(value < currentNode.data){
            currentNode.left = insertNode(value, currentNode.left);
        }else{ 
            currentNode.right = insertNode(value, currentNode.right);
        }
        return currentNode;
        }

    export function deleteNode(value, currentNode) {
         if(!currentNode) return null; 

         console.log(`Checkiong node: ${currentNode.data} against value ${value}`);
         

         if(value < currentNode.data){
            console.log("going left")
            currentNode.left = deleteNode(value, currentNode.left);
         }else if(value > currentNode.data){
            console.log("going right");
            
            currentNode.right = deleteNode(value, currentNode.right); 
         }else { 
            console.log(`Deleting node ${currentNode.data}`)
            if(!currentNode.left) return currentNode.right; 
            if(!currentNode.right) return currentNode.left; 

            let minValue = min(currentNode.right)
            console.log(`Replacing with min value: ${minValue}`);
            
            currentNode.data = minValue;
            currentNode.right = deleteNode(minValue, currentNode.right); 
         }
         return currentNode;
    }

    export function find(value, currentNode) { 
        console.log(`Comparing value: ${value} to the currentNode data: ${currentNode.data}`);

        if(!currentNode) return null; 

        if(value === currentNode.data) {
            console.log(`Here is your node ${currentNode}`);
            return currentNode;
        }

        if(value < currentNode.data) {
            console.log("going left");
            return find(value, currentNode.left);
        }

        if(value > currentNode.data) { 
            console.log("going right");
            return find(value, currentNode.right);
        }
        // return currentNode
    }
