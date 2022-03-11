import React, { useRef, useState} from "react"
import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown, Container, Row, Col, InputGroup, CardGroup } from "react-bootstrap"
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, set, push } from "firebase/database";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { registerLocale, setDefaultLocale, dateFormat, addDays, maxDate, subDays} from  "react-datepicker";
setDefaultLocale('enGB')

var arrofexercises = [];
var arrofdurations = [];
var totalTime = 0;


export default function ExerciseLog() {
  const [inputs, setInputs] = useState({});  
  const { currentUser, logout } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [validated, setValidated] = useState(false);



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
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();

    setValidated(true);
    arrofexercises.push(exerciseName);
    arrofdurations.push(duration);
    totalTime = parseInt(totalTime) + parseInt(duration);
  
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var thedate = moment(startDate).format('DD/MM/YYYY');

    console.log(thedate);

    push(ref(db, 'users/' + auth.currentUser.uid), {
        date: thedate,
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

        <Form noValidate validated={validated} onSubmit={handleAdd} >
<div className="mb-3">
        <DatePicker 
        className = "text-center"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        maxDate={moment().toDate()}
      
        onSelect={(date) => setStartDate(date)}

         />
</div>
      {/*<Form.Group className="mb-3" controlId="date" >
      <Form.Label>Date</Form.Label>
      <InputGroup>
      <Form.Control type="text" className="text-center" name="date"  aria-describedby="basic-addon3"  value={inputs.date || ""} onChange={handleChange} />
      <InputGroup.Text id="basic-addon4">dd/mm/yy</InputGroup.Text>
      </InputGroup>

  </Form.Group>*/}
       
      <Form.Group className="mb-3" controlId="exercise">
      <Form.Label>Exercise Name</Form.Label>
      <Form.Control 
      type="text"
       className="text-center"
        name="exercise" 
        required
        aria-describedby="basic-addon3"  
        value={inputs.exercise || ""} 
        onChange={handleChange}
         />
         <Form.Control.Feedback type="invalid">
                     Please enter an exercise
                     </Form.Control.Feedback>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="duration">
      <Form.Label>Duration</Form.Label>
      <InputGroup>
      <Form.Control type="text"
        className="align-right"
         name="duration"
         required 
         aria-describedby="basic-addon4"
           value={inputs.duration || ""}
            onChange={handleChange}/>
      <InputGroup.Text id="basic-addon4">minutes</InputGroup.Text>
      <Form.Control.Feedback type="invalid">
                     Please enter a duration
                     </Form.Control.Feedback>
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
