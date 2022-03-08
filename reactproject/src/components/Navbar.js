import React, { useState } from "react";
import {
  Card,
  Button,
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function TheNavbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Health and Fitness Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Calculators" id="basic-nav-dropdown">
                <NavDropdown.Item href="/BMICalculator">
                  BMI Calculator
                </NavDropdown.Item>
                <NavDropdown.Item href="/TDEECalculator">
                  TDEE Calculator
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Exercise Tracker" id="basic-nav-dropdown2">
                <NavDropdown.Item href="/ExerciseLog">
                  Exercise Log
                </NavDropdown.Item>
                <NavDropdown.Item href="/ViewWorkouts">
                  Previous Workouts
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Weight Tracker" id="basic-nav-dropdown3">
                <NavDropdown.Item href="/WeightLog">
                  Weight Log
                </NavDropdown.Item>
                <NavDropdown.Item href="/WeightProgress">
                  Progress
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/CalorieTracker">Calorie Tracker</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TheNavbar;
