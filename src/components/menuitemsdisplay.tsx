import { Badge, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Checkbox from "@mui/material/Checkbox";

const Menuitemsdisplay = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ position: "absolute", marginTop: "590px", marginLeft: "58%" }}
      >
        <h2
          style={{ fontFamily: "sans-serif", color: "red", fontSize: "20px" }}
        >
          Biryani
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/biryani.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
      <div
        style={{ position: "absolute", marginTop: "35%", marginLeft: "90px" }}
      >
        <h2
          style={{ fontFamily: "sans-serif", color: "red", fontSize: "20px" }}
        >
          Curries
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/curries.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
      <div
        style={{ marginLeft: "350px", marginRight: "20px", marginTop: "23%" }}
      >
        <h2
          style={{
            fontFamily: "sans-serif",
            color: "red",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          FriedRice & Noodles
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/friedrice.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
      <div
        style={{ marginTop: "5.5%", position: "absolute", marginLeft: "950px" }}
      >
        <h2
          style={{
            fontFamily: "sans-serif",
            color: "red",
            fontSize: "20px",
            marginLeft: "14px",
          }}
        >
          Rice
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/rice.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
      <div style={{ marginTop: "23%", marginLeft: "100px" }}>
        <h2
          style={{
            fontFamily: "sans-serif",
            color: "red",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          Rotis
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/rotis.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
      <div
        style={{
          position: "absolute",
          marginRight: "20px",
          marginLeft: "90px",
          marginTop: "70px",
        }}
      >
        <h2
          style={{ fontFamily: "sans-serif", color: "red", fontSize: "20px" }}
        >
          Starters
        </h2>
        <Badge badgeContent={17} color="error">
          <img
            src={require("../assets/starters.png")}
            alt="Peopletech-Group"
            height={80}
            onClick={handleUserMenu}
          />
        </Badge>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={closeUserMenu}
          disableAutoFocusItem
        >
          <MenuItem
            onClick={() => {
              //   redirect("/settings");
              closeUserMenu();
            }}
          >
            <SettingsIcon sx={{ paddingRight: "10px" }} />
            Settings
          </MenuItem>
          <MenuItem>
            <PowerSettingsNewIcon sx={{ paddingRight: "10px" }} />
            Sign out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Menuitemsdisplay;
