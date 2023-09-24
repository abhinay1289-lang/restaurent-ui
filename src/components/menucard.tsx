import "./menu.css";
import { Paper } from "@mui/material";
import MenuItemsDisplay from "./menuitemsdisplay";

const menucard = () => {
  return (
    <div className="menu">
        <div className='left-section'>
            <>
              <Paper sx={{ padding: [5, 2], marginBottom: '10px', backgroundColor:'transparent', minHeight:'100vh'}}>
              </Paper>
            </>
        </div>
        <div className='right-section'>
            <>
              <Paper sx={{ padding: [5, 2], marginBottom: '10px',backgroundColor:"transparent",minHeight:'100vh',minWidth:'160vh' }}>
              <MenuItemsDisplay/>
              </Paper>
            </>
        </div>
    </div>
  );
};

export default menucard;
