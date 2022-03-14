import { Form, Button, Card, Alert, Nav, Navbar, NavDropdown, Container, Row, Col, InputGroup, CardGroup } from "react-bootstrap"

const TheWorkout = ({thedata}) => {

 var newArray = thedata[1].exercises.map((e, i) => e + ": " + thedata[1].durations[i] + " mins " )



return (
<div> 
<Container>

<Card>
<h3>{thedata[1].date + " " }</h3>
          {newArray.map((thedata)=> <li>{thedata}</li>)}
          {"total workout time: " + thedata[1].totalDuration + " mins"}<br></br>  
          </Card>
          </Container>   
</div>

);

    
};

export default TheWorkout;