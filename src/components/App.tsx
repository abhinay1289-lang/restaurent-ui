import React, { useState } from "react";
import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import Menucard from "./products";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ResponsiveHeaderBar from "./app-header-footer/app-header";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ResponseiveFooterBar from "./app-header-footer/app-footer";
import globalObject from "../common/global-variables";

const getLoginUrl = () => {
  return `/login?from=${btoa(
    window.location.pathname + window.location.search
  )}`;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [propsLoading, setPropsLoading] = useState(true);
  const token = globalObject.userObject;
  return (
    <>
      <React.Fragment>
        {token !== null ? (
          <div id="detail">
            <LocalizationProvider>
              <>
                {console.log(token)}
                <ResponsiveHeaderBar />
                <div>
                  <Box>
                    <Outlet />
                  </Box>
                </div>
              </>
            </LocalizationProvider>
          </div>
        ) : (
          <Navigate to={getLoginUrl()} />
        )}
      </React.Fragment>
    </>
  );
}
