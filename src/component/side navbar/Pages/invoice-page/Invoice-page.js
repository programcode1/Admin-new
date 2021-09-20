import React from 'react'
import whitelogo from '../../../../img/logo_white.png'
import './invoice-page.css'
import PrintIcon from '@material-ui/icons/Print';
function Invoice_page(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22 mb-3'>Invoice</h5>
				<div className='bg-color px-4 pt-3 pb-5'>
					{/* heading img and order */}
					<div className='row align-items-center'>
						<div className='col-md-6 mb-2'>
							<img src={whitelogo} height='30px'/>
						</div>
						<div className='col-md-6 '>
							<h4 className='text-end mb-0'>Order #12345</h4>
						</div>
						
					</div>
					<hr className='mt-0 h-2' style={{opacity:'.80'}}/>

					{/* addresss */}
					<div className='row text-muted'>
						<div className='col-md-6'>
							<address>
								<strong>Billed To:</strong>
								<br/>
								John Smith
								<br/>
								1234 Main
								<br/>
								Apt. 48
								<br/>
								Springfleld,ST 54321	
							</address>
							
						</div>
						<div className='col-md-6 text-end'>
							<address>
								<strong>Shipped To:</strong>
								<br/>
								Kenny Rigdon
								<br/>
								1234 Main
								<br/>
								Apt. 48
								<br/>
								Springfleld,ST 54321	
							</address>
							
						</div>
					</div>

					{/*payment method*/}
					<div className='row text-muted'>
							<div className='col-md-6'>
								<address>
									<strong>Patment Method :</strong>
									<br/>
									Visa ending **** 4242
									<br/>
									jsmith@email.com
										
								</address>
								
							</div>
							<div className='col-md-6 text-end'>
								<address>
									<strong>Order Date  :</strong>
									<br/>
									October 7 , 2016
										
								</address>
								
							</div>
					</div>


					<div>
						{/*table heaidng */}
						<div className='table-header'>
							<h3>Order summary</h3>
						
						</div>

						<div className='row'>
						<div className='col-md-12'>
							{/*table body */}
							<div className='table-body'>
								<table className='table table-borderless'>

									<thead>
										<tr className='border-bottom'>
											<th className='text-muted'>Item</th>
											<th className='text-center text-muted'>Price</th>
											<th className='text-center text-muted'>Quantity</th>
											<th className='text-end text-muted'>Totals</th>
										</tr>
									</thead>
									<tbody>
										<tr className='border-bottom'>
											<td>BS-200</td>
											<td className='text-center '>$10.99</td>
											<td className='text-center'>1</td>
											<td className='text-end '>$10.99</td>

										</tr>
										<tr className='border-bottom'>
											<td>BS-400</td>
											<td className='text-center'>$20.00</td>
											<td className='text-center '>3</td>
											<td className='text-end '>$60.00</td>

										</tr>
										<tr className='thick-line'>
											<td>BS-1000</td>
											<td className='text-center'>$600.00</td>
											<td className='text-center'>1</td>
											<td className='text-end'>$600.00</td>

										</tr>
										<tr>
											<td></td>
											<td className='text-center'></td>
											<td className='text-center'><strong>Subtotal</strong></td>
											<td className='text-end'>$670.99</td>

										</tr>
										<tr>
											<td></td>
											<td className='text-center'></td>
											<td className='text-center'><strong>Shipping</strong></td>
											<td className='text-end'>$15</td>

										</tr>
										<tr>
											<td></td>
											<td className='text-center'></td>
											<td className='text-center'><strong>Total</strong></td>
											<td className='text-end text-white font-18'>$685.99</td>

										</tr>
									</tbody>

								</table>

								<div className='table-body-btn text-end'>
									<button className='btn btn-success mx-3 table-body-btn ' onClick={() => window.print()}><PrintIcon fontSize='small'/></button>
									<button className='btn btn-primary table-body-btn'>Send</button>
								</div>
						
							</div>



							
						</div>
						</div>

						
					</div>

					

				</div>
			</div>
		</div>	

		)
}
export default Invoice_page;