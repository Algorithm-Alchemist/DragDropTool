import React from "react";
import "./App.css";
import TabbedDisplay from "./tabbed-display";
import TabPanel from "./tab-panel";

const tabPanelSx = {fontFamily: "sans-serif", padding: "16px"};

function App() {
    return (
        <>
            <TabbedDisplay tabLabels={["page1", "page2"]}>
                <TabPanel index={0}>
                    <div style={tabPanelSx}>Page 1 content would be here.</div>
                </TabPanel>
                <TabPanel index={1}>
                    <div style={tabPanelSx}>Page 2 content would be here.</div>
                </TabPanel>
            </TabbedDisplay>
        </>
    );
}

export default App;

