import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { shallow } from 'enzyme';
import { mockProducts } from '../../../__mocks__/fileMock';
// import { ShoppingCartItem } from '../../../entities';

import ShoppingCart from '../pages/ShoppingCart';
import { RootState } from '../..';

const mockStore = configureStore();

describe('Shopping cart module test', () => {
  let store: ReturnType<typeof mockStore>;
  let wrapper: React.ReactElement;
  beforeEach(() => {
    store = mockStore({
      checkout: {},
      products: {},
      auth: {},
      shoppingCart: {
        items: [mockProducts[0]],
      },
    });
    wrapper = (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  });

  test('Shopping cart page should render correctly', () => {
    expect(shallow(wrapper)).toMatchSnapshot();
  });

  test('Should add item to cart by ', () => {
    const {
      shoppingCart: { items },
    } = store.getState() as RootState;

    expect(shallow(wrapper)).toMatchSnapshot();
    expect(items.length).toBe(1);
  });
});
