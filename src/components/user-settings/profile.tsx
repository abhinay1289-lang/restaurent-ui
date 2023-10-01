import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import GlobalSettings from "./globalsettings";
import ChangePassword from "./ChangePassword";
import Manageusers from "./manage-users";
import "./user-settings.css";
const Profile = () => {
  const USER_SETTING_TABS = {
    PROFILE: "Profile",
    CHANGE_PASSWORD: "Change Password",
    GLOBAL_SETTING: "Global Settings",
    USERS: "Users",
  };

  const [selectedTab, setSelectedTab] = useState("");
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="profile">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <nav aria-label="user settings">
              <List>
                <ListItem
                  // disablePadding
                  onClick={() => handleClick(USER_SETTING_TABS.PROFILE)}
                  selected={selectedTab === USER_SETTING_TABS.PROFILE}
                  sx={{ border: "1px dotted #888" }}
                >
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={USER_SETTING_TABS.PROFILE} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  // disablePadding
                  onClick={() => handleClick(USER_SETTING_TABS.GLOBAL_SETTING)}
                  selected={selectedTab === USER_SETTING_TABS.GLOBAL_SETTING}
                  sx={{ border: "1px dotted #888" }}
                >
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={USER_SETTING_TABS.GLOBAL_SETTING} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  // disablePadding
                  onClick={() => handleClick(USER_SETTING_TABS.USERS)}
                  selected={selectedTab === USER_SETTING_TABS.USERS}
                  sx={{ border: "1px dotted #888" }}
                >
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={USER_SETTING_TABS.USERS} />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  // disablePadding
                  onClick={() => handleClick(USER_SETTING_TABS.CHANGE_PASSWORD)}
                  selected={selectedTab === USER_SETTING_TABS.CHANGE_PASSWORD}
                  sx={{ border: "1px dotted #888" }}
                >
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={USER_SETTING_TABS.CHANGE_PASSWORD} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>

          <Grid item xs={10}>
            {selectedTab == USER_SETTING_TABS.PROFILE && <Profile />}
            {selectedTab == USER_SETTING_TABS.GLOBAL_SETTING && (
              <GlobalSettings />
            )}
            {selectedTab == USER_SETTING_TABS.USERS && <Manageusers />}
            {selectedTab == USER_SETTING_TABS.CHANGE_PASSWORD && (
              <ChangePassword />
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;
