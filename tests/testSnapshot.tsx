import React from 'react';
import { render, mount } from 'enzyme';

const testSnapshot = (Component, props?: { staticRendered?: boolean; [key: string]: any }) => {
  const { staticRendered, ...others } = props || {};
  describe(`snapshot test`, () => {
    //
    test(`快照匹配`, () => {
      const wrapper = staticRendered === true ? render(<Component {...others} />) : mount(<Component {...others} />).render();
      expect(wrapper.toString()).toMatchSnapshot();
    });
  });
};

export default testSnapshot;
