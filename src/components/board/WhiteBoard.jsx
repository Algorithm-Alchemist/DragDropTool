import React, { useState } from 'react';
import Group from '../group/Group';
// eslint-disable-next-line no-unused-vars
import styles from './WhiteBoard.css';
import ProductSlider from 'src/components/slider/ProductSlider';
import { productList } from 'src/helpers/productList';

export default function Whiteboard({ addProductToGroup, groups }) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  //   const handleGroupNameChange = (newName) => {
  //     console.log('CHANGING NAME');
  //     setGroups((current) => {
  //       let newGroups = [...groups];
  //       newGroups[currentGroupIndex].name = newName;
  //       return newGroups;
  //     });
  //   };

  //   const handleCreateNewGroup = () => {
  //     console.log('CHANGING GROUP');
  //     const newGroupId = groups.length + 1;
  //     setGroups([...groups, { id: newGroupId, products: [], name: '' }]);
  //     setCurrentGroupIndex(newGroupId)
  //   };

  //   const handleViewDetails = (id) => {
  //     setShowModal(true);
  //     console.log(id);
  //   };

  return (
    <div>
      <div className='whiteboard-container'>
        <div className='whiteboard--content'>
          <div className='groups-container'>
            <Group
              id={groups[currentGroupIndex].id}
              name={groups[currentGroupIndex].name}
              products={groups[currentGroupIndex].products}
              addProductToGroup={addProductToGroup}
              onViewDetails={() => {}}
              changeName={() => {}}
            />
            <Group
              id={groups[currentGroupIndex].id}
              name={groups[currentGroupIndex].name}
              products={groups[currentGroupIndex].products}
              addProductToGroup={addProductToGroup}
              onViewDetails={() => {}}
              changeName={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
