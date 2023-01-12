import React, {useState} from "react";
import {useDrop} from "react-dnd";
import GroupProduct from "./GroupProduct";
// eslint-disable-next-line no-unused-vars
import styles from "./Group.css";

export default function Group({id, name, products, addProductToGroup, changeName, onViewDetails}) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "product",
        drop: item => addProductToGroup(item.currentGroupId, item.id, id)
    }));
    const [groupName, setGroupName] = useState(name);

    return (
        <div className="group-container">
            <input
                className="group-name"
                value={groupName}
                onChange={({target}) => {
                    setGroupName(target.value);
                }}
                onBlur={({target}) => {
                    changeName(target.value);
                }}
                placeholder="Group name..."
            ></input>

            <div className="group" ref={drop}>
                <input className="group-header" value={"121 unit, $1200"}></input>
                <div className="group-content">
                    {products &&
                        products.map(product => (
                            <GroupProduct
                                key={product.id}
                                currentGroupId={id}
                                productInfo={product}
                                onViewDetails={() => onViewDetails(product.id)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
