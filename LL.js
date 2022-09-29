'use strict'

const { Node } = require('./Node');


class LL {
	constructor() {
		this.head = null;
	}

	insert(value) {
		const node = new Node(value);
		if (this.head) {
			node.next = this.head;
			this.head = node;
		} else {
			this.head = node;
		}
	}
	append(value) {
		const node = new Node(value);
		if (this.head) {
			let currentNode = this.head;
			while (currentNode.next){
               currentNode = currentNode.next;
			}
			return currentNode.next=node;
		}else{
			return this.head=node;
		}
	}
	deleteLast() {
		if (this.head) {
		  let currentNode = this.head;
		  let r = 0
		  while (currentNode.next) {
			currentNode = currentNode.next;
			r++;
		  }
		  let header = this.head;
		  for (let j = 1; j < r; j++) {
			header = header.next;
		  }
		  header.next = null;
		  return header;
		} else {
		  return this.head;
		}
	  }

	  getLast() {
		let currentNode = this.head;
		while (currentNode.next) {
		  currentNode = currentNode.next;
		}
		return currentNode.value;
	  }
	  removeFirst() {
		if (this.head) {
		  this.head = this.head.next;
		  return (this.head);
		} else {
		  return (`LL is empty`);
		}
	  }

}
module.exports = { LL};