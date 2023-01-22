import {Scale} from "@mui/icons-material";
import {color} from "@mui/system";
import React from "react";
import {useDrag} from "react-dnd";

export default function GroupProduct({productInfo, currentGroupId, onViewDetails, index, zoomedIn}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "product",
        item: {id: productInfo.id, currentGroupId},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const marginArr = [0, 1, 2, 1];
    const height = 140;
    const marginLeft = () => {
        if (zoomedIn) return "0px";
        else {
            if (index === 0) return "0px";
            else return `-${height - 10}px`;
        }
    };
    return (
        <img
            alt="draggable pic"
            ref={drag}
            key={productInfo.id}
            className="group-product"
            src={"/product-images/" + productInfo.image_name}
            style={{
                transform: zoomedIn ? "scale(1)": "scale(0.5)",
                height: `${height}px`,
                width: "auto",
                border: isDragging ? "10 px solid blue" : "0px solid black",
                marginLeft: marginLeft(),
                zIndex: index + 1,
                marginTop: zoomedIn ? "100px" : `${marginArr[index % 4] * 50 - 25}px`
            }}
            onClick={() => onViewDetails(productInfo.id)}
        />
    );
}
