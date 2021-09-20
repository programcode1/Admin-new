import React,{useEffect} from 'react'
import './charts.css'
import $ from 'jquery'; 
import '../../../../node_modules/jquery-knob/dist/jquery.knob.min.js'
function Other_Charts(){

	 $(document).ready(function() {
		$('.dial').knob();
		
	});
	
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Jquery Knob</h4>
				<div className='bg-color'>
					<h4 className='pt-3 px-3 mb-5'>Examples</h4>
					<div className='text-center'>
						<div className='row text-center'>
							<div className='col-md-4'>
								<h6 className='font-14'>Disable display input</h6>
								<input value='35' data-width="150" data-fgcolor="#66d203" data-bgcolor="#475565" data-displayinput="false" className="dial" />
								
							</div>
							<div className='col-md-4'>
								<h6 className='font-14'>Cursor mode</h6>
								<input value='29' data-width="150" data-fgcolor="#ffb600" data-bgcolor="#475565" data-cursor='true' className="dial" />

							</div>
							<div className='col-md-4'>
								<h6 className='font-14'>Display previous value</h6>
								<input value='44' data-width="150" data-fgcolor="#04a2b3" data-bgcolor="#475565" data-displayprevious='true' data-min="-100" className="dial" />
							</div>

						</div>
						<div className='row'>
							<div className='col-md-4'>
								<h6 className='font-14'>Angle offset</h6>
								<input value='35' data-width="150" data-fgcolor="#00a4fe" data-bgcolor="#475565" data-angleoffset='90' data-linecap='round' className="dial" />
							</div>
							<div className='col-md-4'>
								<h6 className='font-14'>5-digit values, step 1000</h6>
								<input value='-11000' data-width="150" data-fgcolor="#715ded" data-bgcolor="#475565" data-step='1000' data-min='-15000' data-max='15000' data-displayprevious='true' className="dial" />

							</div>
							<div className='col-md-4'>
								<h6 className='font-14'>Angle offset and arc</h6>
								<input  value='29' data-width="150" data-fgcolor="#e866ff" data-bgcolor="#475565" data-cursor='true' className="dial" />
							</div>

						</div>  
					</div>                  
					
				</div>
			</div>
		</div>

		)
}

export default Other_Charts;