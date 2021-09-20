import React from 'react'
import ion from './ion.json'
function Ion_icons(){
	
	var mydata = ion[0].name
	
	const iconslist = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<i className={`${obj}`}></i>
			<p className='text-muted'>{obj}</p>
			
		</div>
	})
	return (
			<div className='bg-color-body'> 
				<div className='container text-white'>

				<h4 className='py-4 font-22'>Ion Icons</h4>
					<div className='bg-color ion-icons'>
						<h4 className='pt-3 mx-1 pb-1 px-3  mb-2'>Examples</h4>
						<div className='row p-2 text-center'>
							{iconslist}
					
						</div>
					</div>
				</div>
			</div>
		)

}

export default Ion_icons;