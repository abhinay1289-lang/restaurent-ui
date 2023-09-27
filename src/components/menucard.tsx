import { Badge, Paper } from "@mui/material";
import MenuItemsDisplay from "./menu/menuitemsdisplay";
// import Menusidebar from "./menusidebar";
import ResponsiveAppBar from "./app-header/app-header";
const menucard = () => {
  return (
    <div className="menu">
      {/* <nav> */}
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
      {/* </nav> */}
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
