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
