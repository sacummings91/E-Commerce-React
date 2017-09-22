import React from 'react';

export default function CartPageLayout(props) {
  return (
    <div>
      <div>
        {props.children[0]}
      </div>
      <div>
        {props.children[1]}
      </div>
      <div className="ProductTable">
        {props.children[2]}
        {props.children[3]}
      </div>
    </div>
  );
}
