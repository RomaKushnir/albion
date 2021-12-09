import WrongRoute from '.';
import { shallow } from 'enzyme';

describe('render wrong route component', () => {
  it('should have correct title', () => {
    const wrap = shallow(<WrongRoute />);
    expect(wrap.find('h1').text()).toBe('This page does not exist');
  });
});
