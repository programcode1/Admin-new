import {Pie} from 'react-chartjs-2';

function PieChart(){

     var pieChart = {
     	labels : [ "Desktops","Tablets","Mobiles"] , 
     	datasets :[
     			{
     				data:[300,50,100] , 
     				backgroundColor: [
                        "#04a2b3",
                        "#00a3ff",
                        "#ebeff2"
                    ],
                    hoverBackgroundColor: [
                        "#04a2b3",
                        "#00a3ff",
                        "#ebeff2"
                    ],
                    // hoverBorderColor: "#fff"
     			}
     		]
     }

    const options = {
        plugins: {
              legend: {labels: {color: "rgba(255,255,255,0.6)"}}
            } , 
        maintainAspectRatio: false

    }

     return <div>
     			<Pie data={pieChart}
								style={{width:'100px' , height:'300px'}}
								options={options}
								/>
     	</div>
}
export default PieChart;