export default function GroupDetailsHeader(props) {
  const unit_or_Units = props.noOfUnits>1 ? 'units': 'unit'
  const _style = props.isZoomedIn
  ? {
      fontSize: "medium",
      margin: '5px',
      padding: '5px',
      width: '120px'
    }
  : {};
  return (
    <input
      className="group-header handle"
      style={_style}
      value={`${props.noOfUnits} ${unit_or_Units}, $${props.totalGroupPrice}`}
    ></input>
  );
}
