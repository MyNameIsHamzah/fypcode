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
        const getWorkout = ref(db, "users/" + auth.currentUser.uid);
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

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <CardGroup>
            <Card className="text-center" style={{ width: "20rem" }}>
              <Card.Body>
                <div className="w-100 text-center mt-2" m>
                  <h1>Past Workouts</h1>
                </div>

                <div>
                  <WorkoutDisplay />
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </>
  );
}
