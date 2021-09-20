import React from 'react'
import LineChart from './linechart'
import BarChart from './barchart'
import PieChart from './piechart'
import DoughnutChart from './dountchart'
import RadarChart from './radarchart'
import PolarAreaChart from './polarareachart'
function Chart_js(){
	return (
		
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Chart Js</h4>
				<div>
					<div className='row'>
						<div className='col-md-6'>
							<div className='lineChart bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Line Chart</h4>
								<div className=' m-3'>
									<LineChart/>
		           				</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='barChart bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Bar Chart</h4>
								<div className='m-3 px-3'>
									<BarChart/>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<div className='piechart bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Pie Chart</h4>
								<div className='m-3'>
									<PieChart/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className=' bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Doughnut Chart</h4>
								<div className=' m-3'>
									<DoughnutChart/>
								</div>	
							</div>
							
						</div>
						
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<div className='polarchart bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Polar Area Chart</h4>
								<div className='m-3'>
									<PolarAreaChart/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='radarChart bg-color pb-3'>
								<h4 className='pt-3 px-4 pb-2'>Radar Chart</h4>
								<div className=' m-3'>
									<RadarChart/>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
		</div>
		
	)
}

export default Chart_js;