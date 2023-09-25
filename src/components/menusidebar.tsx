import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
const menusidebar = () => {
  return (
    <>
      <nav>
        <div className="sidebar-header">
          <img src={require("../assets/logo.svg")} alt="Logo" height={50} />
          <h2 className="hidden">LOGO</h2>

          <button className="toggle-btn">
            <img src={require("../assets/expand.svg")} alt="" />
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <RestaurantMenuIcon style={{ marginRight: "8px" }} />
          <span className="hidden" onClick={() => menusidebar()}>
            MENU
          </span>
        </div>

        <DashboardIcon style={{ marginRight: "8px" }} />
        <span className="hidden">DASHBOARD</span>

        <div className="sidebar-links">
          <SettingsIcon style={{ marginRight: "8px" }} />
          <span className="hidden">SETTINGS</span>
        </div>

        <div className="user-avatar">
          <AccountCircleIcon style={{ marginRight: "8px" }} />
          <span>PROFILE</span>
        </div>
      </nav>
    </>
  );
};
export default menusidebar;
