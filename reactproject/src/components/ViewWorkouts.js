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

export default function ViewWorkouts() {
  const { currentUser, logout } = useAuth();

  const db = getDatabase();

  const WorkoutDisplay = () => {
    const [workout, setWorkout] = useState([]);
    const [nothing, setNothing] = useState([]);

    useEffect(() => {
      (async () => {
        const getWorkout = (ref(db, "users/" + auth.currentUser.uid));
        var thedata;

        onValue(getWorkout, (snapshot) => {
          var data = snapshot.val();

          if (data == null) {
            thedata = [];
          } else {
            thedata = Object.entries(data);
          }

          setWorkout(thedata);
        });
      })();
    }, []);

    if (workout == null || workout.length === 0) {
      return <p>There are no workouts yet!</p>;
    }

    
    return workout.map((workoutDetail) => {
      return <TheWorkout thedata={workoutDetail} />;
    });
  };

  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <div className="w-100 text-center mt-2" m>
                  <h1>Past Workouts</h1>
                </div>
      <Container  style={{ width: "20rem" }}>
        <div>
      
               

                <div className="w-100 text-center mt-2" m>
                  <WorkoutDisplay />
                </div>
       
        </div>
      </Container>
    </>
  );
}
