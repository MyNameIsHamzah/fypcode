

  var weightarray = [];
  var weightdatesarray = [];


//https://react-chartjs-2.netlify.app/docs/working-with-datasets/


const TheWeight = ({thedata}) => {

 




    
   
   return (
   <div>  
           <h3>{thedata[1].weightdate + " " }</h3>
             <h2>{thedata[1].weight}</h2>
             
             
   </div>
   );
   
       
   };
   
   export default TheWeight;