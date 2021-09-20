import React,{useEffect} from 'react'
// import 'morris.js/morris.min.js';
// import 'morris.js/morris.css';
// import '../../../../node_modules/jquery/dist/jquery.min.js'
// import Raphael from 'raphael/raphael';


function Morris_js(){
	
	//  useEffect(()=>{
	 	
	//  	window.Raphael = Raphael
	// 	new Morris.Bar({
 //  			element: 'graph',
	// 		data : [
	// 			{ year: '2008', value: 20 },
	// 		    { year: '2009', value: 10 },
	// 		    { year: '2010', value: 5 },
	// 		    { year: '2011', value: 5 },
	// 		    { year: '2012', value: 20 }

	// 		] , 
	// 		xkey:'year',
	// 		ykeys:['value'] , 
	// 		labels : ['value']
	// 	});
		
	// },[]);
	return <div>
		<div id='graph' style={{height:'250px'}}></div>
	</div>
}

export default Morris_js;