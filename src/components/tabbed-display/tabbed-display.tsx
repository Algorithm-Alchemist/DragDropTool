import React, {SyntheticEvent, useState} from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Button} from "@mui/material";
// import { Close } from "@mui/icons-material";


/* eslint-disable-next-line */
export interface TabbedDisplayProps {
    panelParent?: string;
    selected?: number;
    tabLabels: string[];
    handleAddNewPage: ()=> void,
    children: React.ReactNode;
}

// To share varying state with TabPanel children.
export const TabContext = React.createContext(0);

export const TabbedDisplay: React.FC<TabbedDisplayProps> = ({
    panelParent = "unparented",
    selected = 0,
    tabLabels,
    handleAddNewPage,
    children
}) => {
    const tabSx = {
        color: "darkgray",
        fontWeight: "bold",
        margin: "0px 20px"
    };

    const [selectedTab, setSelectedTab] = useState(selected);

    const handleChange = (event: SyntheticEvent, chosen: number) => {
        setSelectedTab(chosen);
    };

    const tabs = tabLabels.map((x, i) => (
        <Tab
            label={x}
            key={`${panelParent}-tab-${i}`}
            // icon={
            //     <Close></Close>
            // }
            sx={theme => ({
                ...tabSx,
                backgroundColor: theme.palette.background.paper
            })}
        />
    )) as React.ReactNode;

    return (
        <TabContext.Provider value={selectedTab}>
            <Tabs
                variant="scrollable"
                scrollButtons="auto"
                value={selectedTab}
                onChange={handleChange}
                aria-label={`${panelParent}-tabbed-display`}
            >
                {tabs}
                <Button
                    sx={tabSx}
                    onClick={handleAddNewPage}
                >
                    + Add New
                </Button>
            </Tabs>
            <Paper>{children}</Paper>
        </TabContext.Provider>
    );
};

export default TabbedDisplay;
