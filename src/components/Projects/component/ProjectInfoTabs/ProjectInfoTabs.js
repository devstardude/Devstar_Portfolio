import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./ProjectInfoTabs.module.css";
import { MediaDiv,FeaturesDiv,StackDiv } from "../ProjectInfoSections/ProjectInfoSections";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`info-tab-${index}`}
      aria-labelledby={`info-tab-${index}`}
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
    id: `info-tab-${index}`,
    "aria-controls": `info-tab-${index}`,
  };
}

const ProjectInfoTabs = (props) => {
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
      <AppBar
        elivation={0}
        className={styles.AppBar}
        position="static"
        color="#1690d6cc"
      >
        <Tabs
          elivation={0}
          centered
          className={styles.Tabs}
          value={value}
          classes={{ indicator: styles.Indicator }}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="info-tab"
        >
          <Tab
            label={<span className={styles.LabelText}>Links</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className={styles.LabelText}>Features</span>}
            {...a11yProps(1)}
          />
          <Tab
            label={<span className={styles.LabelText}>Stack</span>}
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
          <MediaDiv {...props} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FeaturesDiv {...props} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <StackDiv {...props} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default ProjectInfoTabs;
