export default function GroupName(props) {
  return (
    <input
      style={{ width: `${props.groupName.length * 7}px` }}
      className="group-name handle"
      value={props.groupName}
      onChange={({ target }) => {
        props.setGroupName(target.value);
      }}
      onBlur={({ target }) => {
        props.setGroupName(target.value);
      }}
      placeholder="Group"
    ></input>
  );
}
