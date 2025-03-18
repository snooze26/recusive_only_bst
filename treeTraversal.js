export function levelOrder(root, level, result) { 
    if(!root) return null; 

    if (result.length <= level) { 
        result.push([]);
    }

    result[level].push(root.data); 

    levelOrder(root.left, level + 1, result); 
    levelOrder(root.right, level + 1, result); 

    return result
}


export function inOrder(root) {
    if(!root) return;

    inOrder(root.left);    
    console.log(root.data);
    inOrder(root.right); 

 }

 export function preOrder(root) { 
    if(!root) return; 

    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right); 

 }

 export function postOrder(root) { 
    if(!root) return; 

    postOrder(root.left);
    postOrder(root.right); 
    console.log(root.data); 
 }