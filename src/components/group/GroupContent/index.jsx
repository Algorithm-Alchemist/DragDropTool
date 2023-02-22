import GroupProduct from "../GroupProduct";
import * as React from "react";

export default function GroupContent({
  products,
  id,
  isZoomedIn,
  productQuantities,
  setProductQuantity,
  groupName,
  setGroupName,
}) {
  const _style = isZoomedIn
    ? {
        marginTop: "20px",
        borderBlock: "inherit",
        display: "flex",
        flexWrap: "wrap",
        height: "85%",
        overflowY: "scroll",
      }
    : {};

  const handleQuantityChange = (productId, quantity) => {
    setProductQuantity((prevState) => ({
      ...prevState,
      [productId]: quantity,
    }));
  };

  return (
    <div className="group-content" style={_style}>
      {" "}
      {products &&
        products.map((product, _index) => {
          return (
            <GroupProduct
              key={product.id}
              currentGroupId={id}
              productInfo={product}
              index={_index}
              isZoomedIn={isZoomedIn}
              productQuantities={productQuantities}
              handleQuantityChange={handleQuantityChange}
              groupName={groupName}
              setGroupName={setGroupName}
            />
          );
        })}
    </div>
  );
}
