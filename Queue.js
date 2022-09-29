'use strict'

const { LL } = require('./LL');
const { Node } = require('./Node');

class Queue {
  constructor() {
    this.storage = new LL();
    this.top = null
  }
  enqueue(value) {
    this.storage.append(value);
    this.top = this.storage.head;
  }
  dequeue() {
    this.top = this.storage.removeFirst();
  }
  peek() {
    if (this.storage.head) {
      return this.top.value;
    } else {
      return (` Queue is empty!!`);
    }
  }
  isEmpty() {
    if (this.storage.head) {
      return 0;
    } else {
      return 1;
    }
  }
}



module.exports = { Queue };