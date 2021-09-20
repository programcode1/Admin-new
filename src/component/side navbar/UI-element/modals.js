import React from 'react'
import './modals.css'
function Modals(){
	return (

		<div className='bg-color-body'> 
			<div className='container'>

				<h4 className='py-3 font-22 text-white' >Modals</h4>
				<div className='bg-color'>
					<h4 className='text-white pt-3 px-3 pb-4'>Modals Examples</h4> 
						<div className='row mb-3 justify-content-center'>
							<div className = 'col-md-7'>
							
							  <div class="modal-width" role="document">
							    <div class="modal-content">
							      <div class="modal-header">
							        <h4 class="modal-title">Modal title</h4>
							        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true"></span>
							        </button>
							      </div>
							      <div class="modal-body">
							        <p className='text-muted'>One fine body…</p>
							      </div>
							      <div class="modal-footer">
							      	 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							        <button type="button" class="btn btn-primary">Save changes</button>
							       
							      </div>
							    </div>
							  </div>
							 </div>
						</div>
							
						
					
					<div className='row  py-4  px-4 text-center'>
					<div className = 'col-md-3'>
						{/*<!-- Button trigger modal -->*/}
						<p className='text-muted modal-p'>Standard Modal</p>
						<button type="button" class="btn btn-primary modal-btn" data-toggle="modal" data-target="#exampleModalLong">
						  Standard Modal
						</button>

						{/*<!-- Modal -->*/}
						<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
						  <div class="modal-dialog" role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title text-dark" id="exampleModalLongTitle">Modal Heading</h5>
						        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true"></span>
						        </button>
						      </div>
						      <div class="modal-body">
						        <h4><b>Overflowing text to show scroll behavior</b></h4>

								<p className='text-muted'>
									Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<p className='text-muted'>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
								</p>
								<p className='text-muted'>
									Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
								</p>
								<p className='text-muted'>
									Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<p className='text-muted'>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
								</p>
								<p className='text-muted'>
									Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
								</p>
								<p className='text-muted'>
									Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								</p>
								<p className='text-muted'>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
								</p>
								<p className='text-muted'>
									Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
						      	</p>

						      </div>
						      <div class="modal-footer">
						        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						        <button type="button" class="btn btn-primary">Save changes</button>
						      </div>
						    </div>
						  </div>
						</div> 

					</div>
					<div className = 'col-md-3'>
						<p className='text-muted modal-p'>Large modal</p>
						<button type="button" class="btn btn-primary modal-btn" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

						<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
							 <div class="modal-dialog modal-lg">

							    <div class="modal-content">
							    	 <div class="modal-header">
							        <h5 class="modal-title text-dark">Large modal</h5>
							        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true"></span>
							        </button>
							      </div>
							      <div class="modal-body">
							        <p>...</p>
							      </div>							      
							    </div>
							 </div>
						</div> 
					</div>

					<div className = 'col-md-3'>
						<p className='text-muted modal-p'>Small Modal</p>
						<button type="button" class="btn btn-primary modal-btn" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

							<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
							  <div class="modal-dialog modal-sm">
							    <div class="modal-content">
							    	<div class="modal-header">
							        <h5 class="modal-title text-dark">Small modal</h5>
							        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
							          <span aria-hidden="true"></span>
							        </button>
							      </div>
							      <div class="modal-body">
							        <p>...</p>
							      </div>
							     
							    </div>
							  </div>
							</div>
					</div>
					
					<div className = 'col-md-3'>
						{/*<!-- Button trigger modal -->*/}
						<p className='text-muted modal-p'>Custom width Modal</p>
						<button type="button" class="btn btn-primary modal-btn" data-toggle="modal" data-target="#exampleCustomwidthModal">
						  Custom width Modal
						</button>

						{/*<!-- Modal -->*/}
						<div class="modal fade" id="exampleCustomwidthModal" tabindex="-1" role="dialog" aria-labelledby="exampleCustomModalTitle" aria-hidden="true" >
						  <div class="modal-dialog custom-width"  role="document">
						    <div class="modal-content">
						      <div class="modal-header">
						        <h5 class="modal-title text-dark" id="exampleCustomModalTitle">Modal Heading</h5>
						        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true"></span>
						        </button>
						      </div>
						      <div class="modal-body" >
						      		<h4>Text in a modal</h4>
						      		<p className='text-muted mb-4'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
						        	<h4><b>Overflowing text to show scroll behavior</b></h4>
						        	<p className='text-muted'>
						        		Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, 
						        		vel scelerisque nisl consectetur et. Donec sed odio dui. 
						        		Donec ullamcorper nulla non metus auctor fringilla.
						        	</p>
								 
						      </div>
						      <div class="modal-footer">
						        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						        <button type="button" class="btn btn-primary">Save changes</button>
						      </div>
						    </div>
						  </div>
						</div> 
					</div>




					</div>
				</div>

			</div>
		</div>


	)
}

export default Modals;