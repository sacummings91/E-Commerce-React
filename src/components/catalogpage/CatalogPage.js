import React from 'react';
import CatalogPageLayout from './CatalogPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './LogoHeaderComponent';
import CategoriesComponent from './CategoriesComponent';
import ClothingItemsComponent from './../ClothingItemsComponent';
import FooterComponent from './../FooterComponent';

export default function CatalogPage({
  clothingItems,
  selectedCategory,
  addToCart,
  authenticatedUser,
  logout = () => {}
}) {
  return (
    <CatalogPageLayout>
      <NavbarComponent
        onLogout={logout}
        authenticatedUser={authenticatedUser}
      />
      <LogoHeaderComponent />
      <CategoriesComponent selectedCategory={selectedCategory} />
      <ClothingItemsComponent items={clothingItems} addToCart={addToCart} />
      <FooterComponent authenticatedUser={authenticatedUser} />
    </CatalogPageLayout>
  );
}
