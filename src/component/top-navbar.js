import React from 'react'
import Sidemenu from './side navbar/sidemenu';
import logo from '../img/logo.png';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './top-navbar.css'
import { Notifications ,Menu , Fullscreen} from '@material-ui/icons/';
import {Avatar , Badge} from '@material-ui/core/';
import {Link} from 'react-router-dom';
function Navbartop(){
	return (
		<div>
			
			<div className='d-flex navbar-top'>
					<Link to='/'>  
	                        <div className='logo text-center'>
	                            <img src={logo}/>

	                        </div>
	                   </Link>
	                <div className='container-fluid  top-nav'>
						<ul className='left'>
						
							<li className='toggle  border-line'>
							 	<Menu/>
							</li>
							<li>
							 	<input type='text' class="form-control search-bar" placeholder="Search.." />
							</li>
						</ul>
						

						

						<ul className='right mr-auto'>
									
								<li className='round-circle'>
									<Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
			  							<Notifications style={{fontSize:20}}/>
									</Badge>
								</li>
								<li className='round-circle'>

									<Fullscreen style={{fontSize:20}}/>
								</li>
								<li >
									<Avatar alt="s" src="/static/images/avatar/1.jpg" className='avtar'/>
								</li>
						</ul>
					</div>
				
			</div>

			
			<Sidemenu/>
		</div>

			

		)
}

export default Navbartop;