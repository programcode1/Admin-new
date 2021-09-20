import React from 'react'
import {Link} from 'react-router-dom';
import whitelogo from '../../../../img/logo_white.png'
import avtar from '../../../../img/avatar-1.jpg'
function Lock_screen_page(){
	return <div>
			<div className='mx-auto login-page bg-color'>
				<div className='text-center pb-2 my-4'>
					<img className='whitelogo' src={whitelogo}/>
				</div>
				<div className=' mb-4 pt-1 user-thumb text-center'>
					<img src={avtar} className='img-responsive img-thumbnail img-circle'/>
					
				</div>
				<form>
					
					<div className='row my-4 pt-2'>
						<div className='col-md-12'>
							<input type='password' placeholder='Password' className='form-control' required/>
						</div>
					</div>
					
					<div className='row mb-4 pb-1'>
						<div className='col-md-12'>
							<Link to ='/'><button className='w-100 py-2 btn btn-primary'>Log In</button></Link>
						</div>
					</div>
					<p className='text-muted text-center'>Not you?</p>
				</form>
			</div>
	</div>
}






export default Lock_screen_page;