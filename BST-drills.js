let BinarySearchTree = require('./BinarySearchTree');

function main() {
  let BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(BST);
  let ASCI = new BinarySearchTree();
  ASCI.insert('E');
  ASCI.insert('A');
  ASCI.insert('S');
  ASCI.insert('Y');
  ASCI.insert('Q');
  ASCI.insert('U');
  ASCI.insert('E');
  ASCI.insert('S');
  ASCI.insert('T');
  ASCI.insert('I');
  ASCI.insert('O');
  ASCI.insert('N');
  console.log(ASCI);
}

//main();

//#4

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// We believe that this function is returning the sum of the values in a given tree.
// Runtime - O(n)

function findHeight(t, depth = 1) {
  if (!t) {
    return depth;
  }
  let lDepth = findHeight(t.left, depth++);
  let rDepth = findHeight(t.right, depth++);
  if (lDepth > rDepth) {
    return lDepth++;
  } else return rDepth++;
}

function testFind() {
  let BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(findHeight(BST));
}
//testFind();

function isItABST(t) {
  if (!t) {
    return;
  }
  if (t.key > t && t.left) {
    return false;
  }
  if (t.right < t) {
    return false;
  }
  let left = isItABST(t.left);
  let right = isItABST(t.right);
  if (!left && !right) {
    return true;
  }
  return false;
}

function testIsItBST() {
  let BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(isItABST(BST));
  //   let t = BST.find(7);
  //   console.log(t);
  //   t.left = new BinarySearchTree(20, null, t);
  //   console.log(isItABST(BST), 'w/ test case');
}
testIsItBST();
