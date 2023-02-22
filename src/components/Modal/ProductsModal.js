import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import GroupName from "../group/GroupName";

export default function ProductsModal(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const [quantity, setQuantity] = React.useState(props.badgeContent);
  // const [price, setPrice] = React.useState(props.prodPrice);

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity)) {
      props.onQuantityChange(props.productId, newQuantity);
    }
  }

  // function handlePriceChange(event) {
  //   setPrice(event.target.value);
  // }

  return (
    <div style={{ height: "85%" }}>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box" sx={{ bgcolor: "background.paper", p: 4 }}>
          <GroupName
            groupName={props.groupName}
            setGroupName={props.setGroupName}
            isZoomedIn={true}
          />
          <img
            className="product-in-modal"
            src={props.image}
            alt="productImg"
          />
          <Typography>
            <h2>{props.prodName}</h2>
            <h2>${props.prodPrice}</h2>
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", marginTop: "50px" }}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={props.badgeContent}
              onChange={handleQuantityChange}
              min="1"
              style={{ fontSize: "1.5rem", marginLeft: "38px" }}
            />
          </Typography>
          <Typography
            sx={{ fontSize: "1.5rem", marginTop: "20px", display: "flex" }}
          >
            <label htmlFor="price">Total Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={`$${quantity * props.prodPrice}`}
              // onChange={handlePriceChange}
              min="1"
              style={{ fontSize: "1.5rem", marginLeft: "15px" }}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
