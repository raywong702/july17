import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { Deal } from './Deal';
import { render } from 'enzyme';

describe('Deal', () => {
  it('works', () => {
    const wrapper = render(<Deal />);

    expect(wrapper).toMatchSnapshot();
  });
});
