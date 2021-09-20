import React from 'react'
import './validation-form.css'
import $ from 'jquery'; 
import '../../../../node_modules/parsleyjs/dist/parsley.min.js'
function Formvalidation(){

	$(document).ready(function() {
				$('.form-valid').parsley();
			});
	return (
	<div className='bg-color-body'> 
			<div className='container text-muted Generalform'>

				<h4 className='py-3 font-22'>Form Validation</h4>
				
				<div className='row px-2 bg-color'>
						<h4 className='pt-3 pb-4'>Examples</h4>
						<div className='col-md-6'>
							
							<div className='form-input validation-form'>
								<h3 className='font-small mb-4'>
									<small className='text-info'><b>Validation type</b></small>
								</h3>
								<form className='form-valid'>
									<div className='mb-3'>
										<label>Required</label>
										<input type='text' className='form-control' placeholder='Type something' required/>
									</div>
									<div className='mb-3'>
										<label>Equal to</label>
										<input type='password' id='pass2' className='form-control mb-2' placeholder='Password' required/>
										<input type='password' data-parsley-equalto="#pass2" className='form-control' placeholder='Re-Type Password' required/>
									</div>
									<div className='mb-3'>
										<label>E-mail</label>
										<input type='email' parsley-type="email" className='form-control' placeholder='Enter a valid e-mail' required/>
									</div>
									<div className='mb-3'>
										<label>URL</label>
										<input type='url' parsley-type="url" className='form-control' placeholder='URL' required/>
									</div>
									<div className='mb-3'>
										<label>Digits</label>
										<input type='text' data-parsley-type="digits" className='form-control' placeholder='Enter only digits' required/>
									</div>
									<div className='mb-3'>
										<label>Number</label>
										<input type='text' data-parsley-type="number" className='form-control' placeholder='Enter only numbers' required/>
									</div>
									<div className='mb-3'>
										<label>Alphanumeric</label>
										<input type='text' data-parsley-type="alphanum" className='form-control' placeholder='Enter alphanumeric value' required/>
									</div>
									<div className='mb-3'>
										<label>textarea</label>
										<textarea rows='5' className='form-control' required>
										</textarea>
									</div>

									<div>
										<button type='submit' className='btn btn-primary'>Submit</button>
										<button type='reset' className='btn btn-secondary mx-1'>Cancel</button>
									</div>

								</form>

							</div>	
						</div>

						<div className='col-md-6'>
							<div className='form-input validation-form'>
								<h3 className='font-small  mb-4'>
									<small className='text-info'><b>Range validation</b></small>
								</h3>
								
								<form className='form-valid'>
										<div className='mb-3'>
											<label>Min Length</label>
											<input type='text' className='form-control' data-parsley-minlength='6' placeholder='Min 6 chars.' required/>
										</div>
										<div className='mb-3'>
											<label>Max Length</label>
											<input type='text' className='form-control' data-parsley-maxlength='6' placeholder='Max 6 chars.' required/>
										</div>
										<div className='mb-3'>
											<label>Range Length</label>
											<input type='text' className='form-control' data-parsley-length='[5,10]' placeholder='Text between 5 - 10 chars length' required/>
										</div>
										<div className='mb-3'>
											<label>Min value</label>
											<input type='text' className='form-control' data-parsley-min='6' placeholder='Min value is 6' required/>
										</div>
										<div className='mb-3'>
											<label>Max Value</label>
											<input type='text' className='form-control' data-parsley-max='6' placeholder='Max value is 6' required/>
										</div>
										<div className='mb-3'>
											<label>Range Value</label>
											<input type='text' className='form-control' min='6' max='100' placeholder='Number between 6-100' required/>
										</div>
										<div className='mb-3'>
											<label>Regular Exp</label>
											<input type='text' className='form-control' data-parsley-pattern="#[A-Fa-f0-9]{6}" placeholder='Hex. Color' required/>
										</div>
										{/* min checkbox*/}
										<div class="mb-3">
											<label className='mb-3'>Min check</label>
											<div>
												<div>
													<input className ="  form-check-input checkbox-success"  data-parsley-multiple="groups"
                                                                               data-parsley-mincheck="2" type="checkbox" value="" id="flexCheckDefault1" />
													<label className =" font-wgt form-check-label px-2" for="flexCheckDefault1">
		    											And this
		  											</label>
												</div>
												<div>
													<input className ="  form-check-input checkbox-success"  data-parsley-multiple="groups"
                                                                               data-parsley-mincheck="2" type="checkbox" value="" id="flexCheckDefault2" />
													<label className =" font-wgt form-check-label px-2" for="flexCheckDefault2">
		    											 Can't check this
		  											</label>
												</div>
												<div>
													<input className =" align-middle form-check-input checkbox-success"  data-parsley-multiple="groups"
                                                                               data-parsley-mincheck="2" type="checkbox" value="" id="flexCheckDefault3" />
													<label className =" font-wgt form-check-label px-2" for="flexCheckDefault3">
		    											This too 
		  											</label>
												</div>
											</div>
		  									
		 									
										</div>

										{/*max checkbox*/}
										<div class="mb-3">
											<label className='mb-3'>Max check</label>
											<div>
												<div>
													<input className =" form-check-input checkbox-success"  data-parsley-multiple="groups1"
                                                                               type="checkbox" value="" id="flexCheckDefault11" />
													<label className =" font-wgt form-check-label px-2" for="flexCheckDefault11">
		    											And this
		  											</label>
												</div>
												<div>
													<input className ="form-check-input checkbox-success"  data-parsley-multiple="groups1"
                                                                               type="checkbox" value="" id="flexCheckDefault12" />
													<label className ="font-wgt form-check-label px-2" for="flexCheckDefault12">
		    											 Can't check this
		  											</label>
												</div>
												<div>
													<input className ="form-check-input checkbox-success"  data-parsley-multiple="groups1"
                                                                               data-parsley-maxcheck="1" type="checkbox" value="" id="flexCheckDefault13" />
													<label className ="font-wgt form-check-label px-2" for="flexCheckDefault13">
		    											This too 
		  											</label>
												</div>
											</div>
											{/* input checkkbox group end div*/}
		  									
		 									
										</div>
										{/* end checkbox group*/}
										<div>
											<button type='submit' className='btn btn-primary'>Submit</button>
											<button type='reset' className='btn btn-secondary mx-1'>Cancel</button>
										</div>
								</form>
									
							</div>
						</div>
				</div>
				
			</div>
	</div>	
	)
}

export default Formvalidation;