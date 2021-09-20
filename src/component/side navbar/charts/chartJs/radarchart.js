import {Radar} from 'react-chartjs-2';

function RadarChart(){
	var radarchart = {
		labels : ["Eating","Drinking" , "Sleeping" , "Designing","Coding","Cycling","Running"] , 
		datasets:[
			{
				label:"Desktops" , 
				backgroundColor:'rgba(179,181,198,0.2)',
				borderColor: "rgba(179,181,198,1)",
				pointBackgroundColor:"rgba(179,181,198,1)",
				pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
			} , 
			{
				label:"Tablets",
				backgroundColor: "rgba(230,96,96,0.2)",
                borderColor: "#00a3ff",
                pointBackgroundColor: "#00a3ff",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#00a3ff",
                data: [28, 48, 40, 19, 96, 27, 100]
			}

		]
	}

	const options = {
        plugins: {
              legend: {labels: {color: "rgba(255,255,255,0.6)"}}
            } ,
        scales: { 
        	r: { 

        		pointLabels: { color: '#fff' }  , grid: {color:'rgba(0,0,0,0.2)'} ,  angleLines: { color: 'rgba(0,0,0,0.2)'}
        	}
		
		} ,
          
        maintainAspectRatio: false

    }
	return <div>

		<Radar data={radarchart}
			style={{width:'100px' , height:'300px'}}
			options={options}/>
	</div>
}

export default RadarChart;