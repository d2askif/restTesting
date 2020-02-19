import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtr } from '../../../Utils';
import SharedButton from './index';

describe('Shared button component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw waring', () => {
      const expectedProps = {
        buttonText: 'button text',
        emit: () => {}
      };
      const propErrors = checkProps(SharedButton, expectedProps);
      expect(propErrors).toBeUndefined();
    });
  });

  describe('Should render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'text'
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render button', () => {
      const button = findByTestAtr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
