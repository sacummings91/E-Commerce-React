import React from 'react';
import AdminPageLayout from './AdminPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './../catalogpage/LogoHeaderComponent';
import ProductFormComponent from './ProductFormComponent';

export default function AdminPage({
  clothingItems,
  onSubmit,
  onDelete,
  authenticatedUser,
  logout = () => {}
}) {
  return authenticatedUser ? (
    <AdminPageLayout>
      <NavbarComponent
        onLogout={logout}
        authenticatedUser={authenticatedUser}
      />
      <LogoHeaderComponent />
      <ProductFormComponent
        onSubmit={onSubmit}
        onDelete={onDelete}
        clothingItems={clothingItems}
      />
    </AdminPageLayout>
  ) : (
    <div>UNAUTHORIZED ACCESS</div>
  );
}
