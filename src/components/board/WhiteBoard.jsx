import React, { useState } from "react";
import Group from "../group/Group";
// eslint-disable-next-line no-unused-vars
import styles from "./WhiteBoard.css";
import ProductSlider from "src/components/slider/ProductSlider";
import { productList } from "src/helpers/productList";
import { AddCircle } from "@mui/icons-material";

export default function Whiteboard() {
  const [groups, setGroups] = useState([
    { id: 1, products: [], name: "" },
    { id: 2, products: [], name: "" },
  ]);

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [removedProductId, setRemovedProductId] = useState(0);

  const addProductToGroup = (fromGroupId, productId, groupId) => {
    if (fromGroupId === groupId) return;

    if (groupId === -1) {
      setSelectedProductIds((current) =>
        current.filter((item) => item !== productId)
      );
      setRemovedProductId(productId);
    }

    let newGroups = groups;
    for (let i = 0; i < newGroups.length; i++) {
      let group = newGroups[i];
      if (group.id === groupId) {
        const product = productList.find((product) => product.id === productId);
        group.products = [...group.products, product];
      } else if (group.id === fromGroupId) {
        group.products = group.products.filter(
          (product) => product.id !== productId
        );
      }
    }

    if (fromGroupId === -1) {
      setSelectedProductIds((current) => [...current, productId]);
    }
  };

  const handleCreateNewGroup = () => {
    const newGroupId = groups.length + 1;
    setGroups([...groups, { id: newGroupId, products: [], name: "new" }]);
  };

  return (
    <div>
      <div className="whiteboard-container">
        <div className="groups-container">
          {groups.map((group, index) => {
            return (
              <Group
                id={index + 1}
                products={groups[index].products}
                addProductToGroup={addProductToGroup}
                removedProductId={removedProductId}
                setRemovedProductId={setRemovedProductId}
              />
            );
          })}
          {
            <AddCircle
              fontSize="medium"
              onClick={handleCreateNewGroup}
            ></AddCircle>
          }
        </div>
      </div>
      <ProductSlider
        addProductToGroup={addProductToGroup}
        products={productList}
        selectedProductIds={selectedProductIds}
      />
    </div>
  );
}
