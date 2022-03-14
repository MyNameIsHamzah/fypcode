import React, { useRef, useState} from "react"
import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown, Container, Row, Col, InputGroup, CardGroup } from "react-bootstrap"
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, set, push } from "firebase/database";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { registerLocale, setDefaultLocale, dateFormat } from  "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
setDefaultLocale('enGB')
toast.configure()


var arrofexercises = [];
var arrofdurations = [];
var totalTime = 0;


export default function WeightLog() {
 
    const [inputs, setInputs] = useState({});  
  const { currentUser, logout } = useAuth();
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const db = getDatabase();
  var weightdate = inputs["weightdate"];
  var weight = inputs["weight"];



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();

    setValidated(true);

    console.log(weightdate);
    console.log(weight);

    if((weight != null)&&(weight != '')){

    var thedate = moment(startDate).format('DD/MM/YYYY');
       push(ref(db, 'users/' + auth.currentUser.uid + 'weighins/'), {
        weightdate: thedate,
        weight: weight
      });

      toast.success("Weight Logged ");


  }
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

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <div className="mb-3">
        <DatePicker 
        className = "text-center"
        dateFormat="dd/MM/yyyy"
        maxDate={moment().toDate()}
        selected={startDate}
         onSelect={(date) => setStartDate(date)} />
        </div>
       
        <Form.Group className="mb-3" controlId="weight">
      <Form.Label>Weight</Form.Label>
      <InputGroup hasValidation>
      <Form.Control type="text" className="text-center" required name="weight" aria-describedby="basic-addon3"  value={inputs.weight || ""} onChange={handleChange} />
      <InputGroup.Text id="basic-addon5">kg</InputGroup.Text>
      <Form.Control.Feedback type="invalid">
                     Please enter a weight
                     </Form.Control.Feedback>
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
