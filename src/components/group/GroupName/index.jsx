export default function GroupName(props) {
  const _style = props.isZoomedIn
    ? {
        width: `${props.groupName.length * 9}px`,
        fontSize: "medium",
        maxWidth: "300px",
        minWidth: "90px",
        padding: '5px',
        margin: '5px',
        cursor: 'text'
      }
    : { width: `${props.groupName.length * 7}px` };
  return (
    <input
      className="group-name handle"
      style={_style}
      value={props.groupName}
      onChange={({ target }) => {
        props.setGroupName(target.value);
      }}
      onBlur={({ target }) => {
        props.setGroupName(target.value);
      }}
      placeholder="group name"
    ></input>
  );
}
