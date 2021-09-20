import React from 'react'
import  {Standardalert , Alertbigone , AlertDismmiles , Alertbigonedismmiles} from './alertsdiv'
import './alerts.css'
function Alerts(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Alerts</h4>
				<div className='row '>
					<div className='col-md-6 '>
						<div className='bg-color p-3 pb-4'>
							<h5 className='mt-2 mb-4 pb-2 px-2'><b>Standard Alert</b></h5>
							<Standardalert style={{backgroundColor:'rgba(102, 210, 3, 0.8)',color:'#fff'}}/>
							<Standardalert style={{backgroundColor:'rgba(0, 164, 254, 0.8)',color:'#fff'}}/>
							<Standardalert style={{backgroundColor:'rgba(255, 182, 0, 0.8)',color:'#fff'}}/>
							<Standardalert style={{backgroundColor:'rgba(230, 96, 96, 0.8)',color:'#fff'}}/>
							<Alertbigone style={{backgroundColor:' rgba(102, 210, 3, 0.8)',color:'#fff'}} name = {'btn-success'}/>
						</div>
						
					</div>
					<div className='col-md-6'>
						<div className='bg-color p-3 pb-4'>
							<h5 className='mt-2 mb-4 pb-2 px-2'><b>Dismissable Alert</b></h5>
							
							<AlertDismmiles style={{backgroundColor:'rgba(0, 164, 254, 0.8)',color:'#fff'}}/>
							<AlertDismmiles style={{backgroundColor:'rgba(255, 182, 0, 0.8)',color:'#fff'}}/>
							<AlertDismmiles style={{backgroundColor:'rgba(230, 96, 96, 0.8)',color:'#fff'}}/>
							<Alertbigonedismmiles style={{backgroundColor:' rgba(0, 164, 254, 0.8)',color:'#fff'}} name = {'btn-info'}/>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Alerts;