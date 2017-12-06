import React from 'react';

export default function CatalogPageLayout(props) {
  return (
    <div>
      <div>{props.children[0]}</div>
      <div>{props.children[1]}</div>
      <div className="CategoriesComponent">{props.children[2]}</div>
      <div className="ClothingItemsComponent">{props.children[3]}</div>
    </div>
  );
}
