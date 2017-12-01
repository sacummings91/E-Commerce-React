import React from 'react';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from '../catalogpage/LogoHeaderComponent';
import IndividualItemComponent from './IndividualItemComponent';

export default function ProductPage({
  clothingItem,
  addToCart,
  addToFavorites,
  authenticatedUser,
  logout = () => {}
}) {
  return (
    <ProductPageLayout>
      <NavbarComponent
        onLogout={logout}
        authenticatedUser={authenticatedUser}
      />
      <LogoHeaderComponent />
      <IndividualItemComponent
        item={clothingItem}
        addToCart={addToCart}
        addToFavorites={addToFavorites}
        authenticatedUser={authenticatedUser}
      />
    </ProductPageLayout>
  );
}
