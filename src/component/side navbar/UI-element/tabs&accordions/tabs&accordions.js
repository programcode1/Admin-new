import React from 'react'
import './tabs&accordions.css'
import Accordion_blue_header from './blue-header-accordion'
import Accordion_white_header from './white-header-accordion'

//tabs
import Tab_horizontal1 from './tab1'
import Tab_horizontal2 from './tab2'
import Tab_vertical1 from './tab3-v'
import Tab_vertical2 from './tab4-v'
function TabAccordions(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Tab & Accordions</h5>
				<div className='bg-color p-4'>
					<div className='row mb-5 pb-5'>
						<h4>Accordions</h4>
						<hr style={{opacity:1}}/>
						
						<div className='col-md-6'>
							<Accordion_blue_header/>
						</div>
						<div className='col-md-6'>
							<Accordion_white_header/>
						</div>
					</div>
					<div className='row mb-4'>
						<h4>Tabs</h4>
						<hr style={{opacity:1}}/>
						<div className='col-md-6'>
							<Tab_horizontal1/>
						</div>
						<div className='col-md-6'>
							<Tab_horizontal2/>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<Tab_vertical1/>
						</div>
						<div className='col-md-6'>
							<Tab_vertical2/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TabAccordions;