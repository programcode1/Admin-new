import React from 'react'
import {Twitter , Call ,  MailOutline} from '@material-ui/icons/';
//fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faSkype} from '@fortawesome/free-brands-svg-icons';

import avtar from '../../../../img/avatar-1.jpg'

import './DirectoryDiv-page.css'


function Directory_div(props){
	return (

			<div className='bg-color  px-4 pt-3 pb-4 mb-4'>
				<div className='header-directory d-flex'>
					<div className='user-thumb'>
						<img className='img-circle' src={avtar}/>
					</div>
					<div className='py-3'>
						<h4 className='mx-2'>{props.name}</h4>
						<p className='text-muted mx-2'>{props.member}</p>
					</div>

				</div>
				
				<p className='text-muted info-text'>
						Deo,has been the industry's standard  
						dummy text ever since the 1500s, when an unknown printer took a galley of type.Deo,has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type.
				</p>
			
				<div className='social-links mt-4 pt-3 text-center'>
					<span><FontAwesomeIcon icon={faFacebookF} style={{fontSize:'15px',margin:'2px'}}/></span>
					<span><Twitter style={{fontSize:'15px'}}/></span>
					<span><Call style={{fontSize:'15px'}}/></span>
					<span><FontAwesomeIcon icon={faSkype}  style={{fontSize:'15px'}} /></span>
					<span><MailOutline style={{fontSize:'15px'}}/></span>
					
				</div>



			</div>


		)
}

export default Directory_div;