import { Scale } from "@mui/icons-material";
import {color} from "@mui/system";
import React from "react";
import {useDrag} from "react-dnd";

export default function GroupProduct({productInfo, currentGroupId, onViewDetails, index}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "product",
        item: {id: productInfo.id, currentGroupId},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const marginArr = [0, 1, 2, 1];
    const height = 140;
    return (
        <img
            alt="draggable pic"
            ref={drag}
            key={productInfo.id}
            className="group-product"
            src={"/product-images/" + productInfo.image_name}
            style={{
                height: `${height}px`,
                width: "auto",
                border: isDragging ? "10 px solid blue" : "0px solid black",
                marginLeft: index === 0 ? "0px" : `-${height - 10}px`,
                zIndex: index + 1,
                "margin-top": `${marginArr[index % 4] * 50 - 25}px`
            }}
            onClick={() => onViewDetails(productInfo.id)}
        />
    );
}
