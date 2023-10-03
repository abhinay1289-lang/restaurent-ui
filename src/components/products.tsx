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
import { useState } from "react";
import Biryani from "./menu/Biryani";
import Starters from "./menu/Starters";
import FriedRice from "./menu/FriedRice";
import Curries from "./menu/Curries";
import Rice from "./menu/Rice";
import Rotis from "./menu/Rotis";

const Products = () => {
  const SETTING_TABS = {
    BIRYANI: "BIRYANI",
    STARTERS: "STARTERS",
    CURRIES: "CURRIES ",
    FRIEDRICE_NOODLES: "FRIED RICE & NOODLES",
    RICE: "RICE",
    ROTIS: "ROTIS",
    DRINKS: "DRINKS(BEVARAGES)",
  };

  const [selectedTab, setSelectedTab] = useState("");
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="menu">
      <Paper
        sx={{
          padding: "10px",
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
                    onClick={() => handleClick(SETTING_TABS.ROTIS)}
                    selected={selectedTab === SETTING_TABS.ROTIS}
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
                      <ListItemText primary={SETTING_TABS.ROTIS} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    // disablePadding
                    onClick={() => handleClick(SETTING_TABS.DRINKS)}
                    selected={selectedTab === SETTING_TABS.DRINKS}
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
                      <ListItemText primary={SETTING_TABS.DRINKS} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Grid>
          </Grid>
        </div>
      </Paper>

      <div className="right-section">
        <Grid sx={{ width: "100%" }} item xs={10}>
          {selectedTab === SETTING_TABS.STARTERS && <Starters />}
          {selectedTab === SETTING_TABS.BIRYANI && <Biryani />}
          {selectedTab === SETTING_TABS.CURRIES && <Curries />}
          {selectedTab === SETTING_TABS.FRIEDRICE_NOODLES && <FriedRice />}
          {selectedTab === SETTING_TABS.RICE && <Rice />}
          {selectedTab === SETTING_TABS.ROTIS && <Rotis />}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
