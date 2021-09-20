import React from 'react'
import './typography.css'
function TypoGraphy(){
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Typography</h5>
				
				{/* heading */}
				<div className='bg-color mb-4 pb-4 heading-typo'>
					<div className='row px-4'>
						<div className='col-md-12 '>
							<h4 className='py-4'>Headings</h4>
							 <div className='mb-4'>
							 	<h1> 
							 		Heading 1
							 		<small className='text-muted'>  Secondary Text</small>
							 	</h1>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>

							 <div className='mb-4'>
							 	<h2> 
							 		Heading 2
							 		<small className='text-muted'>  Secondary Text</small>
							 	</h2>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>
							 <div className='mb-4'>
							 	<h3> 
							 		Heading 3
							 		<small className='smallheading-color'>  Secondary Text</small>
							 	</h3>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>
							 <div className='mb-4'>
							 	<h4> 
							 		Heading 4
							 		<small className='smallheading-color'>  Secondary Text</small>
							 	</h4>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>
							 <div className='mb-4'>
							 	<h5> 
							 		Heading 5
							 		<small className='smallheading-color'>  Secondary Text</small>
							 	</h5>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>
							 <div className='mb-4'>
							 	<h6> 
							 		Heading 6
							 		<small className='text-muted'>  Secondary Text</small>
							 	</h6>
							 	<p className='text-muted'> 
							 		Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. 
							 		Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
							 	</p> 
							 </div>
						</div>
					</div>
				</div>	

				{/*Paragraph */}
				<div className='bg-color mb-4 pb-3 '>
					<div className= 'row px-4'>
						<div className='col-md-12'>
							<h4 className='pt-3 pb-4'>Paragraphs</h4>
							<div className='paragraph'>
								<h4 className='lead text-muted mb-4'>This is a lead parapraph.</h4>
								<p className='text-muted'> 
									Neglected <strong>principle ask rapturous</strong> consulted. Lorem lively all did feebly excuse our 
									wooded. Old her object <del>chatty regard vulgar</del> missed.

								</p> 
								<p className='text-muted'> 
									Believing neglected so so allowance existence departure in. 
									In <span class="label label-info" data-toggle="tooltip" data-placement="top" title="" 
									data-original-title="This is Design" aria-describedby="tooltip841555">design </span>
									 active temper be uneasy.
									Thirty for remove plenty regard you summer though. 
									He preference <u>connection astonished </u>on of ye.
								</p>
								<p className='text-muted'> 
									As am hastily <mark>invited settled at limited</mark>   civilly fortune me. 
									Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at.
									 Confined in declared marianne is vicinity.

								</p>
								<p className='text-muted'> 
									Last paragraph has no bottom margin always.
								</p>
								<p className='text-muted'>
									Nullam quis risus eget urna mollis ornare vel eu leo.<a href=''>this is link</a> Cum sociis natoque penatibus et magnis dis parturient montes...
								</p>

							</div>
						</div>
					</div>	
				</div>

				{/*colors and blockquote*/}
				<div className='row'> 
					<div className='col-md-6'> 
						<div className='contet-colors px-4 pb-3 pt-3 bg-color'>
							<h4 className='mb-4'>Contextual Text Colors</h4>
							<p className='text-secondary'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p> 
							<p className='text-primary'>Nullam id dolor id nibh ultricies vehicula ut id elit.</p> 
							<p className='text-success'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p> 
							<p className='text-info'>Maecenas sed diam eget risus varius blandit sit amet non magna.</p> 
							<p className='text-warning'>Etiam porta sem malesuada magna mollis euismod.</p> 
							<p className='text-danger'>Donec ullamcorper nulla non metus auctor fringilla.</p> 
						</div>
					</div>
					<div className='col-md-6'> 
						<div className='bg-color blockq px-4 pb-3 pt-3'> 
							<h4 className='mb-4'>Blockquotes</h4>
							<blockquote className="blockquote-left mb-4 border-left">
  								<p className='text-muted px-3 pt-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  								<footer className='px-3 pb-3'>Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>

							<blockquote className="blockquote-reverse text-end border-right">
							  <p className='text-muted  pt-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							  <footer className='px-3 pb-3'>Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</div>

					</div>
				</div>

			</div>
		</div>	
	)
}

export default TypoGraphy;