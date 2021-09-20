import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './buttons.css'
function Buttons(){
	return (

		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Buttons</h4>
				<div className=' pb-4 bg-color'>
					<h5 className='pt-3 mb-4 mx-4'>Buttons Examples</h5>
					<div className='row  text-center '>

							<div className='col-md-3'>
								
									<div className='m-b'>
										<p className='mb-2 text-muted'>Secondary Button</p>
										<button type="button" class="btn btn-secondary">Button Secondary</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-secondary</code>

											</small>

										</p>
									</div>
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Warning Button</p>
										<button type="button" class="btn btn-warning">Button Warning</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-warning</code>

											</small>

										</p>
									</div>
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Large Button</p>
										<button type="button" class="btn btn-lg btn-secondary">Button Large</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-lg</code>

											</small>

										</p>
									</div>
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Block Button</p>
										<div class="d-grid mx-3 ">
										  <button class="btn btn-secondary" type="button">Button Block</button>
										 
										</div>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-lg</code>

											</small>

										</p>
									</div>
							</div>		 
							<div className = 'col-md-3'> 
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Primary Button</p>
										<button type="button" class="btn btn-primary">Button Primary</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-primary</code>

											</small>

										</p>
									</div>
										<div  className='m-b'>
										<p className='mb-2 text-muted'>Danger Button</p>
										<button type="button" class="btn btn-danger">Button Danger</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-danger</code>

											</small>

										</p>
									</div>
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Normal Button</p>
										<button type="button" class="btn btn-secondary">Button Normal</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn</code>

											</small>

										</p>
									</div>
									<div  className='m-b'>
										<p className='mb-2 text-muted'>Group Button</p>
										<div class="btn-group" role="group" aria-label="Basic example">
										  <button type="button" class="btn btn-secondary">Left</button>
										  <button type="button" class="btn btn-secondary">Middle</button>
										  <button type="button" class="btn btn-secondary">Right</button>
										</div>
										<p className='text-muted small-text p-1'> 
										<small> 
											Use class 
											<code>.btn-group</code>

										</small>

									</p>
									</div>
							</div>
							
							<div className='col-md-3'>
								 <div  className='m-b'>
									<p className='mb-2 text-muted'>Success Button</p>
									<button type="button" class="btn btn-success">Button Success</button>
									<p className='text-muted small-text p-1'> 
										<small> 
											Use class 
											<code>.btn-success</code>

										</small>

									</p>
								</div>
								<div  className='m-b'>
										<p className='mb-2 text-muted'>Dark Button</p>
										<button type="button" class="btn btn-dark">Button Dark</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-dark</code>

											</small>

										</p>
								</div>
								<div  className='m-b'>
										<p className='mb-2 text-muted'>Small Button</p>
										<button type="button" class="btn btn-secondary btn-sm">Button Small</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-sm</code>

											</small>

										</p>
								</div>
								<div  className='m-b'>
									<p className='mb-2 text-muted'>Icon Button</p>
									<button className='btn btn-secondary'>
										<StarIcon/>
									</button>
									<p className='text-muted small-text p-1'> 
										<small> 
											Use class 
											<code>.btn-group</code>

										</small>

									</p>
								</div>
							</div> 
							<div className = 'col-md-3'> 
								<div  className='m-b'>
									<p className='mb-2 text-muted'>Info Button</p>
									<button type="button" class="btn btn-info">Button Info</button>
									<p className='text-muted small-text p-1'> 
										<small> 
											Use class 
											<code>.btn-info</code>

										</small>

									</p>
								</div>
								<div  className='m-b'>
										<p className='mb-2 text-muted'>Link Button</p>
										<button type="button" class="btn btn-link">Button Link</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-link</code>

											</small>

										</p>
								</div>
								<div  className='m-b'>
										<p className='mb-2 text-muted'>Extra Small Button</p>
										<button type="button" class="btn btn-secondary btn-xs">Button XS</button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-xs</code>

											</small>

										</p>
								</div>
								<div  className='m-b'>
										<p className='mb-2 text-muted'>File Upload Button</p>
										<button type="button" class="fileupload btn btn-secondary">
	                                                <span>Choose File</span>
	                                              	<input type="file" style={{width:'0px'}}/>
	                                    </button>
										<p className='text-muted small-text p-1'> 
											<small> 
												Use class 
												<code>.btn-fileupload</code>

											</small>

										</p>
								</div>
							
							 
							</div>
					</div>


				</div>
			</div>



		</div>
				


	)
}

export default Buttons;