'use strict'

const { LL} = require('../LL');
const { Node } = require('../Node');
const { Queue } = require('../Queue');

describe('test Stack ', () => {
  it('Creating instance test', () => {
    const testQueue = new Queue();
    expect(testQueue).toBeInstanceOf(Queue);
    expect(testQueue.top).toBeNull();
  });
  it('Test isEmpty function', () => {
    const testQueue = new Queue();
    let x = testQueue.isEmpty();
    expect(x).toEqual(1);
  });
  it('Test  enqueue function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('robi');
    testQueue.enqueue('robi1');
    testQueue.enqueue('robi2');
    expect(testQueue.top.value).toEqual('robi');
  });
  it('Test dequeue function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('robi');
    testQueue.enqueue('robi1');
    testQueue.enqueue('robi2');
    testQueue.dequeue();
    expect(testQueue.top.value).toEqual('robi1');
  });
  it('Test peek function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('robi');
    testQueue.enqueue('robi1');
    testQueue.enqueue('robi2');
    testQueue.dequeue();
    let x = testQueue.peek();
    expect(x).toEqual('robi1');
  });
  
});