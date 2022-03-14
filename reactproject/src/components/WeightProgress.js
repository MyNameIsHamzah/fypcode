import React, { useRef, useState, useEffect } from "react";
import { Card, Container, InputGroup, CardGroup, Row } from "react-bootstrap";
import TheNavbar from "./Navbar";
import { app, auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import moment from "moment";

import {
  getDatabase,
  ref,
  onValue,
  val,
  forEach,
  onChildAdded,
} from "firebase/database";
import TheWeight from "./TheWeight";
import { Line, Chart} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export default function WeightProgress() {
  const { currentUser, logout } = useAuth();

  const db = getDatabase();

  const Motivationalmessage = () =>{
    var motivation = ["It does not matter how slowly you go, as long as you don’t stop – Confucius",
    "Don’t let a stumble in the road be the end of your journey",
    "Don’t dig your grave with your own knife and fork",
    "Keep going",
    "When you feel like quitting, think about why you started",
    "The past cannot be changed, the future is yet in your power" ]

    var message = motivation[Math.floor(Math.random() * motivation.length)];

    return (
      <div className="w-100 text-center mt-2" m>
        <p>{message}</p>
        
    </div>);
  
  
  }

  
 
  const WeightDisplay = () => {
    var thedates=[];
    var theweights=[];
    var newArray=[];
   
    const [weightanddate, setWeightanddate] = useState([]);
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
          setWeightanddate(thedata);
        });
      })();
    }, []);

    if ( weightanddate == null || weightanddate.length === 0) {
      return (
        <div className="w-100 text-center mt-2" m>
      <p>There are no weight entries!</p>
      </div>);
    
    
    }
    
    weightanddate.map((weightDetail) => {
      thedates.push(weightDetail[1].weightdate)
      theweights.push(weightDetail[1].weight)



    });

    console.log(thedates);
    console.log(theweights);

   const themap = new Map();

   for(let i = 0; i < thedates.length; i++){
    themap.set(thedates[i], theweights[i]);
 };
  
   console.log(themap);

   const theArr = [...themap];

   console.log(theArr);

    const sortedArray = theArr.sort(function(a,b) {
      a = a[0].split('/').reverse().join('');
      b = b[0].split('/').reverse().join('');
      return a > b ? 1 : a < b ? -1 : 0;
      
      // return a.localeCompare(b);         // <-- alternative 
      
    })

    const sortedMap = new Map(sortedArray);
    console.log(sortedMap)

    const datespls = Array.from(sortedMap.keys());
    const weightspls = Array.from(sortedMap.values());

    const data = {
      labels: datespls,
        label: "date",
        
        datasets: [
          {
            id: 1,
            label: "Weight over time",
            data: weightspls,
        
          },
  
        ]

    };

  
      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Weight in kg'
            }
          }

        }     
      }
    
    

    return (

     
      <Line

      data={data}

      options= {options}

      

      
    />


    );
  };

  return (
    <>
      <div>
        <TheNavbar />
      </div>
      <Container fluid >
      <Row>
      <div className="w-100 text-center mt-2" m>
                  <h1>Weight Progress</h1>
      </div>

      <div>
          <WeightDisplay />
      </div>
      <div>
          <Motivationalmessage />
      </div>
      </Row>
      </Container>
    </>
  );
}
