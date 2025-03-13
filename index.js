import { Node } from "./node.js";
import { Tree } from "./binarayTreeClass.js";
import { treeOperations } from "./treeOperations.js";

const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2); 
const node3 = new Node(3); 
const node4 = new Node(4); 
const node5 = new Node(5); 
const node6 = new Node(6); 
const node7 = new Node(7); 
const node8 = new Node(8); 


const testArray = [node0, node1, node2, node3,
                   node4, node5, node6, node7
]

const testTree = new Tree(testArray); 

const treeOps = new treeOperations(testTree); 

treeOps.insert(node8); 

console.log(JSON.stringify(testTree.root));