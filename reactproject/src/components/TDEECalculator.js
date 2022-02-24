import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  InputGroup, CardGroup
} from "react-bootstrap";
import axios from "axios";

import TheNavbar from "./Navbar";

export default function TDEECalculator() {

  const [inputs, setInputs] = useState({});
  const [apiData, setApiData] = useState("");
  const [cutting, setCutting] = useState("");
  const [bulking, setBulking] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    var Age = inputs["age"];
    var Height= inputs["height"]
    var Weight = inputs["weight"]
    var Gender = inputs["gender"]
    var ActivityLevel = inputs["activitylevel"]

    axios.get(`http://localhost:8080/api/v1/calculate/TDEE?weight=`+Weight+`&height=`+Height+`&age=`+Age+`&gender=`+Gender+`&activitylevel=` + ActivityLevel)
    .then(res => {
      setApiData(res.data)
      setCutting(res.data - 500)
      setBulking(res.data + 500)
      
  })
  }

  return (
    <>
      <div>
        <TheNavbar />
      </div>


      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <CardGroup>
    <Card className = "text-center" style={{ width: '20rem' }} >
      <Card.Body>
      <div className="w-100 text-center mt-2" m>
        <h2>TDEE Calculator</h2>
        </div>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="Age">
      <Form.Label>Age</Form.Label>
      <InputGroup>
      <Form.Control type="text" name="age" placeholder="20" aria-describedby="basic-addon" 
      value={inputs.age || ""} 
      onChange={handleChange}/>
      <InputGroup.Text id="basic-addon">years</InputGroup.Text>
      </InputGroup>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="Height">
      <Form.Label>Height</Form.Label>
      <InputGroup>
      <Form.Control type="height" name="height" placeholder="1.8" aria-describedby="basic-addon2" 
      value={inputs.height || ""} 
      onChange={handleChange}/>
      <InputGroup.Text id="basic-addon2">metres</InputGroup.Text>
      </InputGroup>
    </Form.Group>

    <Form.Group className="mb-3" controlId="Weight">
      <Form.Label>Weight</Form.Label>
      <InputGroup>
      <Form.Control type="weight" name="weight" placeholder="65" aria-describedby="basic-addon3"  
      value={inputs.weight || ""}        
      onChange={handleChange}/>
      <InputGroup.Text id="basic-addon3">kg</InputGroup.Text>
      </InputGroup>
    </Form.Group>


    <Form.Group className="mb-3" controlId="activitylevel">
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="male" 
      name="gender"
      value={inputs.gender || ""}        
      onChange={handleChange}
      >
      <option value="nothing">Open this select menu</option>
       <option value="male">Male</option>
       <option value="female">Female</option>
      </Form.Select>
      </Form.Group>

    <Form.Group className="mb-3" controlId="activitylevel">
      <Form.Label>Activity Level</Form.Label>
      <Form.Select aria-label="Default select example" 
      name="activitylevel"
      value={inputs.activitylevel || ""}        
      onChange={handleChange}
      >
        <option value="nothing">Open this select menu</option>
       <option value="sedentary">Sedentary (office job)</option>
       <option value="light exercise">Light Exercise (1-2 days/week)</option>
       <option value="moderate exercise">Moderate Exercise (3-5 days/week)</option>
       <option value="heavy exercise">Heavy Exercise (6-7 days/week)</option>
       <option value="athlete">Athlete (2x per day)</option>
      </Form.Select>

      
    </Form.Group>


    <Button variant="primary" type="submit">
      Calculate
    </Button>


    
  </Form>



  </Card.Body>
  </Card>

  
<Card className = "text-center" style={{ width: '20rem' }} >
      <Card.Body>
  <div className="w-100 text-center mt-2">
        <h2>Result</h2>
        </div>
       
        <div className="w-100 text-center mt-2">
        <p>The results show a number of daily calorie estimates that can be used as a guideline for how many calories to consume each day to maintain, lose, or gain weight at a 0.5kg/week.</p>
        </div>
    <Form.Group className="mb-3" controlId="Maintenance Calories">
      <Form.Label class>Maintenance Calories</Form.Label>
      <InputGroup>
      <Form.Control   readOnly defaultValue={apiData} type="maintenance" placeholder="" aria-describedby="basic-addon5"  />
      <InputGroup.Text id="basic-addon5">kcal</InputGroup.Text>
      </InputGroup>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="Cutting Calories">
      <Form.Label class>Cutting Calories</Form.Label>
      <InputGroup>
      <Form.Control   readOnly defaultValue={cutting} type="cutting" placeholder="" aria-describedby="basic-addon5"  />
      <InputGroup.Text id="basic-addon5">kcal</InputGroup.Text>
      </InputGroup>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="Bulking Calories">
      <Form.Label class>Bulking Calories</Form.Label>
      <InputGroup>
      <Form.Control   readOnly defaultValue={bulking} type="bulking" placeholder="" aria-describedby="basic-addon5"  />
      <InputGroup.Text id="basic-addon5">kcal</InputGroup.Text>
      </InputGroup>
    </Form.Group>
    
</Card.Body>
  </Card>

    </CardGroup>
        </Container>
    </>
  );
}
