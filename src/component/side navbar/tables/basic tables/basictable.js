import React from 'react'
import './basictable.css'
function Basictable(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Basic Tables</h5>

				<div className='row mb-3'>
					<div className='col-md-6'>
						<div className='border-table pb-2 bg-color'>
							<h4 className='px-3 pt-3 pb-2 mb-4'>Bordered Table</h4>
							<div className='mx-4 '>
								<table className='table table-bordered'>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td rowspan='2'>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										
										<td>Mark</td>
										<td>Otto</td>
										<td>@TwBootstrap</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<td>3</td>
										<td colspan='2'>Larry the Bird</td>
										<td>@twitter</td>

									</tr>
								</tbody>
								</table>
							</div>	
							
						</div>
					</div>
					<div className='col-md-6'>
						<div className='hover-table pb-2 bg-color'>
							<h4 className='px-3 pt-3 pb-2 mb-4'>Hover Table</h4>
							<div className='mx-4'>
								<table className='table  table-borderless table-hover'>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									
									<tr>
										<td>2</td>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<td>3</td>
										<td colspan='2'>Larry the Bird</td>
										<td>@twitter</td>

									</tr>
									<tr>
										<td>4</td>
										<td>Steve</td>
										<td>Urkel</td>
										<td>@steve</td>
									</tr>
								</tbody>
								</table>
							</div>
							
						</div>
					</div>
				</div>


				<div className='row mb-3'>
					<div className='col-md-12'>
						<div className='res-table pb-3 bg-color'>
								<h4 className='px-3 pt-3 pb-2 mb-4'>Responsive Table</h4>
								<div className='table-responsive mx-4'>
									<table className='table table-borderless'>
										<thead>
											<tr>
												<th>#</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Username</th>
												<th>Age</th>
												<th>City</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>1</td>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
												<td>20</td>
												<td>Cityname</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
												<td>20</td>
												<td>Cityname</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
												<td>20</td>
												<td>Cityname</td>
											</tr>
											<tr>
												<td>4</td>
												<td>Steve</td>
												<td>Mac Queen</td>
												<td>@steve</td>
												<td>20</td>
												<td>Cityname</td>
											</tr>
										</tbody>
									</table>
									
								</div>
						</div>
						
					</div>
					
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<div className='Contextual-table pb-2 bg-color'>
							<h4 className='px-4 pt-4 pb-2 mb-4'>Contextual Table</h4>
							<div className='mx-4'>
								<table className='table'>
								<thead>
									<tr>
										<th>#</th>
										<th>Column heading</th>
										<th>Column heading</th>
										<th>Column heading</th>
									</tr>
								</thead>
								<tbody>
									<tr className='table_active'>
										<td>1</td>
										<td>Column content</td>
										<td>Column content</td>
										<td>Column content</td>
									</tr>
									
									<tr className='success'>
										<td>2</td>
										<td>Column content</td>
										<td>Column content</td>
										<td>Column content</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Column content</td>
										<td>Column content</td>
										<td>Column content</td>

									</tr>
									<tr className='danger'>
										<td>4</td>
										<td>Column content</td>
										<td>Column content</td>
										<td>Column content</td>

									</tr>
									
								</tbody>
								</table>
							</div>
							
						</div>
					</div>
					<div className='col-md-6'>
						<div className='Striped-table pb-2 bg-color'>
							<h4 className='px-4 pt-4 pb-2 mb-4'>Striped rows Table</h4>
							<div className='mx-4'>
								<table className='table table-striped table-borderless'>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									
									<tr>
										<td>2</td>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Larry </td>
										<td>the Bird</td>
										<td>@twitter</td>

									</tr>
									<tr>
										<td>4</td>
										<td>Steve</td>
										<td>Mac Queen</td>
										<td>@steve</td>
									</tr>
								</tbody>
								</table>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)		
}

export default Basictable;