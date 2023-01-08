import React, { useContext } from "react";
import { TabContext } from "src/components/tabbed-display";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

/* eslint-disable-next-line */
export interface TabPanelProps {
  // label = name on tab; parent = name for tab ID;
  // index = this tab; selected = clicked; key = React.
  parent?: string;
  children?: React.ReactNode;
  index: number;
  sx?: SxProps<Theme>;
}

export const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { parent, children, index, ...other } = props;

  // This value is set at runtime by TabbedDisplay.
  const selected = useContext(TabContext);

  const idParent = parent || "unparented";

  return (
    <Box
      role="tabpanel"
      hidden={selected !== index}
      id={`${idParent}-tabpanel-${index}`}
      aria-labelledby={`${idParent}-tab-${index}`}
      sx={props.sx}
      {...other}
    >
      {selected === index && children}
    </Box>
  );
};

export default TabPanel;
