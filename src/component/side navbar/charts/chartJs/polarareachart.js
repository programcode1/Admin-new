
import { PolarArea } from 'react-chartjs-2';
function PolarAreaChart(){
	var polardata = {
		
			labels:['Series 1' , 'Series 2','Series 3','Series 4'] , 
			datasets : [
				{
					label: 'My dataset', // for legend
					data:[11,
                    16,
                    7,
                    18] , 
					backgroundColor: [
	                    "#f62f37",
                    "#188ae2",
                    "#04a2b3",
                    "#f8ca4e"
	                ],
	               
	                hoverBorderColor: "#fff"
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
		<PolarArea data={polardata}
					style={{width:'100px' , height:'300px'}}
								options={options}/>
	</div>
}

export default PolarAreaChart;