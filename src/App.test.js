import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './components/productlist';
import App from './App'


const productList = [
  { id: 1, name: 'Oranges', price: 1000 },
  { id: 2, name: 'Apples', price: 50.25 },
  { id: 3, name: 'Bananas', price: 20.99 },
  { id: 4, name: 'Kiwis', price: 10000 }
];


it('renders the name of my site', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('h1').first();
  expect(header.contains("My E-Commerce Site")).toBe(true);
});

it('contains a product list', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ProductList).length).toBe(1)
});

it('check correct number of items', () => {
  const wrapper = shallow(<ProductList products={productList} />)
  expect(wrapper.find('li').length).toEqual(4);
});

// it('check price for first item', () => {
//   const wrapper = shallow(<ProductList products={productList} />)
//   const firstproduct = wrapper.find('li').first()
//   expect(firstproduct.text()).toMatch(/1000/);
// });

// it('check price format for the 3rd item', () => {
//   const wrapper = shallow(<ProductList products={productList} />)
//   const firstproduct = wrapper.find('li').at(0)
//   expect(firstproduct.text()).toMatch(/^\$\s(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/);
// }); 

it('check price format for all nodes', () => {
  const wrapper = shallow(<ProductList products={productList} />)
  wrapper.find('li').forEach(node => expect(node.text()).toMatch(/^\$\s(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/))
});

it('check class name for the first node', () => {
  const wrapper = shallow(<ProductList products={productList} />);
  const firstproduct = wrapper.find('li').first();
  expect(firstproduct.hasClass('product-item')).toBe(true);
})

it('check class name for all nodes', () => {
  const wrapper = shallow(<ProductList products={productList} />);
  wrapper.find('li').forEach(node => expect(node.hasClass('product-item')).toBe(true))
})

it('check the presence of buttons', () => {
  const wrapper = shallow(<ProductList products={productList} />);
  expect(wrapper.find('Button').length).toBe(4)
});

it('has correct prompt on button', () => {
  const wrapper = shallow(<ProductList products={productList} />)
  wrapper.find('button').forEach(node => expect(node.text()).toBe("Add to Cart"))
});

const testingFn = jest.fn();

it ('buttons have correct funtionality', () => {
  const  wrapper = shallow(
    <ProductList
      onProductBuy={testingFn}
      products={productList} 
    />
    );
  const firstProduct = wrapper.find('Button').first();
  firstProduct.simulate('click');
  expect(testingFn.mock.calls.length).toEqual(1);
})

it('matches our snapshot', () => {
  const wrapper = shallow(
    <ProductList
      onProductBuy={testingFn}
      products={productList}
    />
  );
  expect(wrapper).toMatchSnapshot();
});