import React from 'react';
import { shallow, mount } from 'enzyme';
import { Image } from 'semantic-ui-react';
import ClothingItemComponent from '../ClothingItemComponent';

const addToCart = jest.fn();

const item = {
  name: 'Black Tee',
  price: 24.99,
  imageUrl: '//via.placeholder.com/264x264'
};

describe('ClothingItemComponent shallowWrapper test', () => {
  const shallowWrapper = shallow(
    <ClothingItemComponent addToCart={addToCart} item={item} />
  );

  it('should console.log the shallowWrapper object', () => {
    console.log(shallowWrapper.debug());
  });

  it('Should have an add to cart button', () => {
    expect(shallowWrapper.find('.add-to-cart-button')).toHaveLength(1);
  });

  // it('Should have an Image element', () => {
  //   expect(shallowWrapper.contains(<Image as="img" alt={item.name} />)).toBe(
  //     true
  //   );
  // });

  it('Should fire addToCart when button is clicked', () => {
    shallowWrapper.find('.add-to-cart-button').simulate('click', {
      preventDefault: () => {}
    });

    expect(addToCart).toBeCalled();
  });

  it('Should pass snapshot test', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});

// describe('ClothingItemComponent full render tests', () => {
//   const fullWrapper = mount(
//     <ClothingItemComponent addToCart={addToCart} item={item} />
//   );
//
//   it('Should test item prop', () => {
//     expect(fullWrapper.props().item).toEqual(item);
//   });
// });
