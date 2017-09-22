import React from 'react';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from '../catalogpage/LogoHeaderComponent';
import IndividualItemComponent from './IndividualItemComponent';

export default function ProductPage({ clothingItem, addToCart }) {
  return (
    <ProductPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <IndividualItemComponent item={clothingItem} addToCart={addToCart} />
    </ProductPageLayout>
  );
}
