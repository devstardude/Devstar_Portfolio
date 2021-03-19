import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PROJECTS from "../../page/ProjectList";
import styles from "./OtherProjectsTabs.module.css";
import OtherProjectsCardLayout from "../OtherProjectsCardLayout/OtherProjectsCardLayout";

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const OtherProjectsTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={styles.Root}>
      <AppBar className={styles.AppBar} position="static" color="#1690d6cc">
        <Tabs
          elivation={0}
          centered
          className={styles.Tabs}
          value={value}
          classes={{ indicator: styles.Indicator }}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label={<span className={styles.LabelText}>Awesome</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className={styles.LabelText}>Intermediate</span>}
            {...a11yProps(1)}
          />
          <Tab
            label={<span className={styles.LabelText}>Beginner</span>}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OtherProjectsCardLayout projects={PROJECTS} start={0} end={2} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <OtherProjectsCardLayout projects={PROJECTS} start={2} end={4} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <OtherProjectsCardLayout projects={PROJECTS} start={4} end={6} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default OtherProjectsTabs;
