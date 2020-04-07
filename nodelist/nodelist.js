const Node = require('./node');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor() {
    this.lenght = 0;
    this.head = null;
  }

  add(el) {
    const node = new Node(el);
    if (this.head === null) {
      this.head = node;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = node;
    }

    this.lenght++;
  }
}

const test = new ListNode();
test.add('1');
test.add('2');
test.add('3');
test.add('4');
test.add('5');
test.add('6');

module.exports = ListNode;