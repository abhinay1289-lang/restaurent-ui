import * as React from "react";
import "./responseapp.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Navigate } from "react-router-dom";
import useNavigate from "../../common/useNavigate";
import { useEffect } from "react";

const ResponsiveAppBar = () => {
  const pages = [
    {
      label: "products",
      link: "/Menucard",
    },
    {
      label: "Pricing",
      link: "/Pricing",
    },
    {
      label: "Dashboard",
      link: "/Dashboard",
    },
  ];

  const settings = [
    {
      label: "Profile",
      link: "/Profile",
    },
    {
      label: "Logout",
      link: "/Login",
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [parentPath, setParentPath] = React.useState("");
  const [navigate, redirect] = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(
        [
          {
            label: "Menucard",
            link: "/menucard",
          },
        ],
        true
      );
    }
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMenuClick = (setting: any) => {
    if (setting.label === "Logout") {
      redirect(setting.link);
    } else {
      navigate(
        [
          {
            ...setting,
          },
        ],
        true
      );
    }
  };

  const handleCloseUserMenu = (event: any) => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    getParentPath(window.location.pathname);
  }, [window.location.pathname]);

  function getParentPath(path: string) {
    const parent = path.slice(1).split("/")[0];
    setParentPath((_prev) => `/${parent}`);
  }

  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box 
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } , borderBottom:'red' }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handleMenuClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={
                    parentPath == page.link
                      ? 'nav-menu-item nav-menu-item-selected'
                      : 'nav-menu-item'
                  }
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div className="user-icon" onClick={handleOpenUserMenu}>
                SA
              </div>

              <Menu
                className="appbar"
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                disableAutoFocusItem
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.label}
                    onClick={() => handleMenuClick(setting)}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
