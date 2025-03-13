export class Tree { 
    constructor(array) { 
        this.array = array;
        // this.root = //buildTree function
    }

    buildTree(array, start, end) { 
        if(start > end) return null; 

        let mid = Math.floor((start + end) / 2); 
        let root = array[mid]; 

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);
    }
}