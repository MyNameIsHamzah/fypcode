const TheWorkout = ({thedata}) => {

 var newArray = thedata[1].exercises.map((e, i) => e + ": " + thedata[1].durations[i] + " mins " )
 console.log(newArray)

return (
<div>  
        <h3>{thedata[1].date + " " }</h3>
          {newArray.map((thedata)=> <li>{thedata}</li>)}
          {"total workout time: " + thedata[1].totalDuration + " mins"}<br></br>  
          
</div>
);

    
};

export default TheWorkout;