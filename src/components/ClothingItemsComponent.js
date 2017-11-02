import React from 'react';
import ClothingItemComponent from './ClothingItemComponent';

export default function ClothingItemsComponent({ items, addToCart }) {
  console.log(items);
  return (
    <div className="ClothingItemsComponent">
      {items.map(item => (
        <ClothingItemComponent
          key={item.id}
          item={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
