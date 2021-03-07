import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './layoutStyle.css';

export const Layout = ({ children }) => (
  <div className = "layout">
    { children }
  </div>
);