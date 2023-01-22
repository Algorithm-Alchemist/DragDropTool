import React, { useState } from "react";
import { useDrop } from "react-dnd";
import GroupProduct from "./GroupProduct";
import Draggable, { DraggableCore } from "react-draggable";
import { FormControlLabel, Switch } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import styles from "./Group.css";
import BasicModal from "../Modal/GroupModal";
import GroupContent from "./GroupContent/GroupContent";

export default function Group({
  id,
  name,
  products,
  addProductToGroup,
  changeName,
  onViewDetails,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item) => addProductToGroup(item.currentGroupId, item.id, id),
  }));
  const [groupName, setGroupName] = useState(name);
  const [checked, setChecked] = React.useState(false);

  const handleCheckedChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {checked && (
        <BasicModal
          setChecked={setChecked}
          divElement={
            <GroupContent
              products={products}
              id={id}
              isZoomedIn={true}
            ></GroupContent>
          }
        ></BasicModal>
      )}
      <Draggable handle=".handle">
        <div className="group-container">
          <input
            style={{ width: `${groupName.length * 7}px` }}
            className="group-name handle"
            value={groupName}
            onChange={({ target }) => {
              setGroupName(target.value);
            }}
            onBlur={({ target }) => {
              changeName(target.value);
            }}
            placeholder="Group"
          ></input>

          <div className="group" ref={drop}>
            <input
              className="group-header handle"
              value={"121 unit, $1200"}
            ></input>
            <div className="group-content">
              {
                <GroupContent
                  products={products}
                  id={id}
                  isZoomedIn={false}
                ></GroupContent>
              }
            </div>
          </div>
          <FormControlLabel
            control={
              <Switch checked={checked} onChange={handleCheckedChange} />
            }
            label="Zoom In"
          />
        </div>
      </Draggable>
    </>
  );
}
