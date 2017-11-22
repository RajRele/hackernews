class Node{
    constructor(d){
        this.data = d;
        this.neighbors=[];
    }
}

let clone_rec = (root, nodes_completed) => {
    if(!root){
        return null;
    }

    let pNew = new Node(root.data);
    nodes_completed[root.data] = pNew;

    for(let p in root.neighbors){
        let x = nodes_completed[root.neighbors[p].data];
        if(!x){
            pnew.neighbors.push(clone_rec(root.neighbors[p], nodes_completed));
        }else{
            pnew.neighbors.push(x);
        }
    }
    return pNew;
}

let clone = (root) => {
    let nodes_completed = {};
    return clone_rec(root, nodes_completed);
}