import { Line} from 'react-chartjs-2';

function LineChart(){
	const linedata = {
		labels:['January','February','March','April','May','June','July','Auguset' , 'September' , 'October'] , 
		datasets : [
			{
			      label: "Sales Analytics",
                    fill:false,
                    lineTension: 0.1,
                    backgroundColor: "#00a3ff",
                    borderColor: "#00a3ff",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#00a3ff",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#00a3ff",
                    pointHoverBorderColor: "#eef0f2",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
			} 
	]}
   const options = {
        scales: {
              yAxes: { max:100, min: 20, ticks: {  color:"rgba(255,255,255,0.6)", stepSize:10}} , 
              xAxes : {ticks:{color:"rgba(255,255,255,0.6)"}}
            } ,
        plugins: {
              legend: {labels: {color: "rgba(255,255,255,0.6)"}}
            } , 
        maintainAspectRatio: false

    }

    return <div>
    	<Line data={linedata} 
    		style={{width:'100px' , height:'300px'}}
			options={options}/>
    </div>
}
export default LineChart;