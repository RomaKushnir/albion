import ReloadButton from './ReloadButton';
import { shallow } from 'enzyme';

describe('render reload button', () => {
  const wrap = shallow(<ReloadButton />);

  wrap.setProps({ text: 'Reload', onUpdate: () => {} });

  it('should reload button has the text', () => {
    expect(wrap.find('Button').text()).toBe('Reload');
  });

  it('check is clicked', () => {
    wrap.find('Button').simulate('click');
    // should verify if the click is performed properly
    // expect()
  });
});
