import React from 'react';
import AdminPageLayout from './AdminPageLayout';
import NavbarComponent from './../NavbarComponent';
import ProductFormComponent from './ProductFormComponent';

export default function AdminPage({
  cartItems,
  clothingItems,
  onSubmit,
  onDelete,
  authenticatedUser,
  logout = () => {}
}) {
  return authenticatedUser && authenticatedUser.role === 'ROLE_ADMIN' ? (
    <AdminPageLayout>
      <NavbarComponent
        onLogout={logout}
        cartItems={cartItems}
        authenticatedUser={authenticatedUser}
      />
      <ProductFormComponent
        onSubmit={onSubmit}
        onDelete={onDelete}
        clothingItems={clothingItems}
        authenticatedUser={authenticatedUser}
      />
    </AdminPageLayout>
  ) : (
    <div>
      <NavbarComponent />
      <div>UNAUTHORIZED ACCESS</div>
    </div>
  );
}
