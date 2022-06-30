import React, { useRef, useState, useEffect } from "react";
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
} from "react-bootstrap";
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
  orderByChild,
} from "firebase/database";
import TheWorkout from "./TheWorkout";

export default function ViewCalorieDiary() {
  const { currentUser, logout } = useAuth();

  const db = getDatabase();

 
  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <div className="w-100 text-center mt-2" m>
                  <h1>Calorie Diary</h1>
                </div>
      <Container  style={{ width: "20rem" }}>
        <div>
      
               

        <div className="w-100 text-center mt-2" m>
                <Card>
        <h3>15/04/2022</h3>
        <p>Calorie Target: 2200kcal<br></br>      </p>
        <li>Milk: 200kcal</li>
        <li>Bread: 200kcal</li>
        <p>Total Calories: 400kcal</p>        
          </Card>
        </div>

        
        <div className="w-100 text-center mt-2" m>
                <Card>
        <h3>16/04/2022</h3>
        <p>Calorie Target: 2200kcal<br></br>      </p>
        <li>Milk: 200kcal</li>
        <li>Cereal: 300kcal</li>
        <li>Pasta Bolognese: 600kcal</li>
        <li>Chicken Curry: 500kcal</li>
        <li>Bread Rolls: 300kcal</li>
        <li>Pepsi: 200kcal</li>
        <p>Total Calories: 2100kcal</p>        
          </Card>
        </div>
       
        </div>
      </Container>
    </>
  );
}
