import React from 'react'
import './genralelement.css'
function Generale(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-muted Generalform'>

				<h4 className='py-3 font-22'>Form Elements</h4>
				<div className='bg-color mb-4'>
					<div className='row mx-2'>
						<h4 className='my-3 mb-4 '>Checkbox & Radio</h4>

						{/*checkboxes*/}
						<div className='col-md-4'>
							
							<h5 className='mb-3'>Basic Checkboxes</h5>
							<p className='mb-1'>Supports bootstrap brand colors:<code>.checkbox-primary</code>,
								<code>.checkbox-info</code> etc.
							</p>

							{/*checkbox input*/}
							<div className='mx-1 mb-2'>
								<div class="form-check">
  									<input className =" align-middle form-check-input checkbox-default" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Default 
  									</label>
								</div>
								<div class="form-check ">
  									<input className ="form-check-input checkbox-primary " type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Primary
  									</label>
								</div>
								<div class="form-check ">
  									<input className ="form-check-input checkbox-success" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Success
  									</label>
								</div>
								<div class="form-check ">
  									<input className ="form-check-input checkbox-info" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Info
  									</label>
								</div>
								<div class="form-check ">
  									<input className ="form-check-input checkbox-warning" type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Warning
  									</label>
								</div>
								<div class="form-check ">
  									<input className ="form-check-input checkbox-danger" type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Check me out
  									</label>
								</div>


							</div>

							{/*single checkbox*/}
							<p className='mb-1'>Checkboxes without label text 
								<code>.checkbox-single</code>
							</p>
							<div className='mb-3'>
								<div className='mb-2'>
									<input className ="form-check-input checkbox-default" type="checkbox" value="" id="flexCheckDefault" />
								</div>
								<div>
									<input className ="align-middle form-check-input checkbox-primary" type="checkbox" value="" id="flexCheckDefault" checked/>	
								</div>	
							</div>
							

							{/*inline-checkbox*/}
							<p className='mb-2'>Inline checkboxes</p>
							<div className='mx-2'>
								<div className='inline-checkbox'>
									<div class="form-check px-3">
	  									<input className ="form-check-input checkbox-default" type="checkbox" value="" id="flexCheckDefault" />
	 									<label className ="align-middle form-check-label" for="flexCheckDefault">
	    									Inline One 
	  									</label>
									</div>
									<div class="form-check px-4">
	  									<input className ="form-check-input checkbox-success" type="checkbox" value="" id="flexCheckDefault" checked/>
	 									<label className ="align-middle form-check-label" for="flexCheckDefault">
	    									Inline Two
	  									</label>
									</div>
									<div class="form-check px-4">
	  									<input className ="form-check-input checkbox-default" type="checkbox" value="" id="flexCheckDefault"/>
	 									<label className ="align-middle form-check-label" for="flexCheckDefault">
	    									Inline Three 
	  									</label>
									</div>
								</div>
							</div>	
						</div>


						{/*circle check box*/}
						<div className='col-md-4'>
							
							<h5 className='mb-3'>Circled Checkboxes</h5>
							<p className='mb-1'><code>.checkbox-circle</code> for roundness.</p>

							{/*circle checkbox inputs*/}
							<div className='mx-2'>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-default" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Simply Rounded
  									</label>
								</div>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-info" type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Info
  									</label>
								</div>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-primary" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Primary
  									</label>
								</div>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-success" type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Success
  									</label>
								</div>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-warning" type="checkbox" value="" id="flexCheckDefault" />
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Warning
  									</label>
								</div>
								<div class="form-check Circled-checkbox">
  									<input className ="form-check-input checkbox-danger" type="checkbox" value="" id="flexCheckDefault" checked/>
 									<label className ="align-middle form-check-label" for="flexCheckDefault">
    									Danger
  									</label>
								</div>
							</div>
						</div>




						{/*radio box*/}
						<div className='col-md-4'>
							
							<h5 className='mb-3'>Radios Examples</h5>
							<p className='mb-1'>Supports bootstrap brand colors:
								<code>.radio-primary</code>,
								<code>.radio-danger</code>
							</p>
							<div className='mx-2'>
								{/* row two side radio inputs row */}
								<div className='row'>
									<div className = 'col-md-6 big-small'>
										<div class="form-check">
									  		<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
									  		<label class="align-middle form-check-label" for="flexRadioDefault1">
									    		Small
									  		</label>
										</div>
										<div class=" form-check">
									  		<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
									  		<label class="align-middle form-check-label" for="flexRadioDefault2">
									    		Big
									  		</label>
										</div>
									</div>
									<div className = 'col-md-6 next-one'>
										<div class="form-check">
									  		<input class="form-check-input" type="radio" name="nextone" id="flexRadioDefault1"/>
									  		<label class="align-middle form-check-label" for="flexRadioDefault1">
									    		Next
									  		</label>
										</div>
										<div class="form-check">
									  		<input class="form-check-input" type="radio" name="nextone" id="flexRadioDefault2" checked/>
									  		<label class="align-middle form-check-label" for="flexRadioDefault2">
									    		One
									  		</label>
										</div>
									</div>
								</div>
							</div>


							{/*single radio button*/}

							<p className='mb-1 mx-0'>Radios without label text <code>.radio-single</code></p>
							<div className = 'mx-2 mb-3 big-small'>
									<div class="form-check">
									  	<input class="form-check-input" type="radio" name="singleradio" />
									  		
									</div>
									<div class="form-check radio-success">
									  	<input class="form-check-input" type="radio" name="singleradio" checked/>
									  		
									</div>
							</div>
								

							{/*inline radio button*/}
							<p className='mb-1'>Inline radios</p>
						
							<div className = 'mx-1 d-flex'>
								<div class="form-check radio-info">
									<input class="form-check-input" type="radio" name="inline-radio"  checked/>
									<label class="align-middle form-check-label" for="flexRadioDefault1">
									    Inline one
									</label>
								</div>
								<div class="form-check mx-4 big-small">
									<input class="form-check-input" type="radio" name="inline-radio"  />
									<label class="align-middle form-check-label" for="flexRadioDefault2">
									    Inline two
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-color mb-4'>
					<div className='row form-input mx-1'>
							<div className='col-md-12'>
								<h4 className='mt-3 mb-4 mx-2'>Form element</h4>
								<div className='row mb-3 align-items-center'>
									
									<label className='col-md-2 text-end'>Text</label>
									
									<div className='col-md-10'>
										<input type='text' className='form-control' value ='Some text value...'/>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Email</label>
									<div className='col-md-10'>
										<input type='text' className='form-control' placeholder='Email'/>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Password</label>
									<div className='col-md-10'>
										<input type='password' className='form-control' value='Password'/>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Readonly</label>
									<div className='col-md-10'>
										<input type="text" className="form-control"  value="Readonly value" readOnly/>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Disabled</label>
									<div className='col-md-10'>
										<input type='text' className='form-control' value='Disabled value' disabled/>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Placeholder</label>
									<div className='col-md-10'>
										<input type='password' className='form-control' placeholder='placeholder'/>
									</div>
								</div>
								<div className='row mb-3 '>
									<label className='col-md-2 text-end'>Text area</label>
									<div className='col-md-10'>
										<textarea className='form-control' rows='5'> 
										</textarea>
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Static control</label>
									<div className='col-md-10'>
										<p className='form-control-plaintext text-muted'>
											email@example.com
										</p>	
									</div>
								</div>
								<div className='row mb-3 align-items-center'>
									<label className='col-md-2 text-end'>Helping text</label>
									<div className='col-md-7'>
										<input type='text' placeholder='Helping text' className='form-control'/>
										<span className='help-block' > 
											<small> 
												A block of help text that breaks onto a new line and may extent beyond one line.
											</small>
										</span>
											
									</div>
								</div>
								<div className='row mb-3 '>
									<label className='col-md-2 text-end'>Input Select</label>
									<div className='col-md-10'>
									
										    
										    <select className="form-control" id="exampleFormControlSelect1">
											      <option>1</option>
											      <option>2</option>
											      <option>3</option>
											      <option>4</option>
											      <option>5</option>
										    </select>
										 
										
										    <p className='text-white my-2 small'>Multiple select</p>
										    <select multiple class="form-control" id="exampleFormControlSelect2">
											      <option>1</option>
											      <option>2</option>
											      <option>3</option>
											      <option>4</option>
											      <option>5</option>
										    </select>
										
											
									</div>
								</div>
							</div>
							
						
					</div>
				</div>

				{/*inline form */}
				<div className='bg-color mb-4'>
					
					<div className='mx-3 pb-3'>
						<h4 className='pt-3 pb-4'>Inline Form</h4>
						<form className="d-flex form-input align-items-center">
						  	<div class="form-group mb-2">
						    
						    	<input type="text" class="form-control" placeholder ="Enter email"/>
						  	</div>
						  	<div class="form-group mx-sm-3 mb-2">
						    
						    	<input type="password" class="form-control" placeholder="Password"/>
						  	</div>
						  	<div class="form-check mx-3">
  									<input className =" form-check-input checkbox-primary" type="checkbox" value="" id="remeberme" />
 									<label className ="align-middle form-check-label font-w" for="remeberme">
    									Remember me
  									</label>
							</div>
						  	<button type="submit" class="btn btn-success mb-2">Sign in</button>
						 	
						</form>
					</div>
						
				</div>

				{/*forms type*/}
				<div className=''>
					<div className='row'>
						<div className='col-md-6'>
							<div className='bg-color p-3'>
								<h4 className='mb-4 mx-1'>Basic example</h4>
								<form className='form-input mx-1'>
									<div class="form-group mb-3">
   										 <label for="exampleFormControlInput1">Email address</label>
   										 <input type="email" class="form-control mt-1" id="exampleFormControlInput1" placeholder="Email email"/>
 									</div>
 									<div class="form-group mb-3">
   										 <label for="exampleFormControlInput1">Password</label>
   										 <input type="email" class="form-control mt-1" id="exampleFormControlInput1" placeholder="Password"/>
 									</div>
 									<div class="form-check mb-3 mx-1">
  										<input className =" form-check-input checkbox-primary" type="checkbox" value="" id="remeberme" />
 										<label className ="align-middle form-check-label font-w" for="remeberme">
    										Remember me
  										</label>
									</div>
									<button className='btn btn-dark'>Submit</button>	

								</form>
							</div>

							
						</div>
						<div className='col-md-6'>
							<div className='bg-color p-3'>
								<h4 className='mb-4 mx-1'>Horizontal form</h4>
								<form className='form-input'>
									<div className='row mb-3 align-items-center'>
									
										<label className='col-md-3 text-end'>Email</label>
									
										<div className='col-md-9'>
											<input type='text' className='form-control' placeholder='Email'/>
										</div>
									</div>
 									<div className='row mb-3 align-items-center'>
									
										<label className='col-md-3 text-end'>Password</label>
									
										<div className='col-md-9'>
											<input type='text' className='form-control' placeholder='Password'/>
										</div>
									</div>
									<div className='row mb-3'>
									
										<label className='col-md-3 text-end'>Re Password</label>
									
										<div className='col-md-9'>
											<input type='text' className='form-control' placeholder='Retype Password'/>
											
										</div>
									</div>
 									<div className='row'>
 										<div className='col-md-9 offset-md-3'>
	 										<div className="form-check mx-1 mb-3">
	  												<input className =" form-check-input checkbox-primary" type="checkbox" value="" id="remeberme" />
	 												<label className ="align-middle form-check-label font-w" for="remeberme">
	    												Check me out !
	  												</label>
											</div>
											<button className='btn btn-info'>Sign in</button>
										</div>

 									</div>		

								</form>
							</div>
							
						</div>
						
					</div>
				</div>


			</div>
		</div>
		)
}

export default Generale;