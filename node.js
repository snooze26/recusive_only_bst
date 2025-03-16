export class Node { 
    constructor(data) {
        this.data = typeof data === "object" ? data.data : data; 
        this.left = null; 
        this.right = null; 
      }
}