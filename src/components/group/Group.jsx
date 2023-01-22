import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Draggable, { DraggableCore } from "react-draggable";
// eslint-disable-next-line no-unused-vars
import styles from "./Group.css";
import BasicModal from "../Modal/GroupModal";
import GroupContent from "./GroupContent/GroupContent";
import GroupName from "./GroupName/GroupName";
import GroupDetailsHeader from "./GroupDetailsHeader/GroupDetailsHeader";
import GroupZoomFunction from "./GroupZoomFunction";

export default function Group({ id, name, products, addProductToGroup }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item) => addProductToGroup(item.currentGroupId, item.id, id),
  }));
  const [groupName, setGroupName] = useState(name);
  const [checked, setChecked] = React.useState(false);

  const handleCheckedChange = () => {
    setChecked((prev) => !prev);
  };

  let totalGroupPrice = 0;
  products.forEach((product) => {
    totalGroupPrice = totalGroupPrice + product.price;
  });

  return (
    <>
      {checked && (
        <BasicModal
          setChecked={setChecked}
          divElement={
            <GroupContent products={products} id={id} isZoomedIn={true} />
          }
        />
      )}

      <Draggable handle=".handle">
        <div className="group-container">
          <GroupName groupName={groupName} setGroupName={setGroupName} />
          <div className="group" ref={drop}>
            <GroupDetailsHeader
              noOfUnits={products.length}
              totalGroupPrice={totalGroupPrice}
            />
            <GroupContent products={products} id={id} isZoomedIn={false} />
          </div>
          <GroupZoomFunction checked={checked} onChange={handleCheckedChange} />
        </div>
      </Draggable>
    </>
  );
}
