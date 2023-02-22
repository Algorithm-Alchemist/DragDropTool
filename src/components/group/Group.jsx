import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";
// eslint-disable-next-line no-unused-vars
import styles from "./Group.css";
import BasicModal from "../Modal/GroupModal";
import GroupContent from "./GroupContent";
import GroupName from "./GroupName";
import GroupDetailsHeader from "./GroupDetailsHeader";
import GroupZoomFunction from "./GroupZoomFunction";

export default function Group({
  id,
  products,
  addProductToGroup,
  removedProductId,
  setRemovedProductId,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item) => addProductToGroup(item.currentGroupId, item.id, id),
  }));
  const [groupName, setGroupName] = useState("");
  const [checked, setChecked] = React.useState(false);

  const handleCheckedChange = () => {
    setChecked((prev) => !prev);
  };

  const [productQuantities, setProductQuantities] = React.useState({});

  React.useEffect(() => {
    const productQuantitiesTemporary = { ...productQuantities };
    for (const product of products) {
      const { id } = product;
      if (!productQuantitiesTemporary[id]) {
        productQuantitiesTemporary[id] = 1;
      }
    }
    productQuantitiesTemporary[removedProductId] = 0;
    setRemovedProductId(0);
    setProductQuantities(productQuantitiesTemporary);
  }, [products]);

  let totalGroupPrice = 0;
  products.forEach((product) => {
    const quantity = productQuantities[product.id] || 1;
    totalGroupPrice = totalGroupPrice + product.price * quantity;
  });

  let totalQuantity = 0;
  totalQuantity = Object.values(productQuantities).reduce((a, b) => a + b, 0);

  return (
    <>
      {checked && (
        <BasicModal
          setChecked={setChecked}
          divElement={
            <>
              <GroupName
                groupName={groupName}
                setGroupName={setGroupName}
                isZoomedIn={true}
              />
              <GroupDetailsHeader
                noOfUnits={totalQuantity}
                totalGroupPrice={totalGroupPrice}
                isZoomedIn={true}
              />
              <GroupContent
                products={products}
                id={id}
                isZoomedIn={true}
                setProductQuantity={setProductQuantities}
                productQuantities={productQuantities}
              />
            </>
          }
        />
      )}

      <Draggable handle=".handle">
        <div className="group-container">
          <GroupName groupName={groupName} setGroupName={setGroupName} />
          <div className="group" ref={drop}>
            <GroupDetailsHeader
              noOfUnits={totalQuantity}
              totalGroupPrice={totalGroupPrice}
            />
            <GroupContent
              products={products}
              id={id}
              isZoomedIn={false}
              setProductQuantity={setProductQuantities}
              productQuantities={productQuantities}
            />
          </div>
          <GroupZoomFunction checked={checked} onChange={handleCheckedChange} />
        </div>
      </Draggable>
    </>
  );
}
