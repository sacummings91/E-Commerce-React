import React from 'react';
import AdminPageLayout from './AdminPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './../catalogpage/LogoHeaderComponent';
import ProductFormComponent from './ProductFormComponent';

export default function AdminPage({ clothingItems, onSubmit, onDelete }) {
  return (
    <AdminPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <ProductFormComponent
        onSubmit={onSubmit}
        onDelete={onDelete}
        clothingItems={clothingItems}
      />
    </AdminPageLayout>
  );
}
