/*

Nodes: JavaScript
Node Methods: Set Next Node

Currently when a node is created, the next node is initially set to null, and we do not have a formal way to change it. However, we want to allow the next node to be updated so it can be traversed and used in more complex data structures. For this, we will use a setter to modify this.next node property.

Implement the .setNextNode() method in the Node class.

It should take node as an argument and update the next node property appropriately.
Checkpoint 2 Passed
2.

To verify that our .setNextNode() performs as intended, let’s call the method on our Node instance. Create a second Node instance and set it to secondNode. Link it to the firstNode by passing secondNode to the call to setNextNode.

Now let’s print out firstNode so we can see it in its entirety using console.log(). We should see the second node instance set to the next node property instead of the default null value.


*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode (next) {
    this.next = next;
  }

  
}

const firstNode = new Node('I am an instance of a Node!');

module.exports = Node;

let secondNode = new Node('Seconddddd');

firstNode.setNextNode(secondNode);

console.log(firstNode)

// Nodes: JavaScript
// Review: Nodes in JavaScript

// Let’s see all of our Node class methods together in action!

// Imagine we are working at an ice cream shop that sells three flavors: strawberry, vanilla, and coconut. The signature sundae is made of these three flavors, but our new hires have a hard time remembering the order.

// To help them remember, our JavaScript nodes may do just the trick. Let’s get started…
// Instructions
// 1.

// Outside of Node, instantiate three more nodes.

//     The first will represent our strawberry ice cream with the name, 'Berry Tasty'. Assign it to the variable, strawberryNode
//     The second will represent our vanilla ice cream with the value, 'Vanilla'. Assign it to the variable, vanillaNode
//     The third will represent our coconut ice cream with the value, 'Coconuts for Coconut'. Assign it to the variable, coconutNode

// Checkpoint 2 Passed
// 2.

// Now let’s put these ice cream nodes in order. vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.

// Below the newly created nodes, use your .setNextNode() method so that:

//     strawberryNode is the next node of vanillaNode
//     coconutNode the next node of strawberryNode

// Checkpoint 3 Passed
// 3.

// Let’s walk through our ice cream nodes to make sure that they are linked in the correct order. Create a new currentNode and set it vanillaNode. We will use currentNode to iterate through the nodes, so declare it using let. Create a while loop that will only iterate when the currentNode is not null.

// Inside the while loop, log out the currentNode’s data, and update currentNode to the next node.

// We should see the ice cream flavors in order of vanilla, strawberry, and coconut in the terminal.

// When your code is passing, take a moment to consider:

//     What other ways do you think nodes could be helpful for keeping track of and storing information?
//     What could happen if we added another link to the Node class?
//     What if we created an instance of a Node with another Node instance?

console.log('\n') 

let strawberryNode = new Node('Berry Tasty');

let vanillaNode = new Node('Vanilla');

let coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);

strawberryNode.setNextNode(coconutNode);

module.exports = Node;

let currentNode = vanillaNode;

while (currentNode != null){
  console.log(currentNode.data);
  currentNode = currentNode.next;
}


