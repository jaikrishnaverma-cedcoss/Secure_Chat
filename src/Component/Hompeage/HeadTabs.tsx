import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChatPage from "../ChatPage/ChatPage";
import './HeadTabs.css'
import { Group } from "@mui/icons-material";
import { Badge } from "@mui/material";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const HeadTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const tabOptions = [
    {
      label: <Group/>,
      Comp: ChatPage,
    },
    {
      label: <Badge color="warning" badgeContent={0} showZero>
      <>Chats</>
    </Badge>,
      Comp: ChatPage,
    },
    {
        label: "Status",
        Comp: ChatPage,
      },
      {
        label: "Calls",
        Comp: ChatPage,
      },
  ];
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabOptions.map((item, i: number) => (
            <Tab label={item.label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
       className="swipableCard"
      >
        {tabOptions.map(({ Comp }, i: number) => (
          <TabPanel
            value={value}
            index={i}
            dir={theme.direction}
            {...a11yProps(i)}
           
          >
            <Comp />
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
};
export default HeadTabs;
