import React from 'react'

import {Link} from 'react-router-dom';
function Error_500_page(){
	return <div>
		<div className='error-page mt-5 pt-5 text-center'>
			<h1 className='text-white'>500</h1>
			<h2 className='text-white'>Internal Server Error.</h2>
			<br/>
				<Link to='/'><button className='btn btn-info'>Back to Dashboard</button></Link>
			
		</div>
		
	</div>
}


export default Error_500_page;