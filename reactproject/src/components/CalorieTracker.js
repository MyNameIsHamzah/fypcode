import React, { useRef, useState, useEffect } from "react";
import { Card, Container, InputGroup, CardGroup, Row, Alert} from "react-bootstrap";
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import {
  getDatabase,
  ref,
  onValue,
  val,
  forEach,
  onChildAdded,
} from "firebase/database";
import TheWeight from "./TheWeight";
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export default function CalorieTracker() {


  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <Container  className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }} >

<Card className="text-center" style={{ width: "20rem" }}>
    <Card.Body>
      <Row>
      <div className="w-100 text-center mt-2" m>
                  <h2>Calorie Tracker</h2>
      </div>
      <div className="w-100 text-center mt-2" m>
      <Alert variant="success">
  <Alert.Heading>Coming Soon!</Alert.Heading>
  <p>
    Thank you for using the Health and Fitness Tracker. This feature
     has not yet been added to the Application.  
  </p>

</Alert>
      </div>
      </Row>
      </Card.Body>
      </Card>
      </Container>
    </>
  );
}
