import React from 'react'
import mdi from './mdi.json'
import './mdi.css'
function Mdi_icons(){

	var mydata = mdi[0].name
	
	const iconslist = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`mdi mdi-${obj}`}></span>
			<p className='text-muted'>mdi mdi-{obj}</p>
			
		</div>
	})
	return (
			<div className='bg-color-body'> 
				<div className='container text-white'>

				<h4 className='py-4 font-22'>Material Design Icons</h4>
					<div className='bg-color mdi-icons'>
						<h4 className='pt-4 mx-1 pb-1 px-3  mb-4'>Examples</h4>
						<div className='row p-2 text-center'>
							{iconslist}
					
						</div>
					</div>
				</div>
			</div>
		)
}
export default Mdi_icons;