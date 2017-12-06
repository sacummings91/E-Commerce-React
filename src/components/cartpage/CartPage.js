import React from 'react';
import CartPageLayout from './CartPageLayout';
import NavbarComponent from './../NavbarComponent';
import ProductTableComponent from './ProductTableComponent';
import PriceTableComponent from './PriceTableComponent';

export default function CartPage({
  cartItems,
  authenticatedUser,
  removeFromCart = () => {},
  confirmOrder = () => {},
  logout = () => {}
}) {
  return (
    <CartPageLayout>
      <NavbarComponent
        onLogout={logout}
        cartItems={cartItems}
        authenticatedUser={authenticatedUser}
      />
      <div className="full-table">
        <ProductTableComponent
          items={cartItems}
          removeFromCart={removeFromCart}
        />
        <PriceTableComponent
          authenticatedUser={authenticatedUser}
          items={cartItems}
          confirmOrder={confirmOrder}
        />
      </div>
    </CartPageLayout>
  );
}
