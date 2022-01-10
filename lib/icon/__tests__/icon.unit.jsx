import React from "react";
import renderer from "react-test-renderer";
import Icon from '../Icon'
import {mount} from "enzyme";
describe('Icon组件测试', () => {
  it('should render success', function () {
    const json = renderer.create(<Icon name={'alipay'} />).toJSON()
    expect(json).toMatchSnapshot()
  });

  it('should click success', function () {
    const fn = jest.fn()
    const component = mount(<Icon name={'alipay'} onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  });
})
