import React from "react";
import {useDrag} from "react-dnd";

export default function GroupProduct({productInfo, currentGroupId, onViewDetails}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "product",
        item: {id: productInfo.id, currentGroupId},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <img
            alt="draggable pic"
            ref={drag}
            key={productInfo.id}
            className="group-product"
            src={"/product-images/" + productInfo.image_name}
            style={{border: isDragging ? "10 px solid blue" : "0px"}}
            onClick={() => onViewDetails(productInfo.id)}
        />
    );
}
