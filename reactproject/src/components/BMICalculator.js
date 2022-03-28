import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Row,
  Col,
  InputGroup,
  CardGroup,
  ref,
} from "react-bootstrap";
import axios from "axios";
import TheNavbar from "./Navbar";

export default function BMICalculator() {
  const [inputs, setInputs] = useState({});
  const [apiData, setApiData] = useState("");
  const [verdict, setVerdict] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();

    var Age = inputs["age"];
    var Height = inputs["height"];
    var Weight = inputs["weight"];

    axios
      .get(
        `https://fitness-and-health-web-backend.herokuapp.com/api/v1/calculate/BMI?weight=` +
          Weight +
          `&height=` +
          Height
      )
      .then((res) => {
        setApiData(res.data);
        if (res.data > 25 && res.data < 30) {
          setVerdict("Overweight");
          setSuggestion(
            "It is advised to enter a caloric deficit, in order achieve a more healthier weight with a BMI less than 25."
          );
        } else if (res.data < 18) {
          setVerdict("Underweight");
          setSuggestion(
            "It is advised to enter a caloric surplus, in order achieve a more healthier weight with a BMI above 18, but less than 25."
          );
        } else if (res.data > 18 && res.data < 25) {
          setVerdict("Normal Weight");
          setSuggestion(
            "It is advised to stay close to a caloric maintenance, in order to maintain a healthy weight."
          );
        } else {
          setVerdict("Obese");
          setSuggestion(
            "It is advised to enter a caloric deficit, in order achieve a more healthier weight with a BMI less than 25."
          );
        }
      });
  };

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
          <Card className="text-center" style={{ width: "20rem" }}>
            <Card.Body>
              <div className="w-100 text-center mt-2" m>
                <h2>BMI Calculator</h2>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Age">
                  <Form.Label>Age</Form.Label>
                  <InputGroup hasValidation>
                  
                    <Form.Control
                      type="text"
                      name="age"
                      placeholder="20"
                      required
                      aria-describedby="basic-addon"
                      value={inputs.age || ""}
                      onChange={handleChange}
                    />
                    <InputGroup.Text id="basic-addon">years</InputGroup.Text>
                   <Form.Control.Feedback type="invalid">
                     Please enter an age
                     </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Height">
                  <Form.Label>Height</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="height"
                      placeholder="1.8"
                      aria-describedby="basic-addon2"
                      required
                      value={inputs.height || ""}
                      onChange={handleChange}
                    />
                    <InputGroup.Text id="basic-addon2">metres</InputGroup.Text>

                     <Form.Control.Feedback type="invalid">
                     Please enter a height
                     </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Weight">
                  <Form.Label>Weight</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="weight"
                      name="weight"
                      placeholder="65"
                      aria-describedby="basic-addon3"
                      required
                      value={inputs.weight || ""}
                      onChange={handleChange}
                    />
                    <InputGroup.Text id="basic-addon3">kg</InputGroup.Text>
                     <Form.Control.Feedback type="invalid">
                     Please enter a weight
                     </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Calculate
                </Button>

                <div className="w-100 text-center mt-2">
                  <h2>Result</h2>
                </div>

                <Form.Group className="mb-3" controlId="BMI">
                  <Form.Label class>BMI</Form.Label>
                  <InputGroup>
                    <Form.Control
                      readOnly
                      defaultValue={apiData}
                      type="BMI"
                      placeholder=""
                      aria-describedby="basic-addon5"
                    />
                    <InputGroup.Text id="basic-addon5">kg/m²</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Form>
              <div className="w-100 text-center mt-2">
                <p>{verdict}</p>
                <p>{suggestion}</p>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
