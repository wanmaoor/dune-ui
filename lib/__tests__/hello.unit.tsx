// test('hello world', ()=>{
//   expect(1).toEqual(2)
// })
import React from 'react';
import renderer from 'react-test-renderer'
import Button from "../Button";
function add(a: number, b: number){ return a + b}
describe('我的测试', ()=>{
  it('should 1 + 2 = 3', function () {
    expect(add(1,2)).toEqual(3)
  });
})

describe('button test', ()=>{
  it('should be a div tag', function () {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  });
})
