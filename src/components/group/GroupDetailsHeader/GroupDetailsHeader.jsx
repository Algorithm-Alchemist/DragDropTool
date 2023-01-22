export default function GroupDetailsHeader(props) {
  const unit_or_Units = props.noOfUnits>1 ? 'units': 'unit'
  return (
    <input
      className="group-header handle"
      value={`${props.noOfUnits} ${unit_or_Units}, $1200`}
    ></input>
  );
}
