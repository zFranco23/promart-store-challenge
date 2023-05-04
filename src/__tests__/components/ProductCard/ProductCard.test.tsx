import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { shallow } from 'enzyme';
import { mockProducts } from '../../../__mocks__/fileMock';
// import { ShoppingCartItem } from '../../../entities';

import ProductCard from '../../../common/components/ProductCard/ProductCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const mockStore = configureStore();

describe('Product Card tests', () => {
  let store: ReturnType<typeof mockStore>;
  let wrapper: React.ReactElement;
  beforeEach(() => {
    store = mockStore({
      currency: { code: 'Sol Peruano', symbol: 'S/.' },
      shoppingCart: {
        items: [mockProducts[0]],
      },
    });
    wrapper = (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<ProductCard product={mockProducts[0]} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('Product card render correctly', () => {
    expect(shallow(wrapper)).toMatchSnapshot();
  });

  // test('Should add product to cart ', () => {
  //   const component = shallow(wrapper);
  //   const productCard = component.find('ProductCard');

  //   console.log(component.html());

  //   const addButton = productCard.find('button');
  //   console.log(addButton);
  //   addButton.simulate('click');
  //   // expect(component.instance).toBe(1);
  // });
});
