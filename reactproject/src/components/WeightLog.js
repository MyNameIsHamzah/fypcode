import React, { useRef, useState} from "react"
import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown, Container, Row, Col, InputGroup, CardGroup } from "react-bootstrap"
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, set, push } from "firebase/database";

import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

var arrofexercises = [];
var arrofdurations = [];
var totalTime = 0;


export default function WeightLog() {
 
    const [inputs, setInputs] = useState({});  
  const { currentUser, logout } = useAuth();

  const db = getDatabase();
  var weightdate = inputs["weightdate"];
  var weight = inputs["weight"];


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

 

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(weightdate);
    console.log(weight);

       push(ref(db, 'users/' + auth.currentUser.uid + 'weighins/'), {
        weightdate: weightdate,
        weight: weight
      });
    


  }


  return (
    <>
      <div>
      <TheNavbar/>
      </div>

  <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>



      <div>
      <CardGroup>
    <Card className = "text-center" style={{ width: '20rem' }} >
      <Card.Body>
      
      <div className="w-100 text-center mt-2" m>
        <h2>Weight Log</h2>
        </div>

        <Form>

        <Form.Group className="mb-3" controlId="date" >
      <Form.Label>Date</Form.Label>
      <InputGroup>
      <Form.Control type="text" className="text-center" name="weightdate"  aria-describedby="basic-addon3"  value={inputs.weightdate || ""} onChange={handleChange} />
      <InputGroup.Text id="basic-addon4">dd/mm/yy</InputGroup.Text>
      </InputGroup>

   </Form.Group>
       
        <Form.Group className="mb-3" controlId="weight">
      <Form.Label>Weight</Form.Label>
      <InputGroup>
      <Form.Control type="weight" className="text-center" name="weight" aria-describedby="basic-addon3"  value={inputs.weight || ""} onChange={handleChange} />
      <InputGroup.Text id="basic-addon5">kg</InputGroup.Text>
      </InputGroup>

    </Form.Group>

    <Row>
    
    <Col>
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Save Weight
    </Button>
    </Col>

    </Row>
  </Form>

 

    </Card.Body>
    </Card>
    </CardGroup>
    
    </div>

      </Container>
    </>
  
  )
}
