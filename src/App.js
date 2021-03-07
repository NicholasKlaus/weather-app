import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {ROUTES} from './constants/routes';
import {
  LandingPage,
  WeatherPage
} from './pages/index';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.WEATHER} component={WeatherPage} />
            <Redirect from="/" to={ROUTES.WEATHER} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
