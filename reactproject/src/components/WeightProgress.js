import React, { useRef, useState, useEffect } from "react";
import { Card, Container, InputGroup, CardGroup } from "react-bootstrap";
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
import TheWeight from "./TheWeight";
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export default function WeightProgress() {
  const { currentUser, logout } = useAuth();

  const db = getDatabase();

  const [data, setData] = useState([]);

  const WeightDisplay = () => {
    useEffect(() => {
      (async () => {
        const getData = ref(db, "users/" + auth.currentUser.uid + "weighins/");
        var thedata;

        onValue(getData, (snapshot) => {
          var data = snapshot.val();

          if (data == null) {
            thedata = [];
          } else {
            thedata = Object.entries(data);
          }

          setData(thedata);
        });
      })();
    }, []);

    if (data == null || data.length === 0) {
      return <p>There are no weight entries!</p>;
    }

    return data.map((weightDetail) => {
      return <TheWeight thedata={weightDetail} />;
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
                  <h1>Weight Progress</h1>
                </div>

                <div>
                  <WeightDisplay />
                </div>

              
              </Card.Body>
            </Card>
          </CardGroup>

          <div>
                  <Line
                    datasetIdKey="id"
                    data={{
                      labels: ["Jun", "Jul", "Aug"],
                      datasets: [
                        {
                          id: 1,
                          label: "",
                          data: [5, 6, 7],
                        },
                
                      ],
                    }}
                  />
                </div>
        </div>
      </Container>
    </>
  );
}
