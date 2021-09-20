import React from 'react'
import './grid.css'
function Grid(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h4 className='py-3 font-22'>Grid & Responsive</h4>
				<div className='bg-color pb-3'>
					<h4 className='pt-4 pb-4 px-4'>Grid Options</h4>
					<div className='row'>
					<div className='col-md-12'>
						<div className='table-responsive mx-4'>
							<table className='table table-bordered table-striped'>
								<thead>
									<tr>
										<th></th>
										<th>
											Extra small devices 
											<small>Phones (768px)</small>
										</th>
										<th>
											Small devices 
											<small> Tablets (≥768px) </small>
										</th>
										<th>
											Medium devices 
											<small> Desktops (≥992px)</small>
										</th>
										<th>
											Large devices 
											<small> Desktops (≥1200px)</small>
										</th>
									</tr>


								</thead>
								<tbody>
								<tr>
									<th>
										Grid behavior
									</th>
									<td>
										Horizontal at all times
									</td>
									<td colspan='3'>
										Collapsed to start, horizontal above breakpoints
									</td>
								</tr>
								<tr>
									<th>Max container width</th>
									<td>None (auto)</td>
									<td>750px</td>
									<td>970px</td>
									<td>1170px</td>
								</tr>
								<tr>
									<th>
										Class prefix
									</th>
									<td>
										<code>.col-xs-</code>
									</td>
									<td>
										<code>.col-sm-</code>
									</td>
									<td>
										<code>.col-md-</code>
									</td>
									<td>
										<code>.col-lg-</code>
									</td>
									
								</tr>
								<tr>
									<th>
										# of column
									</th>
									<td colspan='4'>
										12
									</td>
								</tr>

								<tr>
									<th>Max column width</th>
									<td>Auto</td>
									<td>60px</td>
									<td>78px</td>
									<td>95px</td>
								</tr>

								<tr>
									<th>
										Gutter width
									</th>
									<td colspan='4'>
										30px (15px on each side of a column)
									</td>
								</tr>
								<tr>
									<th>
										Nestable
									</th>
									<td colspan='4'>
										Yes
									</td>
								</tr>

								<tr>
									<th>
										Offsets
									</th>
									<td>
										N/A
									</td>
									<td colspan='3'>
										Yes
									</td>
								</tr>
								<tr>
									<th>
										Column ordering
									</th>
									<td>
										N/A
									</td>
									<td colspan='3'>
										Yes
									</td>
								</tr>

								</tbody>
							</table>
						</div>

						




					</div>
					


					</div>
				</div>

				<div className='bg-color pb-3 my-4'>
					<h4 className='pt-4 pb-4 px-4'>Responsive utilities</h4>
					<div className='row'>
					<div className='col-md-12'>
						<div className='table-responsive mx-4'>
							<table className='table table-bordered '>
								<thead>
									<tr>
										<th></th>
										<th>
											Extra small devices 
											<small>Phones (768px)</small>
										</th>
										<th>
											Small devices 
											<small> Tablets (≥768px) </small>
										</th>
										<th>
											Medium devices 
											<small> Desktops (≥992px)</small>
										</th>
										<th>
											Large devices 
											<small> Desktops (≥1200px)</small>
										</th>
									</tr>

								</thead>
								<tbody>
									<tr>
										<th>
											<code>.visible-xs-*</code>
										</th>
										<td className="table-active">
											Visible
										</td>
										<td >
											Hidden
										</td>
										<td >
											Hidden
										</td>
										<td >
											Hidden
										</td>
									</tr>
									<tr>
										<th>
											<code>.visible-sm-*</code>
										</th>
										<td>
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
										<td >
											Hidden
										</td>
										<td >
											Hidden
										</td>
									</tr>
									<tr>
										<th>
											<code>.visible-md-*</code>
										</th>
										<td>
											Hidden
										</td>
										<td >
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
										<td >
											Hidden
										</td>
										
									</tr>
									<tr>
										<th>
											<code>.visible-lg-*</code>
										</th>
										<td>
											Hidden
										</td>
										<td >
											Hidden
										</td>
										<td >
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>
											<code>.hidden-xs</code>
										</th>
										<td>
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
										<td className="table-active">
											Visible
										</td>
										<td className="table-active">
											Visible
										</td>
									</tr>

									<tr>
										<th>
											<code>.hidden-sm</code>
										</th>
										<td className="table-active">
											Visible
										</td>
										<td >
											
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
										<td className="table-active">
											Visible
										</td>
									</tr>
									<tr>
										<th>
											<code>.hidden-md</code>
										</th>
										<td className="table-active">
											Visible
										</td>
										<td className="table-active">
											
											Visible
										</td>
										<td >
											Hidden
										</td>
										<td className="table-active">
											Visible
										</td>
									</tr>

									<tr>
										<th>
											<code>.hidden-lg</code>
										</th>
										<td className="table-active">
											Visible
										</td>
										<td className="table-active">
											Visible
											
										</td>
										<td className="table-active">
											Visible
										</td>
										<td >
											Hidden
										</td>
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

export default Grid;