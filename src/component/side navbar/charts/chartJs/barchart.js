import { Bar} from 'react-chartjs-2';

function BarChart(){
	 var barChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Sales Analytics",
                    backgroundColor: "#00a3ff",
                    borderColor: "#00a3ff",
                    borderWidth: 1,
                    hoverBackgroundColor: "#00a3ff",
                    hoverBorderColor: "#00a3ff",
                    data: [65, 59, 81, 45, 56, 80, 50,20]
                }
            ]
        };

     const options = {
        scales: {
              yAxes: { max: 90, min: 20, ticks: { color:"rgba(255,255,255,0.6)", stepSize:10}} , 
              xAxes : {ticks:{color:"rgba(255,255,255,0.6)"}}
            } ,
        plugins: {
              legend: {labels: {color: "rgba(255,255,255,0.6)"}}
            } , 
        maintainAspectRatio: false

    }

    return <div>
    	<Bar data={barChart} 
    		style={{width:'100px' , height:'300px'}}
			options={options}/>
    </div>
}
export default BarChart;