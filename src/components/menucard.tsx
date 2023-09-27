import { Badge, Grid, ListItem, Paper } from "@mui/material";
import MenuItemsDisplay from "./menu/menuitemsdisplay";
// import Menusidebar from "./menusidebar";
import ResponsiveAppBar from "./app-header/app-header";
import { useState } from "react";
const menucard = () => {

  const SETTING_TABS = {
    BIRYANI: 'Users',
    STARTERS: 'Profile',
    CURRIES: 'My Team',
    FRIEDRICE_NOODLES : 'food',
    GLOBAL_SETTING: 'Global Settings',
  };

  const [selectedtab, setSelectedTab] = useState('');

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="menu">
      {/* <nav> */}
      {/* <Grid container spacing={2}>
        <Grid item xs={2}>
          <nav aria-label='user settings'></nav> */}
          <ListItem
            disablePadding
            onClick={() => handleClick(SETTING_TABS.PROFILE)}
            selected={seletedTab == SETTING_TABS.PROFILE}
            sx={{ borderBottom: '1px dotted #888' }}
          >
      <div className="left-section">
        <Paper
          sx={{
            padding: '50px',
            backgroundColor: "rgb(50,50,50,0.43)",
          }}
          >
          <div
          >
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/biryani.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
          </Badge>
        </div>
        <div
        style={{marginTop:'25px'}}>
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/curries.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
        </Badge>
        </div>
          <div
         style={{marginTop:'25px'}}>
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/friedrice.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
        </Badge>
          </div>
          <div
         style={{marginTop:'25px'}}
          >
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/rice.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
        </Badge>
          </div>
          <div
          style={{marginTop:'25px'}}>
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/rotis.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
        </Badge>
          </div>
          <div
          style={{marginTop:'25px'}}>
          <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/starters.png")}
            alt="Peopletech-Group"
            height={70}
            // onClick={handleUserMenu}
          />
        </Badge>
          </div>
        </Paper>
      </div>
      </ListItem>
      {/* </Grid>
      </Grid> */}
      {/* </nav> */}
      <Grid item xs={10}>
          {seletedTab == SETTING_TABS.USERS && <ManageUsers />}
          {seletedTab == SETTING_TABS.MY_TEAM && <MyTeam />}
          {seletedTab == SETTING_TABS.PROFILE && <Profile />}
          {seletedTab == SETTING_TABS.GLOBAL_SETTING && <GlobalSettings />}
        </Grid>
      <div className="right-section">
          <Paper
            sx={{
              padding: [5, 2],
              backgroundColor: "rgb(210,210,210,0.41)",
              width:'100%',
              display:'contents'
            }}
          >
            {/* <MenuItemsDisplay /> */}
          </Paper>
      </div>
    </div>
  );
};

export default menucard;
