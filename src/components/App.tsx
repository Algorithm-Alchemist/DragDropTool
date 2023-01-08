import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import "./App.css";
import TabbedDisplay from "./tabbed-display/tabbed-display";
import TabPanel from "./tabbed-display/tab-panel";
import Whiteboard from "src/components/board/WhiteBoard";
import ProductSlider from "./slider/ProductSlider";
import { productList } from "src/helpers/productList";

const tabPanelSx = {fontFamily: "sans-serif", padding: "16px"};

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <TabbedDisplay tabLabels={["page1", "page2"]}>
                <TabPanel index={0}>
                        <Whiteboard></Whiteboard>
                </TabPanel>
                <TabPanel index={1}>
                    <div style={tabPanelSx}>Page 2 content would be here.</div>
                </TabPanel>
            </TabbedDisplay>
        </DndProvider>
    );
}

export default App;

