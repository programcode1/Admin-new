import React from 'react'
import Get_data from './get-data'
import Buttons_table_data from './buttons-table'
import Fix_header_table_data from './fixed-header-table'
import Key_table_data from './keytable'
function Data_table(){
	
	
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3'>Datatables</h5>
					<div className='bg-color mb-4 p-4'>
						<h4>Default Example</h4>
						<Get_data/>
					</div>
					<div className='mb-4 bg-color p-4'>
						<h4>Buttons Example</h4>
						<Buttons_table_data/>
					</div>
					<div className='mb-4 bg-color p-4'>
						<h4>Fixed Header Example</h4>
						<Fix_header_table_data/>
					</div>
					<div className='mb-4 bg-color p-4'>
						<h4>KeyTable Example</h4>
						<Key_table_data/>
					</div>
			</div>
		</div>

		)
}

export default Data_table;