import GroupProduct from "../GroupProduct";

export default function GroupContent({ products, id, isZoomedIn }) {
  const _style = isZoomedIn
    ? {
        marginTop: "15px",
        borderBlock: "inherit",
        display: "flex",
        flexWrap: "wrap",
        height: "auto",
      }
    : {};
  return (
    <div className="group-content" style={_style}>
      {" "}
      {products &&
        products.map((product, _index) => (
          <GroupProduct
            key={product.id}
            currentGroupId={id}
            productInfo={product}
            // onViewDetails={() => onViewDetails(product.id)}
            index={_index}
            isZoomedIn={isZoomedIn}
          />
        ))}
    </div>
  );
}