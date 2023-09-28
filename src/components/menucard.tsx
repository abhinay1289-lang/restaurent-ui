import Login from "./login/Login";
import {
  Badge,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
// import MenuItemsDisplay from "./menu/menuitemsdisplay";
// import Menusidebar from "./menusidebar";
// import ResponsiveAppBar from "./app-header/app-header";
import { useState } from "react";
import Menuitemsdisplay from "./menu/menuitemsdisplay";
import ResponsiveAppBar from "./app-header/app-header";
const Menucard = () => {
  const SETTING_TABS = {
    BIRYANI: "BIRYANI",
    STARTERS: "STARTERS",
    CURRIES: "CURRIES ",
    FRIEDRICE_NOODLES: "Fried Rice & Noodles",
    RICE: "Rice",
    ROTIS: "Rotis",
    GLOBAL_SETTING: "Global Settings",
  };

  const [selectedTab, setSelectedTab] = useState("");
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="menu">
      <Paper
        sx={{
          padding: "50px",
          backgroundColor: "rgb(50,50,50,0.43)",
        }}
      >
        <div className="left-section">
          <Grid sx={{ width: "100%" }}>
            <Grid>
              <nav aria-label="user settings">
                <List>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.BIRYANI)}
                    selected={selectedTab === SETTING_TABS.BIRYANI}
                    sx={{ borderBottom: "2px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <Badge badgeContent={17} color="error">
                          <img
                            src={require("../assets/biryani.png")}
                            alt="Peopletech-Group"
                            height={70}
                            style={{ marginRight: "10px" }}
                          />
                        </Badge>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.BIRYANI} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.CURRIES)}
                    selected={selectedTab === SETTING_TABS.CURRIES}
                    sx={{ borderBottom: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <div>
                          <Badge badgeContent={17} color="error">
                            <img
                              src={require("../assets/curries.png")}
                              alt="Peopletech-Group"
                              height={70}
                              style={{ marginRight: "10px" }}
                            />
                          </Badge>
                        </div>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.CURRIES} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.FRIEDRICE_NOODLES)}
                    selected={selectedTab === SETTING_TABS.FRIEDRICE_NOODLES}
                    sx={{ borderBottom: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <div>
                          <Badge badgeContent={17} color="error">
                            <img
                              src={require("../assets/friedrice.png")}
                              alt="Peopletech-Group"
                              height={70}
                              style={{ marginRight: "10px" }}
                            />
                          </Badge>
                        </div>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.FRIEDRICE_NOODLES} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.RICE)}
                    selected={selectedTab === SETTING_TABS.RICE}
                    sx={{ borderBottom: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <div>
                          <Badge badgeContent={17} color="error">
                            <img
                              src={require("../assets/rice.png")}
                              alt="Peopletech-Group"
                              height={70}
                              style={{ marginRight: "10px" }}
                            />
                          </Badge>
                        </div>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.RICE} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.RICE)}
                    selected={selectedTab === SETTING_TABS.RICE}
                    sx={{ borderBottom: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <div>
                          <Badge badgeContent={17} color="error">
                            <img
                              src={require("../assets/rotis.png")}
                              alt="Peopletech-Group"
                              height={70}
                              style={{ marginRight: "10px" }}
                            />
                          </Badge>
                        </div>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.RICE} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.STARTERS)}
                    selected={selectedTab === SETTING_TABS.STARTERS}
                    sx={{ borderBottom: "1px dotted #888" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <div>
                          <Badge badgeContent={17} color="error">
                            <img
                              src={require("../assets/starters.png")}
                              alt="Peopletech-Group"
                              height={70}
                              style={{ marginRight: "10px" }}
                            />
                          </Badge>
                        </div>
                      </ListItemIcon>
                      <ListItemText primary={SETTING_TABS.STARTERS} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Grid item xs={10}>
        {/* {selectedTab == SETTING_TABS.BIRYANI && <ResponsiveAppBar />}
        {selectedTab == SETTING_TABS.CURRIES && <Login />} */}
        {/* {selectedTab == SETTING_TABS.FRIEDRICE_NOODLES && <Profile />}
        {selectedTab == SETTING_TABS.STARTERS && <GlobalSettings />}
        {selectedTab == SETTING_TABS.GLOBAL_SETTING && <Login />} */}
      </Grid>
      <div className="right-section">
        <Paper
          sx={{
            padding: [5, 2],
            backgroundColor: "rgb(210,210,210,0.41)",
            width: "100%",
            display: "contents",
          }}
        >
          {/* <MenuItemsDisplay /> */}
        </Paper>
      </div>
    </div>
  );
};

export default Menucard;
