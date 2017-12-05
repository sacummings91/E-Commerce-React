import React from 'react';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import IndividualItemComponent from './IndividualItemComponent';

export default function ProductPage({
  clothingItem,
  cartItems,
  onAddToCart,
  onFavorite,
  authenticatedUser,
  logout = () => {}
}) {
  return (
    <ProductPageLayout>
      <NavbarComponent
        cartItems={cartItems}
        onLogout={logout}
        authenticatedUser={authenticatedUser}
      />
      <IndividualItemComponent
        item={clothingItem}
        onAddToCart={onAddToCart}
        onFavorite={onFavorite}
        authenticatedUser={authenticatedUser}
      />
    </ProductPageLayout>
  );
}
