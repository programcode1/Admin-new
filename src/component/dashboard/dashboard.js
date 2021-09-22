import React,{useState} from 'react'
import './dashboard.css'
import {ArrowDownward , ArrowUpward} from '@material-ui/icons/';
import DonutChart from 'react-donut-chart';



function Dashboard(){

	return (

		<div className='bg-color-body'> 

			
			<div className='container'>
				<h4 className='text-white font-22 py-4'>Dashboard</h4>
				<div className='row text-center'>
					<div className='col-sm-6 col-lg-3'> 
						<div className='panel text-center bg-color'>
							<div className='panel-heading'>
								<h4 className='text-muted'>
									Total Subscription 
								</h4> 
							</div>
							<div className='panel-body'>
								<h2 className='text-white'> 
									<ArrowDownward style={{fontSize:30,color:'red'}}/>
									<b>8952</b>
								</h2> 
								<p className='text-muted small-text-size'>
									<b>48%</b> From Last 24 Hours
								</p>

							</div> 
						</div>
						
					</div> 
					<div className='col-sm-6 col-lg-3 '> 
						<div className='panel text-center bg-color'>
							<div className='panel-heading' >
								<h4 className='text-muted'>
									Order Status
								</h4> 
							</div>
							<div className='panel-body'>
								<h2 className='text-white'> 
									<ArrowUpward  style={{fontSize:30,color:'lightgreen'}}/>
									<b>6521</b>
								</h2> 
								<p className='text-muted small-text-size'>
									<b>42%</b> Orders in Last 10 months
								</p>

							</div> 
						</div>
					</div> 
					<div className='col-sm-6 col-lg-3'> 
						<div className='panel text-center bg-color'>
							<div className='panel-heading'>
								<h4 className='text-muted'>
									Unique Visitors
								</h4> 
							</div>
							<div className='panel-body'>
								<h2 className='text-white'> 
									<ArrowUpward style={{fontSize:30,color:'lightgreen'}}/>
									<b>452</b>
								</h2> 
								<p className='text-muted small-text-size'>
									<b>22%</b> From Last 24 Hours
								</p>

							</div> 
						</div>
					</div> 
					<div className='col-sm-6 col-lg-3'> 
						<div className='panel text-center bg-color'>
							<div className='panel-heading'>
								<h4 className='text-muted'>
									Monthly Earnings
								</h4> 
							</div>
							<div className='panel-body'>
								<h2 className='text-white'> 
									<ArrowDownward style={{fontSize:30,color:'red'}}/>
									<b>5621</b>
								</h2> 
								<p className='text-muted small-text-size'>
									<b>35%</b>  From Last 1 Month
								</p>

							</div> 
						</div> 
					</div> 
				</div>



				{/*this chart section*/}
				<div className='row  justify-content-center'>
					<div className='col-md-4'> 
						<div className='chart-section  bg-color'>
							<div className='chart-heading text-white'>
								<h5>Email Sent</h5>
							</div>
							
							<div className='chart-body text-center'>
								<ul className='chart-list text-white text-center'> 
									<li>  

										<h5>3654</h5>
										<p className='text-muted'>Marketplace</p>

									</li>
									<li>  

										<h5>954</h5>
										<p className='text-muted'>Last week</p>

									</li>
									<li>  

										<h5>8462</h5>
										<p className='text-muted'>Last Month</p>

									</li> 
								</ul>
								<div className='dount-div text-center'> 
										<DonutChart
										    data={[{
										        label: 'Download sales ',
										        value: 12
										        
										    },
										    {
										        label: 'Mail-order sales',
										        value: 20
										        
										        
										    },
										    {
										        label: 'In-store sales',
										        value: 30
										        
										        
										    }]} legend={false} width={150} height={150} 


										    	selectedOffset = {0.07}
										    	startAngle = {20}
										    	className='dountchart'  innerRadius='0.63' 
										    	strokeColor={'none'}
										    	formatValues = {(values) => `${(values).toFixed(0)}`} 
										    	colors ={["#dcdcdc" ,"#04a2b3","#e66060"]}
										    />



								</div> 
							</div> 
						</div>
					</div>

					
					<div className='col-md-4'> 
						<div className='chart-section  bg-color'>
							<div className='chart-heading text-white'>
								<h5>Email Sent</h5>
							</div>
							
							<div className='chart-body text-center'>
								<ul className='chart-list text-white text-center'> 
									<li>  

										<h5>3654</h5>
										<p className='text-muted'>Marketplace</p>

									</li>
									<li>  

										<h5>954</h5>
										<p className='text-muted'>Last week</p>

									</li>
									<li>  

										<h5>8462</h5>
										<p className='text-muted'>Last Month</p>

									</li> 
								</ul>
								<div id="myfirstchart" style={{height:250}}></div> 
							</div> 
						</div>

						
					</div>
					<div className='col-md-4'> 
						<div className='chart-section  bg-color'>
							<div className='chart-heading text-white'>
								<h5>Email Sent</h5>
							</div>
							
							<div className='chart-body text-center'>
								<ul className='chart-list text-white text-center'> 
									<li>  

										<h5>3654</h5>
										<p className='text-muted'>Marketplace</p>

									</li>
									<li>  

										<h5>954</h5>
										<p className='text-muted'>Last week</p>

									</li>
									<li>  

										<h5>8462</h5>
										<p className='text-muted'>Last Month</p>

									</li> 
								</ul>
								<div id="myfirstchart" style={{height:250}}></div> 
							</div> 
						</div>

					</div>
				</div>


				
			

			</div>
		</div>




	)
}

export default Dashboard