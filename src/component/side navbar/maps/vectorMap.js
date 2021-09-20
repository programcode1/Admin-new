import React from 'react'
import Usa_map from './vector-maps/usamap'
import Europ_map from './vector-maps/europmap'
import World_map from './vector-maps/worldmap'
import Asia_map from './vector-maps/asiamap'
import Brazil_map from './vector-maps/brazilmap'
import './maps.css'
function Vector_map(){
	
	
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 mb-4 font-22'>Vector Map</h5>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<div className='p-4 bg-color'>
							<h4 className='mb-5'>USA Map</h4>
							<Usa_map/>
						</div>	
					</div>
					<div className='col-md-6'>
						<div className='p-4 bg-color'>
							<h4 className='mb-5'>Europe Map</h4>
							<Europ_map/>
						</div>	
					</div>
					
				</div>
				<div className='row mb-3'>
					<div className='col-md-12'>
						<div className='p-4 bg-color'>
							<h4 className='mb-5'>World Map</h4>
							<World_map/>
						</div>
					</div>

				</div>
				<div className='row '>
					<div className='col-md-6'>
						<div className='p-4 bg-color'>
							<h4 className='mb-5'>Asia Map</h4>
							<Asia_map/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='p-4 bg-color'>
							<h4 className='mb-5'>Brazil Map</h4>
							<Brazil_map/>
						</div>
					</div>
					
				</div>
			</div>
		</div>	
		)
}

export default Vector_map;