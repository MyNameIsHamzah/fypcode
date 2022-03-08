//https://react-chartjs-2.netlify.app/docs/working-with-datasets/
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
var thedates=[];
var theweights=[];
const TheWeight = ({thedata}) => {


  thedates.push(thedata[1].weightdate)
  theweights.push(thedata[1].weight)

  //console.log(thedates);
  //console.log(theweights);

   return (
   <div>  
           <h3>{thedata[1].weightdate + " " }</h3>
             <h2>{thedata[1].weight}</h2>
             <Line
                    datasetIdKey="id"
                    data={{
                      labels: thedates,
                      datasets: [
                        {
                          id: 1,
                          label: "",
                          data: theweights,
                        },
                
                      ],
                    }}
                  />
             
             
   </div>
   );
   
       
   };
   
   export default TheWeight;