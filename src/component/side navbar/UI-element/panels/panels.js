import React from 'react'
import {Panelsdiv,Panelfill} from './panelsdiv'
function Panels(){
	return (

		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Panels</h4>
				<div className='row panel-row'>
					<div className='col-md-4'>
						<Panelsdiv heading='Panel Default' style={{ backgroundColor: '#fafafa' ,color:'black'}}/>
						<Panelsdiv heading='Panel Info' style={{ backgroundColor: '#00a4fe' }}/>
						<Panelsdiv heading='Panel Dark' style={{ backgroundColor: '#2a323c' }}/>
					</div>
					<div className='col-md-4'>
						<Panelsdiv heading='Panel Primary' style={{ backgroundColor: '#04a2b3' }}/>
						<Panelsdiv heading='Panel Warning' style={{ backgroundColor: '#ffb600' }}/>
					</div>
					<div className='col-md-4'>
						<Panelsdiv heading='Panel Success' style={{ backgroundColor: '#66d203' }}/>
						<Panelsdiv heading='Panel Danger' style={{ backgroundColor: '#e66060' }}/>
					</div>
				</div>

				<div>
					<h5 className='panel-fill-heading'>Panel Fill</h5>
					<div className='row panel-row'>
						<div className='col-md-4'>
							<Panelfill heading='Panel Primary' style={{ backgroundColor: '#04a2b3'}}/>
							<Panelfill heading='Panel Warning' style={{ backgroundColor: '#ffb600' }}/>
							
						</div>
						<div className='col-md-4'>
							<Panelfill heading='Panel Success' style={{ backgroundColor: '#66d203' }}/>
							<Panelfill heading='Panel Danger' style={{ backgroundColor: '#e66060' }}/>
							
						</div>
						<div className='col-md-4'>
							<Panelfill heading='Panel Info' style={{ backgroundColor: '#00a4fe' }}/>
							<Panelfill heading='Panel Inverse' style={{ backgroundColor: '#2a323c' }}/>
							
						</div>
					</div>
				</div>
			</div>	
		</div>

		)
}			

export default Panels;