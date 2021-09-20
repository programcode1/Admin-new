import {Doughnut} from 'react-chartjs-2';

function DoughnutChart(){
	var doughnutchart = {
		labels: [
                "Desktops",
                "Tablets",
                "Mobiles"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
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
                    hoverBorderColor: "#fff"
                }]
	}

    const options = {
        plugins: {
              legend: {labels: {color: "rgba(255,255,255,0.6)"}}
            } , 
        maintainAspectRatio: false

    }
	return <div>
		<Doughnut data = {doughnutchart}
			style={{width:'100px' , height:'300px'}}
			options={options}/>
	</div>
}
export default DoughnutChart;