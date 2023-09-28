import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { useState } from "react";
import GlobalSettings from "./globalsettings";
import ChangePassword from "./ChangePassword";
const Profile = () => {
  const USER_SETTING_TABS = {
    PROFILE: "Profile",
    CHANGE_PASSWORD: "Change Password",
    GLOBAL_SETTING: "Global Settings",
  };

  const [selectedTab, setSelectedTab] = useState("");
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Paper
        sx={{
          padding: "50px",
          backgroundColor: "rgb(50,50,50,0.43)",
        }}
      >
        <div className="">
          <Grid sx={{ width: "20%" }}>
            <Grid>
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
                    onClick={() =>
                      handleClick(USER_SETTING_TABS.GLOBAL_SETTING)
                    }
                    selected={selectedTab === USER_SETTING_TABS.GLOBAL_SETTING}
                    sx={{ border: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        primary={USER_SETTING_TABS.GLOBAL_SETTING}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() =>
                      handleClick(USER_SETTING_TABS.CHANGE_PASSWORD)
                    }
                    selected={selectedTab === USER_SETTING_TABS.CHANGE_PASSWORD}
                    sx={{ border: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        primary={USER_SETTING_TABS.CHANGE_PASSWORD}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
          </Grid>
        </div>
      </Paper>
       <Grid item xs={10}>
        {selectedTab == USER_SETTING_TABS.PROFILE && <Profile />}
        {/* {selectedTab == USER_SETTING_TABS.GLOBAL_SETTING && < />} */}
        {selectedTab == USER_SETTING_TABS.CHANGE_PASSWORD && <ChangePassword />}
      </Grid>
    </div>
  );
};
export default Profile;
