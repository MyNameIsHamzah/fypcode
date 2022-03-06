import React, { useRef, useState} from "react"
import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown, Container, Row, Col, InputGroup, CardGroup } from "react-bootstrap"
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, set, push } from "firebase/database";

var arrofexercises = [];
var arrofdurations = [];
var totalTime = 0;


export default function ExerciseLog() {
  const [inputs, setInputs] = useState({});  
  const { currentUser, logout } = useAuth();

  const db = getDatabase();
  var exerciseName = inputs["exercise"];
  var duration = inputs["duration"];
  var date = inputs["date"];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleAdd = (event) => {
    event.preventDefault();
     
  
    arrofexercises.push(exerciseName);
    arrofdurations.push(duration);
    

    totalTime = parseInt(totalTime) + parseInt(duration);
    

  }

  const handleSubmit = (event) => {
    event.preventDefault();


    push(ref(db, 'users/' + auth.currentUser.uid), {
        date: date,
        exercises: arrofexercises,
        durations: arrofdurations,
        totalDuration: totalTime
      });
      totalTime = 0;
      arrofexercises = [];
      arrofdurations = [];

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
        <h2>Exercise Log</h2>
        </div>

        <Form>

        <Form.Group className="mb-3" controlId="date" >
      <Form.Label>Date</Form.Label>
      <InputGroup>
      <Form.Control type="text" className="text-center" name="date"  aria-describedby="basic-addon3"  value={inputs.date || ""} onChange={handleChange} />
      <InputGroup.Text id="basic-addon4">dd/mm/yy</InputGroup.Text>
      </InputGroup>

   </Form.Group>
       
        <Form.Group className="mb-3" controlId="exercise">
      <Form.Label>Exercise Name</Form.Label>
      <Form.Control type="exercise" className="text-center" name="exercise" aria-describedby="basic-addon3"  value={inputs.exercise || ""} onChange={handleChange} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="duration">
      <Form.Label>Duration</Form.Label>
      <InputGroup>
      <Form.Control type="text"  className="align-right" name="duration" aria-describedby="basic-addon4" value={inputs.duration || ""} onChange={handleChange}/>
      <InputGroup.Text id="basic-addon4">minutes</InputGroup.Text>
      </InputGroup>
    </Form.Group>
  
 

    <Row>
    
    <Col>
    <Button variant="primary" type="submit" onClick={handleAdd}>
      Add Exercise
    </Button>
    </Col>

    <Col>
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Save Workout
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
