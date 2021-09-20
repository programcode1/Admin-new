import React from 'react'
import './Compoent.css'
import {ArrowRightAlt,KeyboardBackspace} from '@material-ui/icons/';

function Component(){
	return (

		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Component</h5>
				<div className='row mb-4 justify-content-center'>
					
						<div className=' col-md-6'>
							<div className=' bg-color'>
								
										
									<div className='px-3 pt-3 pb-4'>

										<h4 className='m-b text-white'>Pagination</h4>
										<nav aria-label="Page navigation example " >
											  <ul class="pagination m-b">
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Previous">
											        <span aria-hidden="true">&laquo;</span>
											      </a>
											    </li>
											    <li class="page-item"><a class="page-link" href="#">1</a></li>
											    <li class="page-item"><a class="page-link active" href="#">2</a></li>
											    <li class="page-item"><a class="page-link" href="#">3</a></li>
											    <li class="page-item"><a class="page-link" href="#">4</a></li>
											    <li class="page-item"><a class="page-link" href="#">5</a></li>
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Next">
											        <span aria-hidden="true">&raquo;</span>
											      </a>
											    </li>
											  </ul>
										</nav>
										<nav aria-label="Page navigation example ">
											  <ul class="pagination pagination-sm m-b">
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Previous">
											        <span aria-hidden="true">&laquo;</span>
											      </a>
											    </li>
											    <li class="page-item"><a class="page-link" href="#">1</a></li>
											    <li class="page-item"><a class="page-link active" href="#">2</a></li>
											    <li class="page-item"><a class="page-link" href="#">3</a></li>
											    <li class="page-item"><a class="page-link" href="#">4</a></li>
											    <li class="page-item"><a class="page-link" href="#">5</a></li>
											    <li class="page-item"><a class="page-link" href="#">6</a></li>
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Next">
											        <span aria-hidden="true">&raquo;</span>
											      </a>
											    </li>
											  </ul>
										</nav>
										<nav aria-label="Page navigation example">
											  <ul class="pagination pagination-lg ">
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Previous">
											        <span aria-hidden="true">&laquo;</span>
											      </a>
											    </li>
											    <li class="page-item"><a class="page-link" href="#">1</a></li>
											    <li class="page-item"><a class="page-link active" href="#">2</a></li>
											    <li class="page-item"><a class="page-link" href="#">3</a></li>
											    <li class="page-item"><a class="page-link" href="#">4</a></li>
											    <li class="page-item">
											      <a class="page-link" href="#" aria-label="Next">
											        <span aria-hidden="true">&raquo;</span>
											      </a>
											    </li>
											  </ul>
										</nav>
									</div>
								</div>


						</div>
						<div className='col-md-6'>
							
							<div className=' bg-color'>
								
										
									<div className='px-3 pt-3 pb-2'>

										<h4 className=' text-white'>Pagers</h4>
										<ul className='pager pager1'>
											<li>
												<a>&laquo; Previous</a>
											</li>
											<li>
												<a>Next &raquo;</a>
											</li>

										</ul>
										<ul className='pager pager2'>
											<li>
												<a className='rotate-arrow'><ArrowRightAlt/></a>
											</li>
											<li>
												<a><ArrowRightAlt/></a>
											</li>

										</ul>
										<ul className='pager pager2'>
											<li>
												<a><ArrowRightAlt className='rotate-arrow'/> Previous</a>
											</li>
											<li>
												<a>Next <ArrowRightAlt/></a>
											</li>

										</ul>
										
									</div>
							</div>

						</div>
					</div>

					{/* 2 row */}
					<div className='row mb-4'>
						<div className='col-md-6'>
							<div className=' labels bg-color py-4 px-3'>
								<h5 className='mb-4'>Labels</h5>
								<span class="badge bg-secondary">Default</span>
								<span class="badge bg-primary">Primary</span>
								<span class="badge bg-success">Success</span>
								<span class="badge bg-info ">Info</span>
								<span class="badge bg-warning ">Warning</span>
								<span class="badge bg-dark">Dark</span>
								<span class="badge bg-danger">Danger</span>
								{/*<span class="badge bg-light text-dark">Light</span>*/}
								

							</div>
							
						</div>
						<div className='col-md-6'>
							<div className=' labels bg-color py-4 px-3'>
								<h5 className='mb-4'>Badge</h5>
								<span class="badge rounded-pill bg-primary">15</span>
								<span class="badge rounded-pill bg-success">0</span>
								<span class="badge rounded-pill bg-info ">21</span>
								<span class="badge rounded-pill bg-dark">3</span>
								<span class="badge rounded-pill bg-warning ">35</span>
								<span class="badge rounded-pill bg-danger">32</span>
								<span class="badge rounded-pill bg-secondary">9</span>
							
							</div>
							
						</div>
						
					</div>

					{/* 3 row */}
					<div className='row mb-4'>
						<div className='col-md-6'>
							<div className=' popvers bg-color py-4 px-3'>
								<h5 className='mb-4'>Popvers</h5>
								<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
								  Popover on top
								</button>
								<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
								  Popover on bottom
								</button>
								<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
								  Popover on right
								</button>
								<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
								  Popover on left
								</button>
								<br/>
								<a tabindex="0" class="btn btn-secondary mt-2" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">
									Dismissible popover</a>
								

							</div>
							
						</div>
						<div className='col-md-6'>
							<div className='popvers bg-color py-4 px-3'>
								<h5 className='mb-4'>Tooltip</h5>
								<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
								  Tooltip on top
								</button>
								<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
								  Tooltip on right
								</button>
								<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
								  Tooltip on bottom
								</button>
								<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
								  Tooltip on left
								</button>
							
							</div>
							
						</div>
						
					</div>

				{/* 4 row */}
					<div className='row mb-5 mx-0 bg-color '>
						<h5 className='mb-3 mt-3 mx-1'>List Groups</h5>
						<div className='col-md-6'>
							<div className=' popvers bg-color py-4 mb-3'>
								
								<h6 className='mb-2'>Simple List Group</h6>
								<ul class="list-group">
								  <li class="list-group-item d-flex justify-content-between align-items-center">
								    Cras justo odio
								    <span class="badge bg-primary rounded-pill">14</span>
								  </li>
								  <li class="list-group-item d-flex justify-content-between align-items-center">
								    Dapibus ac facilisis in
								    <span class="badge bg-danger rounded-pill">25</span>
								  </li>
								  <li class="list-group-item d-flex justify-content-between align-items-center">
								    Morbi leo risus
								    <span class="badge bg-warning rounded-pill">5</span>
								  </li>
								  <li class="list-group-item d-flex justify-content-between align-items-center">
								    Morbi leo risus
								    <span class="badge bg-dark rounded-pill">9</span>
								  </li>
								  <li class="list-group-item d-flex justify-content-between align-items-center">
								    Morbi leo risus
								    <span class="badge bg-success rounded-pill">10</span>
								  </li>
								</ul>
								

							</div>
							
						</div>
						<div className='col-md-6'>
							<div className='popvers bg-color py-4 '>
								<h6 className='mb-2'>List Group with Links</h6>
								
								<div class="list-group">
								  <a href="#" class="list-group-item list-group-item-action">Cras justo odio</a>
								  <a href="#" class="list-group-item list-group-item-action ">Dapibus ac facilisis in</a>
								  <a href="#" class="list-group-item list-group-item-action ">Morbi leo risus</a>
								  <a href="#" class="list-group-item list-group-item-action disabled">Porta ac consectetur ac</a>
								  <a href="#" class="list-group-item list-group-item-action ">Vestibulum at eros</a>
								  
								</div>
							
							</div>
							
						</div>
						
					</div>

				</div>
			</div>




















	)
}

export default Component;