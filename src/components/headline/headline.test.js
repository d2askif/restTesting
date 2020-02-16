import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtr } from '../../../Utils';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  describe('Have header prop', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'header',
        desc: 'description'
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const headerComponent = findByTestAtr(component, 'HeadlineComponent');
      expect(headerComponent.length).toBe(1);
    });

    it('Should render header H1', () => {
      const header = findByTestAtr(component, 'header');
      expect(header.length).toBe(1);
    });

    it('Should render a description', () => {
      const desc = findByTestAtr(component, 'description');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO header prop', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('Should not render component', () => {
      const comp = findByTestAtr(component, 'headerComponent');
    });
  });
});
