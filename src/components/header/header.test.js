import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtr } from '../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('', () => {
    const wrapper = findByTestAtr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render log', () => {
    const logo = findByTestAtr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
