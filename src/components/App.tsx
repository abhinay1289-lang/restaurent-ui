import React, { useState } from "react";
import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import Menucard from "./menu/menucard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ResponsiveAppBar from "./app-header/app-header";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const getLoginUrl = () => {
  return `/login?from=${btoa(
    window.location.pathname + window.location.search
  )}`;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [propsLoading, setPropsLoading] = useState(true);
  return (
    <>
      <React.Fragment>
        <div id="detail">
          <LocalizationProvider>
            <>
              <ResponsiveAppBar />
              <div>
                <Box sx={{ padding: [0, 1] }}>
                  <Outlet />
                </Box>
              </div>
            </>
          </LocalizationProvider>
        </div>

        {/* <Navigate to={getLoginUrl()} /> */}
        {/* <div>
          <ResponsiveAppBar />
          <Menucard />
        </div> */}
      </React.Fragment>
    </>
  );
}
