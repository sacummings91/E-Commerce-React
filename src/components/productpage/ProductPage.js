import React from 'react';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from '../catalogpage/LogoHeaderComponent';
import IndividualItemComponent from './IndividualItemComponent';

export default function ProductPage({
  clothingItem,
  favorite,
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
        favorite={favorite}
        addToCart={addToCart}
        addToFavorites={addToFavorites}
      />
    </ProductPageLayout>
  );
}
