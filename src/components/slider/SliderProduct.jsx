import React from 'react';
import { useDrag } from "react-dnd";


export default function SliderProduct({productInfo}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "product",
        item: {id: productInfo.id, currentGroupId: -1},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

  return (
     <img
    className="product-slider--product"
    src={"/product-images/" + productInfo.image_name}
    alt={productInfo.name} style={{border: isDragging ? "5px solid blue" : "opx" }}
    ref = {drag}
  />
  
  )
}
