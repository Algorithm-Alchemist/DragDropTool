import { Badge } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import ProductsModal from "src/components/Modal/ProductsModal";

export default function GroupProduct({
  productInfo,
  currentGroupId,
  index,
  isZoomedIn,
  productQuantities,
  handleQuantityChange,
  groupName,
  setGroupName,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "product",
    item: { id: productInfo.id, currentGroupId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const marginArr = [0, 1, 2, 1];
  const height = 140;
  const marginLeft = () => {
    if (isZoomedIn) return "0px";
    else {
      if (index === 0) return "0px";
      else return `-${height - 10}px`;
    }
  };

  const modalInfo = (e) => {
    setOpen(true);
    setImage(e.target.getAttribute("src"));
    setProdName(productInfo.name);
    setProdPrice(productInfo.price);
  };

  const [open, setOpen] = React.useState(false);

  const [zoomBadge, setZoomBadge] = React.useState(true);

  const [image, setImage] = React.useState("");

  const [prodName, setProdName] = React.useState("");

  const [prodPrice, setProdPrice] = React.useState("");

  const _style = isZoomedIn
    ? {
        transform: "scale(0.9)",
        height: "120px",
        width: "auto",
        border: "1px solid darkseagreen",
      }
    : {
        transform: "scale(0.5)",
        height: `${height}px`,
        width: "auto",
        border: isDragging ? "10 px solid blue" : "0px solid black",
        zIndex: index + 1,
        position: "relative",
      };

  const spanStyle = {
    position: "relative",
    marginTop: `${marginArr[index % 4] * 50 - 25}px`,
    marginLeft: marginLeft(),
    pointerEvents: "none",
  };

  const badgeStyle = {
    position: "absolute",
    right: "25%",
    top: "22%",
    pointerEvents: "auto",
    zIndex: index + 1,
    cursor: "default",
  };

  return (
    <>
      {open && (
        <ProductsModal
          open={open}
          setOpen={setOpen}
          image={image}
          prodName={prodName}
          prodPrice={prodPrice}
          onQuantityChange={handleQuantityChange}
          productId={productInfo.id}
          badgeContent={productQuantities[productInfo.id]}
          groupName={groupName}
          setGroupName={setGroupName}
        ></ProductsModal>
      )}

      <span style={spanStyle}>
        <img
          className={`group-product ${isZoomedIn ? "" : "group-product-hover"}`}
          alt="draggable pic"
          ref={drag}
          key={productInfo.id}
          src={"/product-images/" + productInfo.image_name}
          style={{ ..._style, pointerEvents: "auto" }}
          onClick={(e) => modalInfo(e)}
          onMouseEnter={() => setZoomBadge(false)}
          onMouseLeave={() => setZoomBadge(true)}
        />
        <Badge
          badgeContent={productQuantities[productInfo.id]}
          onClick={() => setOpen(true)}
          color="primary"
          overlap="circular"
          className={`group-badge ${zoomBadge ? "" : "group-badge-hover"}`}
          sx={badgeStyle}
        ></Badge>
      </span>
    </>
  );
}
