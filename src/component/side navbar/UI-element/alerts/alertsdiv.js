import React from 'react'
import './alerts.css'
function Standardalert(props){


	return (

		
			<div class="alert mx-1" style={props.style} role="alert">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				 <a href="#" class="alert-link"> Alert <br/>Link.</a>
			</div>
			
		

		)
}


function Alertbigone(props){
	return (

		<div class="alert mx-1" style={props.style} role="alert">
					<h4 class="alert-heading">Big one!</h4>

					<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commodo luctus,
							nisi erat porttitor ligula,
							eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.

					</p>
							  
						<button className={`btn ${props.name }`} >wanna do this</button>
						<button className='btn btn-secondary'>Or do this</button>
			</div>


	)
}



function AlertDismmiles(props){
	return (
		<div class="alert mx-1 alert-dismissible fade show" style={props.style} role="alert">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
				 <a href="#" className="alert-link"> Alert Link.</a>
				<button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	)
}

function Alertbigonedismmiles(props){
	return (

		<div class="alert mx-1" style={props.style} role="alert">
					<button type="button" className="btn-close alert-close-btn btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>

					<h4 class="alert-heading">Big one!

					</h4>
					
					<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis mollis, est non commodo luctus,
							nisi erat porttitor ligula,
							eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.

					</p>
							  
						<button className={`btn ${props.name }`} >wanna do this</button>
						<button className='btn btn-secondary'>Or do this</button>

			</div>


	)
}

export {Standardalert , Alertbigone , AlertDismmiles , Alertbigonedismmiles};