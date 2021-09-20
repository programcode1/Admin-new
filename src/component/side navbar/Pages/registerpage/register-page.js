import React from 'react'
import whitelogo from '../../../../img/logo_white.png'

function Register_page(){
	return <div>
			<div className='mx-auto login-page bg-color'>
				<div className='text-center pb-2 my-4'>
					<img className='whitelogo' src={whitelogo}/>
				</div>
				<h3 className='text-center mb-3 pb-1 text-muted'>Sign Up</h3>
				<form>
					<div className='row mb-3'>
						<div className='col-md-12'>
							<input type='text' placeholder='Email' className='form-control' required/>
						</div>
					</div>
					<div className='row mb-3'>
						<div className='col-md-12'>
							<input type='text' placeholder='Username' className='form-control'/>
						</div>
					</div>
					<div className='row mb-3'>
						<div className='col-md-12'>
							<input type='password' placeholder='Password' className='form-control'/>
						</div>
					</div>
					<div className='row mb-4 pb-3'>
						<div className='col-md-12'>
							<div class="form-check">
	  							<input className =" form-check-input checkbox-primary" type="checkbox" value="" id="remeberme" checked/>
	 							<label className ="align-middle text-muted font-w" for="remeberme">
	    								I accept <a href=''>Terms and Conditions</a>
	  							</label>
							</div>
						</div>
					</div>
					<div className='row mb-4 pb-1'>
						<div className='col-md-12'>
							<button className='w-100 py-2 btn btn-primary'>Register</button>
						</div>
					</div>
					<p className='text-muted text-center'>Already have account?</p>
				</form>
			</div>
	</div>
}



export default Register_page;