import React from 'react';
import CartPageLayout from './CartPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from '../catalogpage/LogoHeaderComponent';
import ProductTableComponent from './ProductTableComponent';
import PriceTableComponent from './PriceTableComponent';

export default function CartPage({ cartItems }) {
  return (
    <CartPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <div className="full-table">
        <ProductTableComponent items={cartItems} />
        <PriceTableComponent items={cartItems} />
      </div>
    </CartPageLayout>
  );
}
