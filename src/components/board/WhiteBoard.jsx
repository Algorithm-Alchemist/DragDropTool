import React, {useState} from "react";
import Group from "../group/Group";
// eslint-disable-next-line no-unused-vars
import styles from "./WhiteBoard.css";
import ProductSlider from "src/components/slider/ProductSlider";
import {productList} from "src/helpers/productList";

export default function Whiteboard() {
    const [groups, setGroups] = useState([{id: 1, products: [], name: ""}]);
    const [selectedProductIds, setSelectedProductIds] = useState([]);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const addProductToGroup = (fromGroupId, productId, groupId) => {
        console.log(fromGroupId, productId, groupId);

        if (fromGroupId === groupId) return;

        if (groupId === -1) setSelectedProductIds(current => current.filter(item => item !== productId));

        let newGroups = groups;
        for (let i = 0; i < newGroups.length; i++) {
            let group = newGroups[i];
            if (group.id === groupId) {
                const product = productList.find(product => product.id === productId);

                group.products = [...group.products, product];
            } else if (group.id === fromGroupId) {
                group.products = group.products.filter(product => product.id !== productId);
            }
        }

        if (groupId === -1) {
            // console.log(newGroups);
            console.log(groups);
        }

        if (fromGroupId === -1) {
            setSelectedProductIds(current => [...current, productId]);
        }

        setGroups([...newGroups]);
    };

    const handleGroupNameChange = newName => {
        console.log("CHANGING NAME");
        setGroups(current => {
            let newGroups = [...groups];
            newGroups[currentGroupIndex].name = newName;
            return newGroups;
        });
    };

    const handleCreateNewGroup = () => {
        console.log("CHANGING GROUP");
        const newGroupId = groups.length + 1;
        setGroups([...groups, {id: newGroupId, products: [], name: ""}]);
        // setCurrentGroupIndex(newGroupId)
    };

    const handleViewDetails = id => {
        setShowModal(true);
        console.log(id);
    };

    return (
        <div>
            <div className="whiteboard-container">
            <div className="whiteboard--content">
                <div className="groups-container">
                    <Group
                        id={groups[currentGroupIndex].id}
                        name={groups[currentGroupIndex].name}
                        products={groups[currentGroupIndex].products}
                        addProductToGroup={addProductToGroup}
                        changeName={handleGroupNameChange}
                        onViewDetails={handleViewDetails}
                    />
                    <Group
                        id={groups[currentGroupIndex].id}
                        name={groups[currentGroupIndex].name}
                        products={groups[currentGroupIndex].products}
                        addProductToGroup={addProductToGroup}
                        changeName={handleGroupNameChange}
                        onViewDetails={handleViewDetails}
                    />
                </div>
                <ProductSlider
              addProductToGroup={addProductToGroup}
              products={productList}
              selectedProductIds={selectedProductIds}
            />
                </div>
            </div>
        </div>
    );
}
