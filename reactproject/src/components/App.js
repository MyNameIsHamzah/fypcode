import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Switch from "react-router-dom"

import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import BMICalculator from "./BMICalculator";
import TDEECalculator from "./TDEECalculator";

function App() {
  return (
    <Container>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Dashboard}
                title="Dashboard"
              />
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
                title="Profile"
              />
              <PrivateRoute
                exact
                path="/BMICalculator"
                component={BMICalculator}
                title="BMI Calculator"
              />
              <PrivateRoute
                exact
                path="/TDEECalculator"
                component={TDEECalculator}
                title="TDEE Calculator"
              />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} title="Signup" />
              <Route path="/login" component={Login} title="Login" />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;