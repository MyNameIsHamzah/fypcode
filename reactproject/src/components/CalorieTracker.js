import React, { useRef, useState, useEffect } from "react";
import { Card, Container, InputGroup, CardGroup, Row, Alert, Form, Col, Button} from "react-bootstrap";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export default function CalorieTracker() {

  const [startDate, setStartDate] = useState(new Date());
  const [inputs, setInputs] = useState({});  

  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>

<div>
      <CardGroup>
    <Card className = "text-center" style={{ width: '20rem' }} >
      <Card.Body>
      
      <div className="w-100 text-center mt-2" m>
        <h2>Calorie Tracker</h2>
        </div>

        <Form>

        <div className="mb-3">
        <DatePicker 
        className = "text-center"
        dateFormat="dd/MM/yyyy"
        maxDate={moment().toDate()}
        selected={startDate}
         onSelect={(date) => setStartDate(date)} />
        </div>
        <Form.Group className="mb-3" controlId="weight">
      <Form.Label>Daily Calorie Goal </Form.Label>
      <InputGroup hasValidation>
      <Form.Control type="text" className="text-center" required name="weight" aria-describedby="basic-addon3"  value={inputs.weight || ""}  />
      <InputGroup.Text id="basic-addon5">kcal</InputGroup.Text>

      <Form.Control.Feedback type="invalid">
                     Please enter a weight
                     </Form.Control.Feedback>
      </InputGroup>

      </Form.Group>
       
      <Form.Group className="mb-3" controlId="weight">
      <Form.Label>Food </Form.Label>
      <InputGroup hasValidation>
      <Form.Control type="text" className="text-center" required name="weight" aria-describedby="basic-addon3"  value={inputs.weight || ""}  />
      <Form.Control.Feedback type="invalid">
                     Please enter a weight
                     </Form.Control.Feedback>
      </InputGroup>

      </Form.Group>


    <Form.Group className="mb-3" controlId="weight">
      <Form.Label>Calories </Form.Label>
      <InputGroup hasValidation>
      <Form.Control type="text" className="text-center" required name="weight" aria-describedby="basic-addon3"  value={inputs.weight || ""}  />
      <InputGroup.Text id="basic-addon5">kcal</InputGroup.Text>
      <Form.Control.Feedback type="invalid">
                     Please enter a weight
                     </Form.Control.Feedback>
      </InputGroup>

    </Form.Group>

    <Row>
    
    <Col>
    <Button variant="primary" type="submit" >
      Add Food
    </Button>
    </Col>

    <div className="w-100 text-center mt-2" m>
    <p>Total Daily Calories: </p>
    </div>
    </Row>


  </Form>

 

    </Card.Body>
    </Card>
    </CardGroup>
    
    </div>
      </Container>
    </>
  );
}
