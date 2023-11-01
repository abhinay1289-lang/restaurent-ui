import React, { useEffect } from "react";
import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ResponsiveHeaderBar from "./app-header-footer/app-header";
import { Box } from "@mui/material";
import { getLookupData } from "../service/lookupservice";
import globalObject from "../common/global-variables";
import { LookupTypes } from "../common/lookuptypes";

const getLoginUrl = () => {
  return `/login?from=${btoa(
    window.location.pathname + window.location.search
  )}`;
};

export default function App() {
  const user = JSON.parse(localStorage.getItem("userObject") || "{}");

  useEffect(() => {
    if (Object.keys(user).length !== 0)
      getLookupData("all")
        .then((resp) => {
          globalObject.lookupvalues = resp.data;
          console.log(globalObject.lookupvalues);

          console.log(globalObject.lookupvalues[LookupTypes.BIRYANI]);
        })
        .catch();
  });

  return (
    <>
      {console.log(user)}
      <React.Fragment>
        {Object.keys(user).length !== 0 ? (
          <div id="detail">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <>
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
