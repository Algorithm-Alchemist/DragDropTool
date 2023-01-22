import GroupProduct from "../GroupProduct";

export default function GroupContent({ products, id, isZoomedIn }) {
  return (
    <div className="group-content">
      {products &&
        products.map((product, _index) => (
          <GroupProduct
            key={product.id}
            currentGroupId={id}
            productInfo={product}
            // onViewDetails={() => onViewDetails(product.id)}
            index={_index}
            zoomedIn={isZoomedIn}
          />
        ))}
    </div>
  );
}
