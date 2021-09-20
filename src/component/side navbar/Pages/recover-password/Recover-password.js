import React from 'react'
import whitelogo from '../../../../img/logo_white.png'

function Recover_password_page(){
	return <div>
			<div className='mx-auto login-page bg-color'>
				<div className='text-center pb-2 my-4'>
					<img className='whitelogo' src={whitelogo}/>
				</div>
				<h3 className='text-center mb-3 pb-1 text-muted'>Reset Password</h3>
				<div class="alert mx-1 mb-3 alert-dismissible fade show"  style={{backgroundColor:'rgba(0, 164, 254, 0.8)',color:'#fff'}} role="alert">
					Enter your <b>Email</b> and instructions will be <br/>sent to you!
				 	<button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
				<form className='mt-3 pt-1'>

					<div className='row mb-4 pb-2'>
						<div className='col-md-12'>
							<input type='text' placeholder='Email' className='form-control' required/>
						</div>
					</div>
					
					
					<div className='row mb-3 pb-1'>
						<div className='col-md-12'>
							<button className='w-100 py-2 btn btn-primary'>Send Mail</button>
						</div>
					</div>
					
				</form>
			</div>
	</div>
}





export default Recover_password_page;