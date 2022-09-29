'use strict'

const { LL } = require('../LL');
const { Node } = require('../Node');
const { Stack } = require('../Stack');

describe('test Stack ', () => {
  it('Creating instance test', () => {
    const testStack = new Stack();
    expect(testStack).toBeInstanceOf(Stack);
    expect(testStack.top).toBeNull();
  });
  it('Test isEmpty function', () => {
    const testStack = new Stack();
    let x = testStack.isEmpty();
    expect(x).toEqual(1);
  });
  it('Test push function', () => {
    const testStack = new Stack();
    testStack.push('Hi');
    testStack.push('Hi1');
    expect(testStack.top.value).toEqual('Hi1');
  })
  it('Test pop function', () => {
    const testStack = new Stack();
    testStack.push('Hi');
    testStack.push('Hi1');
    testStack.pop();
    expect(testStack.top.value).toEqual('Hi');
  })
  it('Test peek function', () => {
    const testStack = new Stack();
    testStack.push('Hi');
    testStack.pop();
    let r = testStack.peek();
    expect(r).toEqual('Hi');
  })

});