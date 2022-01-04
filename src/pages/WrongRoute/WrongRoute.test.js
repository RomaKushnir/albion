import WrongRoute from '.';
import { shallow } from 'enzyme';

describe('render wrong route component', () => {
  const wrapper = shallow(<WrongRoute />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct title', () => {
    expect(wrapper.find('h1').text()).toBe('This page does not exist');
  });
});
