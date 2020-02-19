import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtr, checkProps } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking propTypes', () => {
    it('Should Not throw warning', () => {
      const expectedProps = {
        title: ' List title',
        desc: 'description'
      };
      const propErrors = checkProps(ListItem, expectedProps);
      expect(propErrors).toBeUndefined();
    });
  });

  describe('Component rendering', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: ' List title',
        desc: 'description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render without error component', () => {
      const component = findByTestAtr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const tittle = findByTestAtr(wrapper, 'componentTitle');
      expect(tittle.length).toBe(1);
    });

    it('Should render a description', () => {
      const desc = findByTestAtr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Component Not rendered', () => {
    let wrapper;
    beforeEach(() => {
      const props = {};
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should Not render component if no title provided', () => {
      const component = findByTestAtr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
