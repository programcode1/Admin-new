import React from 'react'
import './progressbar.css'
function Progressbar(){
	return (

		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Progressbars</h4>
				<div className='row bg-color progress-bar-body'>
					<h5 className='pt-3 px-4 mb-4'>Progessbars example</h5>
					<div className='col-md-6 px-4'>
							<h6>Basic Examples</h6>
								<div className='progress-bar-container'>
										<div className='progress'>
											<div class="progress-bar progress-bar-primary" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-success" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-info" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-warning" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
												
											</div>
										</div>
								</div>

								<h6>Sizes Example</h6>
								<div className='progress-bar-container'>


									<div className='progress' style={{height: "5px"}}>
											<div class="progress-bar progress-bar-danger" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-info" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}>
												
											</div>
										</div>
										<div className='progress' style={{height: "14.4px"}}>
											<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>
												
											</div>
										</div>
										<div className='progress' style={{height: "20px"}}>
											<div class="progress-bar progress-bar-warning  progress-bar-striped progress-animated " role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "67%"}}>
												
											</div>
										</div>

								</div>
								<h6>Completed example</h6>
								<div className='progress-bar-container'>


									<div className='progress' style={{height: "15px"}}>
											<div class="progress-bar progress-bar-pink" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
												85%
											</div>
									</div>
									<div className='progress' style={{height: "10px"}}>
											<div class="progress-bar bg-dark" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "56%"}}>
												56%
											</div>
									</div>
									<div className='progress' style={{height: "20px"}}>
											<div class="progress-bar progress-bar-purple " role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "96%"}}>
												96%
											</div>
									</div>
										

								</div>
							
					</div>
					<div className='col-md-6'>
						<h6>Striped Example</h6>
								<div className='progress-bar-container'>
										<div className='progress'>
											<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar bg-dark progress-bar-striped" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
												
											</div>
										</div>
										<div className='progress'>
											<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "81%"}}>
												
											</div>
										</div>
								</div>
								<h6>Animated example</h6>
								<div className='progress-bar-container'>


									<div className='progress'>
											<div class="progress-bar progress-bar-info  progress-bar-striped  progress-animated" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
										
											</div>
									</div>
									<div className='progress'>
											<div class="progress-bar progress-bar-pink  progress-bar-striped  progress-animated" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "48%"}}>
												
											</div>
									</div>
									<div className='progress'>
											<div class="progress-bar progress-bar-primary  progress-bar-striped  progress-animated" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "82%"}}>
												
											</div>
									</div>
									<div className='progress'>
											<div class="progress-bar progress-bar-purple  progress-bar-striped  progress-animated" role="progressbar" 
													aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}>
												
											</div>
									</div>
										

								</div>
								<h6>Stacked example</h6>
								<div class="progress">
	  								<div class="progress-bar progress-bar-striped progress-bar-success" role="progressbar" style={{width: "20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
	  								<div class="progress-bar progress-bar-info" role="progressbar" style={{width: "10%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
	 								 <div class="progress-bar progress-bar-warning progress-bar-striped progress-animated" role="progressbar" style={{width: "15%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
	 								  <div class="progress-bar progress-bar-danger progress-bar-striped progress-animated" role="progressbar" style={{width: "30%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
					</div>
				</div>
			</div>
		</div>	
	)
}				

export default Progressbar;