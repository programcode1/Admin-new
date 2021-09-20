import React from 'react'
import data from './data.json'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import './table.css'
function Key_table_data(){
	var d = data[0].table_data
	const tabledata = d.map((obj , index)=>{
		if (index < 30){
			return <tr>
				<td>{obj[0]}</td>
				<td>{obj[1]}</td>
				<td>{obj[2]}</td>
				<td>{obj[3]}</td>
				<td>{obj[4]}</td>
				<td>{obj[5]}</td>
			</tr>
		}
		
	})

	$(document).ready(function() {
	    $('#key-table').DataTable();
	} );
	
	return (
		
			<table id='key-table' className='mt-4 table table-bordered table-striped'>
				<thead className='thead-color'>
					<tr>
						<td>Name</td>
						<td>Position</td>
						<td>Office</td>
						<td>Age</td>
						<td>Start date</td>
						<td>Salary</td>
					</tr>
				</thead>
				<tbody className='tbody-color'>
					{tabledata}
				</tbody>

			</table>
		
		

		)
}

export default Key_table_data;