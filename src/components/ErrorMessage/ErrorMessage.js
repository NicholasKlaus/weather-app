import React from "react";
import "./errorMessageStyle.css";
import {Link} from 'react-router-dom';
import {ROUTES} from "../../constants/routes";
import { Alert } from "react-bootstrap";

export const ErrorMessage = () => (
  <Alert variant='danger' className="e-message__wrap">
    <h2>Error! Something went wrong!</h2>
    <span>Please click <Link to={ROUTES.LANDING}>here</Link> to return to the search</span>
  </Alert>
)