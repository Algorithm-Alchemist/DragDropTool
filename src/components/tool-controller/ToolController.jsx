import React, {useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import TabbedDisplay from "../tabbed-display/tabbed-display";
import TabPanel from "../tabbed-display/tab-panel";
import Whiteboard from "../board/WhiteBoard";
import ProductSlider from "../slider/ProductSlider";
import {productList} from "../../helpers/productList";

function ToolController() {
    const [groups, setGroups] = useState([{id: 1, products: [], name: ""}]);
    const [selectedProductIds, setSelectedProductIds] = useState([]);
    const [tabNumbers, setTabNumbers] = useState([1, 2]);

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

    const tabPanelSx = {fontFamily: "sans-serif", padding: "16px"};

    const tabLabels = () => {
        return tabNumbers.map((val, index) => {
            return `page${val}`;
        });
    };

    const handleAddNewPage = () => {
        if (tabNumbers.length > 0) setTabNumbers([...tabNumbers, tabNumbers[tabNumbers.length - 1] + 1]);
        else setTabNumbers([1]);
    };

    const handleClosePage = (event, tabToDelete) => {
        event.stopPropagation();
        setTabNumbers(
            tabNumbers.filter((val, index) => {
                return index !== tabToDelete;
            })
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <TabbedDisplay
                tabLabels={tabLabels()}
                handleAddNewPage={handleAddNewPage}
                handleClosePage={handleClosePage}
            >
                <ProductSlider
                    addProductToGroup={addProductToGroup}
                    products={productList}
                    selectedProductIds={selectedProductIds}
                />
                <TabPanel index={0}>
                    <Whiteboard addProductToGroup={addProductToGroup} groups={groups}></Whiteboard>
                </TabPanel>
                <TabPanel index={1}>
                    <div style={tabPanelSx}>Page 2 content would be here.</div>
                </TabPanel>
            </TabbedDisplay>
        </DndProvider>
    );
}

export default ToolController;
