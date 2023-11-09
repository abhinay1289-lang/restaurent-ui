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
import { useEffect, useState } from "react";
import Biryani from "./menu/Biryani";
import Starters from "./menu/Starters";
import FriedRice from "./menu/FriedRice";
import Curries from "./menu/Curries";
import Rice from "./menu/Rice";
import Rotis from "./menu/Rotis";
import Drinks from "./menu/drinks";
import ResponseiveFooterBar from "./app-header-footer/app-footer";

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
  const [briyaniCount, setBiryaniCount] = useState(0);
  const [startersCount, setStartersCount] = useState(0);
  const [curriesCount, setCurriesCount] = useState(0);
  const [friedriceCount, setFriedriceCount] = useState(0);
  const [riceCount, setRiceCount] = useState(0);
  const [rotisCount, setRotisCount] = useState(0);
  const [drinksCount, setDrinksCount] = useState(0);
  const [listOfSelectedItems, setListOfSelectedItems] = useState([] as any[]);
  let totalCount =
    startersCount +
    briyaniCount +
    curriesCount +
    friedriceCount +
    riceCount +
    rotisCount +
    drinksCount;

  const handleListOfItems = (data: any) => {
    setListOfSelectedItems(data);
  };
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };
  const updateBiryaniCount = (data: any) => {
    setBiryaniCount(data);
  };
  const updateStartersCount = (data: any) => {
    setStartersCount(data);
  };
  const updateCurriesCount = (data: any) => {
    setCurriesCount(data);
  };
  const updateFriedriceCount = (data: any) => {
    setFriedriceCount(data);
  };
  const updateRiceCount = (data: any) => {
    setRiceCount(data);
  };
  const updateRotisCount = (data: any) => {
    setRotisCount(data);
  };
  const updateDrinksCount = (data: any) => {
    setDrinksCount(data);
  };

  useEffect(() => {
    selectedTab === SETTING_TABS.STARTERS && <Starters />;
  }, [SETTING_TABS.STARTERS, selectedTab]);

  return (
    <div>
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
                            <Badge badgeContent={startersCount} color="error">
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
                          <Badge badgeContent={briyaniCount} color="error">
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
                            <Badge badgeContent={curriesCount} color="error">
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
                      onClick={() =>
                        handleClick(SETTING_TABS.FRIEDRICE_NOODLES)
                      }
                      selected={selectedTab === SETTING_TABS.FRIEDRICE_NOODLES}
                      sx={{ borderBottom: "1px dotted #888" }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <div>
                            <Badge badgeContent={friedriceCount} color="error">
                              <img
                                src={require("../assets/friedrice.png")}
                                alt="Peopletech-Group"
                                height={70}
                                style={{ marginRight: "10px" }}
                              />
                            </Badge>
                          </div>
                        </ListItemIcon>
                        <ListItemText
                          primary={SETTING_TABS.FRIEDRICE_NOODLES}
                        />
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
                            <Badge badgeContent={riceCount} color="error">
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
                            <Badge badgeContent={rotisCount} color="error">
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
                            <Badge badgeContent={drinksCount} color="error">
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
            {selectedTab === SETTING_TABS.STARTERS && (
              <Starters startersCount={updateStartersCount} />
            )}
            {selectedTab === SETTING_TABS.BIRYANI && (
              <Biryani
                biryaniCount={updateBiryaniCount}
                biryaniItems={handleListOfItems}
              />
            )}
            {selectedTab === SETTING_TABS.CURRIES && (
              <Curries curryCount={updateCurriesCount} />
            )}
            {selectedTab === SETTING_TABS.FRIEDRICE_NOODLES && (
              <FriedRice friedRiceCount={updateFriedriceCount} />
            )}
            {selectedTab === SETTING_TABS.RICE && (
              <Rice riceCount={updateRiceCount} />
            )}
            {selectedTab === SETTING_TABS.ROTIS && (
              <Rotis rotisCount={updateRotisCount} />
            )}
            {selectedTab === SETTING_TABS.DRINKS && (
              <Drinks drinksCount={updateDrinksCount} />
            )}
          </Grid>
        </div>
      </div>
      <div>
        <ResponseiveFooterBar
          totalcount={totalCount}
          totalItems={listOfSelectedItems}
        />
      </div>
    </div>
  );
};

export default Products;
