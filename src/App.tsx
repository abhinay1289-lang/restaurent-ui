import React, { useState } from 'react';
import './App.css';
import { Outlet, Navigate } from 'react-router-dom';


const getLoginUrl = () => {
  return `/login?from=${btoa(window.location.pathname + window.location.search)}`;
}; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const [propsLoading, setPropsLoading] = useState(true); 

  return (
    <>
        <React.Fragment>
            <Navigate to={getLoginUrl()} />
        </React.Fragment>
    </>
  );
}