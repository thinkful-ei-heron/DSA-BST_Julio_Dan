/* eslint-disable strict */
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
    return true;
  }
  if (t.left && t.left.key > t.key) {
    return false;
  }
  if (t.right && t.right.key < t.key) {
    return false;
  }
  let left = isItABST(t.left);
  let right = isItABST(t.right);

  return left && right;
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
  let t = BST.find(7);
  t.left = new BinarySearchTree(20, null, t);
  console.log(isItABST(BST), 'w/ test case');
}
//testIsItBST();
//
function thirdLargest(t) {
  if (!t) {
    return t.parent.parent;
  }

  farRight = getMax(t);
  //check if farRight has multiple left -> return second left;
  if (farRight.left.left) return farRight.left.left;

  //if farRight only has one left -> return parent
  if (farRight.left) return farRight.parent;

  //check if parent has left -> return first left
  if (farRight.parent.left) return farRight.parent.left;

  //return parents parent;
  return farRight.parent.parent;
}

function getMax(t) {
  if (!t.right) return t;
  return getMax(t.right);
}

function testThirdLargest() {
  //test second case
  let BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(thirdLargest(BST));
}

// function isBalanced(t, depth = 1, leafDepth = []) {
//   if (!t) {
//     leafDepth.push(depth);
//     return depth;
//   }

//   let lDepth = isBalanced(t.left, depth++, leafDepth);
//   let rDepth = isBalanced(t.right, depth++, leafDepth);

//   return leafDepth;
// }

//testThirdLargest();

function isBalanced(t) {
  let lMaxDepth = findHeight(t.left);
  let rMaxDepth = findHeight(t.right);
  console.log('left: ' + lMaxDepth);
  console.log('right: ' + rMaxDepth);
  if (Math.abs(lMaxDepth - rMaxDepth) > 1) return false;
  return true;
}

function testIsBalanced() {
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
  console.log(isBalanced(ASCI));

  let BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  // let t = BST.find(7);
  // t.left = new BinarySearchTree(20, null, t);
  console.log(isBalanced(BST));
}

//testIsBalanced();

function compareBST(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1[0] !== arr2[0]) return false;
  let bstAsArr1 = [arr1[0]];
  let bstAsArr2 = [arr2[0]];

  for (let i = 1; i < arr1.length; i++) {
    addToTree(bstAsArr1, 0, arr1[i]);
    addToTree(bstAsArr2, 0, arr1[i]);
  }

  console.log(bstAsArr1);
  console.log(bstAsArr2);
}

function addToTree(t, root, val) {
  if (val < t[root]) {
    let lIndex = root * 2 + 1;
    if (!t[lIndex]) {
      t[lIndex] = val;
      return;
    }
    addToTree(t, lIndex, val);
  }
  if (val >= t[root]) {
    let rIndex = root * 2 + 2;
    if (!t[rIndex]) {
      t[rIndex] = val;
      return;
    }
    addToTree(t, rIndex, val);
  }
  return;
}

compareBST([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]);
