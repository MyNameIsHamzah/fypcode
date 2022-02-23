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
} from "react-bootstrap";
import TheNavbar from "./Navbar";

export default function TDEECalculator() {
  return (
    <>
      <div>
        <TheNavbar />
      </div>


      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="text-center" >
        <Card.Body>

      <div className="w-100 text-center mt-2">
        <h2>TDEE Calculator</h2>
      </div>
        <Form>
          <Form.Group className="mb-3" controlId="Age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Enter Age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Height">
            <Form.Label>Height</Form.Label>
            <Form.Control type="height" placeholder="Enter Height (M)" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="weight" placeholder="Enter Weight (kg)" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="weight" placeholder="Enter Weight (kg)" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Body>
        </Card>
        </Container>
    </>
  );
}
