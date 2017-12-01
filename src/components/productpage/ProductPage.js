import React from 'react';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from '../catalogpage/LogoHeaderComponent';
import IndividualItemComponent from './IndividualItemComponent';

export default function ProductPage({
  clothingItem,
  onAddToCart,
  onFavorite,
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
        onAddToCart={onAddToCart}
        onFavorite={onFavorite}
        authenticatedUser={authenticatedUser}
      />
    </ProductPageLayout>
  );
}
