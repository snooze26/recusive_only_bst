import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";
import {deleteNode, find} from "./treeOperations.js";
import {depth, height } from "./treeUtils.js";
import { levelOrder } from "./treeTraversal.js";

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2); 
const node3 = new Node(3); 
const node4 = new Node(4); 
const node5 = new Node(5); 
const node6 = new Node(6); 
const node7 = new Node(7); 
const node8 = new Node(8); 
const node9 = new Node(9); 



const testArray = [node0, node1, node2, node3,
                   node4, node5, node6, node7
]

let testTree = new Tree(testArray); 


// console.log("BEFORE DELETE**** " , testTree.root.right)

// testTree.root = deleteNode(node0.data, testTree.root);

// const newRoot = deleteNode(node7.data, testTree.root);
// if (newRoot !== testTree.root) {
//     console.log("Updating root of the tree");
//     testTree.root = newRoot;
// }
let level = 0;
let result = []; 

const treeDepth = levelOrder(testTree.root, level, result);


console.log(treeDepth);

// const minOfTree = treeMin.max(testTree.root); 

// console.log("HERE IS Max " , minOfTree.data)
// console.log(treeOps)

// console.log("AFTER DELETE*****" , testTree.root)
// console.log(JSON.stringify(testTree));
// console.log("TREE STRUCTURE:", JSON.stringify(testTree, null, 2));
