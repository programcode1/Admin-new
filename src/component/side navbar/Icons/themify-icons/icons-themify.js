import React from 'react'
import '../../../../themify-icons/themify-icons.css'
import themify from './themify-icons.json'
function Themify_icons(){
	var mydata = themify[0].arrow_direction
	
	const arrow_direction = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})

	//web app icons
	var mydata = themify[0].webApp_icons
	
	const webApp_icons = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})

	//control icons
	var mydata = themify[0].control_icons
	
	const control_icons = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})

	//text editor icons
	var mydata = themify[0].textEditor_icons
	
	const textEditor_icons = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})


	//layout icons
	var mydata = themify[0].layout_icons
	
	const layout_icons = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})

	//brand icons
	var mydata = themify[0].brand_icons
	
	const brand_icons = mydata.map((obj)=>{
		return <div className='col-md-3 mb-3'>
			<span className={`${obj}`}></span>
			<p className='mt-3 text-muted'>{obj}</p>
			
		</div>
	})

	

	return (
			<div className='bg-color-body'> 
				<div className='container text-white'>
					
				<h4 className='py-4 font-22'>Themify Icons</h4>
					<div className='bg-color mdi-icons'>
						<h4 className='pt-4 mx-1 pb-1 px-3  mb-4'>Examples</h4>
						<div className='row p-2 text-center'>
							{arrow_direction}
					
						</div>
						<div className='row p-2 text-center'>
							{webApp_icons}
					
						</div>
						<div className='row p-2 text-center'>
							{control_icons}
					
						</div>
						<div className='row p-2 text-center'>
							{textEditor_icons}
					
						</div>
						<div className='row p-2 text-center'>
							{layout_icons}
					
						</div>
						<div className='row p-2 text-center'>
							{brand_icons}
					
						</div>
						
					</div>
				</div>
			</div>
		)
}

export default Themify_icons;