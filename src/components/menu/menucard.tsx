import { Paper } from "@mui/material";
import MenuItemsDisplay from "../menuitemsdisplay";
// import Menusidebar from "./menusidebar";
import ResponsiveAppBar from "../app-header/app-header";
const menucard = () => {
  return (
    <div className="menu">
      <div className="left-section">
        <Paper
          elevation={0}
          sx={{
            padding: [5, 2],
            marginBottom: "10px",
            backgroundColor: "rgb(50,50,50,0.43)",
            minHeight: "100vh",
          }}
        ></Paper>
      </div>
      <div className="right-section">
        <>
          <Paper
            elevation={1}
            sx={{
              padding: [5, 2],
              marginBottom: "10px",
              backgroundColor: "rgb(210,210,210,0.41)",
              minHeight: "100vh",
              minWidth: "160vh",
            }}
          >
            <MenuItemsDisplay />
          </Paper>
        </>
      </div>
    </div>
  );
};

export default menucard;
