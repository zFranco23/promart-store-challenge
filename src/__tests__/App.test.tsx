import { shallow } from 'enzyme';
import App from '../App';

import toJson from 'enzyme-to-json';

describe('Test in App.tsx', () => {
  test('App should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
