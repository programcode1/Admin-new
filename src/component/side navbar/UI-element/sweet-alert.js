import React ,{useState} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import './sweet-alert.css'

function Sweet_alert(){

	
	const[basicAlert,setbasicAlert]=useState(false)
	const[textAlert,settextAlert] = useState(false)
	const[successAlert,setsuccessAlert] = useState(false)
	const[warningAlert,setwarningAlert] = useState(false)
	const[delectfileAlert,setdelectfileAlert] = useState(false)
	function setbothalertfalse(){
		setwarningAlert(false)
		setdelectfileAlert(false)
	}

	//custon warning alerts
	const[customwarningAlert , setcustomewarningAlert] = useState(false)
	const[customdelectfileAlert , setcustomedelectfileAlert] = useState(false)
	const[customcancelfileAlert , setcustomecancelfileAlert] = useState(false)

	function setallalertfalse(){
		setcustomewarningAlert(false)
		setcustomedelectfileAlert(false)
		setcustomecancelfileAlert(false)
	}

	const[customimageAlert , setcustomimageAlert] = useState(false)
	const[automaticloseAlert,setautomaticloseAlert] = useState(false)
	
	
	return (
		
			<div className='bg-color-body'> 
				<div className='container text-white'>

						<h4 className='py-3 font-22'>Sweet Alerts</h4>
						<div className='bg-color px-3 pb-5 pt-3'>
							<h4 className='mx-2 mb-4'>Alert Examples</h4>	
							<div className='row text-center'>
								{/*col - 1 */}
								<div className='col-md-3'>
									{/*basic alert */}
									<div className='mb-5'>

										<SweetAlert
											 title="Here's a message!"
											 onConfirm={() => setbasicAlert(false)}
											 onCancel={() =>setbasicAlert(false)}
											 show={basicAlert}
											/>
										<p className='mb-2 text-muted'>Basic Example</p>
										<button className='btn btn-secondary' onClick={()=>setbasicAlert(true)}>Basic Alert</button>
									</div>

									{/*warniing alert with custmize*/}
									<div>

										<SweetAlert 
											warning 
											title="Are you sure?"
											confirmBtnText="Yes, delete it!"
						  					confirmBtnBsStyle="warning"
						  					showCancel
						  					cancelBtnText="No , cancel plx!"
						  					cancelBtnBsStyle="secondary"
											onConfirm={() =>setcustomedelectfileAlert(true)}
											onCancel={() =>setcustomecancelfileAlert(true)}
											show={customwarningAlert}>
										  	You will not be able to recover this imaginary file!
										</SweetAlert>
										<SweetAlert 
											success 
											title="Delected!" 
											onConfirm={setallalertfalse}
										
											show={customdelectfileAlert}>
										  	You will not be able to recover this imaginary file!
										</SweetAlert>
										<SweetAlert 
											error
											title="Cancelled" 
											onConfirm={setallalertfalse}
											show={customcancelfileAlert}>
										  	Your imaginary file is safe :)
										</SweetAlert>
										<p className='mb-2 text-muted'>By passing a parameter, you can execute something else for "Cancel".</p>
										<button className='btn btn-secondary' onClick={()=>setcustomewarningAlert(true)}>Click me</button>
									</div>
								</div>

								{/*col - 2 */}
								<div className='col-md-3'>
										{/*text  alert */}
										<div className='mb-5'>
											<SweetAlert 
												title="Here's a message!"
												onConfirm={() => settextAlert(false)}
												onCancel={() =>settextAlert(false)}
												show={textAlert}
												>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, 
												tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, 
												lobortis purus sed, pharetra felis
											</SweetAlert>
											<p className='mb-2 text-muted'>A title with a text under</p>
											<button className='btn btn-secondary' onClick={()=>settextAlert(true)}>Click me</button>
										</div>

										{/*custom image  alert */}
										<div>

											<SweetAlert
												custom
												 title="Sweet!"
												 customIcon="https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg"
												 onConfirm={() => setcustomimageAlert(false)}
												 onCancel={() =>setcustomimageAlert(false)}
												 show={customimageAlert}
												>
												Here's a custom image
											</SweetAlert>
											<p className='mb-2 text-muted'>A message with custom Image Header</p>
											<button className='btn btn-secondary' onClick={()=>setcustomimageAlert(true)}>Click me</button>
										</div>
								</div>

								{/*col - 3 */}
								<div className='col-md-3'>

										{/*success alert */}
										<div className='mb-5'>
											<SweetAlert 
												success 
												title="Good job!" 
												onConfirm={() => setsuccessAlert(false)}
												onCancel={() =>setsuccessAlert(false)}
												show={successAlert}>
											  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, 
												tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, 
												lobortis purus sed, pharetra felis
											</SweetAlert>
											<p className='mb-2 text-muted'>A success message!</p>
											<button className='btn btn-secondary' onClick={()=>setsuccessAlert(true)}>Click me</button>
										</div>


										{/*auto close alert */}
										<div> 
											<SweetAlert
												title="Auto close Alert"
												onConfirm={()=>setTimeout(setautomaticloseAlert(false) , 2000)}
												timeout={2000}
							  					show = {automaticloseAlert}
											>
											  I will close in 2 second
											</SweetAlert>
											<p className='mb-2 text-muted'>A message with auto close timer</p>
											<button className='btn btn-secondary' onClick={()=>setautomaticloseAlert(true)}>Click me</button>
										</div>
								</div>

								{/*col - 4 */}
								<div className='col-md-3'>

										{/*warning  alert */}
										<div>

											<SweetAlert 
												warning 
												title="Are you sure?"
												confirmBtnText="Yes, delete it!"
							  					confirmBtnBsStyle="warning"
							  					showCancel
							  					cancelBtnBsStyle="secondary"
												onConfirm={() =>setdelectfileAlert(true)}
												onCancel={() =>setwarningAlert(false)}
												show={warningAlert}>
											  	You will not be able to recover this imaginary file!
											</SweetAlert>
											<SweetAlert 
												success 
												title="Delected!" 
												onConfirm={setbothalertfalse}
												onCancel={() =>setwarningAlert(false)}
												show={delectfileAlert}>
											  	You will not be able to recover this imaginary file!
											</SweetAlert>
											<p className='mb-2 text-muted'>A warning message, with a function attached to the "Confirm"-button...</p>
											<button className='btn btn-secondary' onClick={()=>setwarningAlert(true)}>Click me</button>
										</div>
								</div>
								

								
								
							</div>
						</div>
				</div>
			</div>

	)
}

export default Sweet_alert;