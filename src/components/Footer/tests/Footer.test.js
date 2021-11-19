import { shallow } from 'enzyme';
import Footer from '../Footer.js';

describe('Footer', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapShot();
  });
});
