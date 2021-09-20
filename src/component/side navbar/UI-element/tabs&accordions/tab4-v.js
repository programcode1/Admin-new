function Tab_vertical2(){
	return (
		<div className='container '>
			<div className='row table-vertical'>
				<div className='col-md-9'>
					<div className='tab-content'>
						<div className='tab-pane active' id='home-v1'>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
								Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
								dis parturient montes, nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
							</p>
							<p>
								Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
								In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
								mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. 
								Aenean vulputate eleifend tellus. 
								Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
							</p>
					
						</div>
						<div className='tab-pane' id='profile-v1'>
					
							<p>
								Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
								In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
								mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. 
								Aenean vulputate eleifend tellus. 
								Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
								Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
								dis parturient montes, nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
							</p>
							
						</div>
						<div className='tab-pane' id='massage-v1'>
							
							
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
								Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
								dis parturient montes, nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
							</p>
							<p>
								Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
								In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
								mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. 
								Aenean vulputate eleifend tellus. 
								Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
							</p>
							
						</div>
						<div className='tab-pane' id='setting-v1'>
							
							<p>
								Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
								In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
								mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. 
								Aenean vulputate eleifend tellus. 
								Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
								Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
								dis parturient montes, nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
							</p>
							
						</div>
					</div>
				</div>
				<div className='col-md-3'>
					<ul className='nav nav-tabs nav-vertical'>
						<li><a  href="#home-v1" className='nav-item active' data-toggle="tab">home</a></li>
						<li><a  href="#profile-v1"  className='nav-item' data-toggle="tab">Profile</a></li>
						<li><a  href="#massage-v1" className='nav-item' data-toggle="tab">Massage</a></li>
						<li><a  className='nav-ite' href="#setting-v1" data-toggle="tab">Settings</a></li>
					</ul>
				</div>
			</div>
		</div>

		)
}

export default Tab_vertical2;