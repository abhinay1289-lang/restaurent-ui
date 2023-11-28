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
  const [listOfBiryaniCount, setListOfBiryaniCount] = useState([] as any[]);
  const [listOfStartersCount, setListOfStartersCount] = useState([] as any[]);
  const [listOfCurriesCount, setListOfCurriesCount] = useState([] as any[]);
  const [listOfRiceCount, setListOfRiceCount] = useState([] as any[]);
  const [listOfRotisCount, setListOfRotisCount] = useState([] as any[]);
  const [listOfDrinksCount, setListOfDrinksCount] = useState([] as any[]);
  let totalCount =
    startersCount +
    briyaniCount +
    curriesCount +
    friedriceCount +
    riceCount +
    rotisCount +
    drinksCount;

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
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
              <Starters
                startersCount={(data: any) => setStartersCount(data)}
                startersItems={(data: any) => setListOfSelectedItems(data)}
                startersCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.BIRYANI && (
              <Biryani
                biryaniCount={(data: any) => setBiryaniCount(data)}
                biryaniItems={(data: any) => setListOfSelectedItems(data)}
                biryaniCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.CURRIES && (
              <Curries
                curryCount={(data: any) => setCurriesCount(data)}
                curryItems={(data: any) => setListOfSelectedItems(data)}
                curryCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.FRIEDRICE_NOODLES && (
              <FriedRice
                friedRiceCount={(data: any) => setFriedriceCount(data)}
                friedRiceItems={(data: any) => setListOfSelectedItems(data)}
                friedRiceCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.RICE && (
              <Rice
                riceCount={(data: any) => setRiceCount(data)}
                riceItems={(data: any) => setListOfSelectedItems(data)}
                riceCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.ROTIS && (
              <Rotis
                rotisCount={(data: any) => setRotisCount(data)}
                rotisItems={(data: any) => setListOfSelectedItems(data)}
                rotisCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
            {selectedTab === SETTING_TABS.DRINKS && (
              <Drinks
                drinksCount={(data: any) => setDrinksCount(data)}
                drinksItems={(data: any) => setListOfSelectedItems(data)}
                drinksCountList={(data: any) => setListOfBiryaniCount(data)}
              />
            )}
          </Grid>
        </div>
      </div>
      <div>
        <ResponseiveFooterBar
          totalcount={totalCount}
          totalItems={listOfSelectedItems}
          totalItemCount={listOfBiryaniCount}
        />
      </div>
    </div>
  );
};

export default Products;
