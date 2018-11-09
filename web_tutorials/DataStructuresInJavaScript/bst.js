/* Binary Search Tree

This case code is originally from https://www.youtube.com/watch?v=5cU1ILGy6dM
I just made my own little tweaks
Original Source: https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011


/////////////////////////////////////////////////////////////////////////////
In the binary search tree, in this particular example, we are working with unique keys, that cannot be repeated.
*/

class Node { // Holds the data = represents each node in the tree
  constructor(data, left = null, right = null) {
    this.data = data; // root Node
    this.left = left; // the left Node
    this.right = right; // the right Node
    /*
        data(root)
       /    \
    left    right
    */
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root; // store the root in a variable
    if (node === null) { // checking if the tree is empty
      this.root = new Node(data);
      return;
    } else { // if the tree is not empty
      ///////// This block is a recursive function /////////////////
      const searchTree = function(node) { //create a new variable searchTree, which is going to be equal a function, and in this case, this function will be in charge of putting the node in its proper place
        if (data < node.data) { // if data is less than the current root
          if (node.left === null) { // if left node is null
            node.left = new Node(data);
            return;
          } else if (node.left !== null) { // if left node is not null
            return searchTree(node.left); //run this same function, on the left Node
          }
        } else if (data > node.data) { // if data is greater than the root
          if (node.right === null) { // if the right node is empty
            node.right = new Node(data);
            return;
          } else if (node.right !== null) { //if the right node is not empty
            return searchTree(node.right);
          }
        } else { // if the current value and the root value are the same
          console.log("The value already exist in the BST");
          return null;
        }
      };
      ///////// this is where the block above finishes /////////////////////
      // Since a function cannot be initiated unless the user calls that function, we have to call it our selves with the following line:
      return searchTree(node);
    } //this ends the 'else' statement corresponding to the tree not being empty
  } //end of add data
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
      let result = [];
      let Q = [];
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
