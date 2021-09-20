import React from 'react'
import Directory_div from './DirectoryDiv-page'
function Directory_page(){
	return (

		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22 mb-3'>Directory</h5>
				<div className='row'>
					<div className='col-md-4'>
						<Directory_div name='Pauline I. Bird' member='Family Member'/>
						<Directory_div name='Robert L. Obryan' member='Web Designer'/>
						<Directory_div  name='Sabrina Weatherford' member='Support Team'/>
						
						
					</div>
					<div className='col-md-4'>
						<Directory_div name='Sabrina Weatherford' member='Support Team'/>
						<Directory_div name='Wesley Hansen' member='Graphics Designer'/>
						<Directory_div name='John M. Wiest' member='Graphics Designer'/>
						
					</div>
					<div className='col-md-4'>
						
						<Directory_div name='John M. Wiest' member='Graphics Designer'/>
						<Directory_div name='Julian H. Pabst' member='Product Manager'/>
						<Directory_div name='Pauline I. Bird' member='Family Member'/>
					</div>

				</div>
			</div>
		</div>	

		)
}
export default Directory_page;