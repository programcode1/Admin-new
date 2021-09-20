import React from 'react'
import whitelogo from '../../../../img/logo_white.png'
import './login-page.css'
import LockIcon from '@material-ui/icons/Lock';
function Login_page(){
	return <div>
			<div className='mx-auto login-page bg-color'>
				<div className='text-center pb-2 my-4'>
					<img className='whitelogo' src={whitelogo}/>
				</div>
				<h3 className='text-center mb-3 pb-1 text-muted'>Sign In</h3>
				<form>
					<div className='row mb-3'>
						<div className='col-md-12'>
							<input type='text' placeholder='Username' className='form-control' required/>
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
	    								Remember me
	  							</label>
							</div>
						</div>
					</div>
					<div className='row mb-4 pb-1'>
						<div className='col-md-12'>
							<button className='w-100 py-2 btn btn-primary'>Log In</button>
						</div>
					</div>
					<div className='row '>
						<div className='col-md-7'>
							<p className=' text-muted'> 
								
								<LockIcon fontSize='small' style={{fontSize:14}} />
								
								
								&nbsp;&nbsp;Forgot your password?
								
							</p>
						</div>
						<div className='m-0 col-md-5'>
							<p className='text-end text-muted'>
								Create an account
							</p>
						</div>
					</div>	
				</form>
			</div>
	</div>
}

export default Login_page;