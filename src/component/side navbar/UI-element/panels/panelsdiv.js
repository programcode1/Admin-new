import React from 'react'
import './panelsdiv.css'
function Panelsdiv(props){
	return (

		<div className='bg-color panel'>
			<h3 style={props.style}>{props.heading}</h3>
			<p className='text-muted '>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			 	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				 ut aliquip ex ea commodo consequat.
			 </p>



		</div>


	)
}



function Panelfill(props){
	return (

		<div style={props.style} className='panel-fill'>
			<h3 >{props.heading}</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			 	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				 ut aliquip ex ea commodo consequat.
			 </p>



		</div>


	)
}
export {Panelsdiv,Panelfill};