import React from "react";
import { useDrop } from "react-dnd";
import SliderProduct from "./SliderProduct";

export default function ProductSlider({ products, selectedProductIds, addProductToGroup}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item) => addProductToGroup(item.currentGroupId, item.id, -1)
  }));


  return (
    <div ref={drop} className="whiteboard--product-slider">
      {products.map(function (product) {
        return !selectedProductIds.includes(product.id) ? (
          <SliderProduct key={product.id} productInfo={product} />
        ) : null;
      })}
    </div>
  );
}
