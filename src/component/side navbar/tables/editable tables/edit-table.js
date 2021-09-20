import React,{useState} from 'react'
import './editable.css'
function Editable(){

	//cost value varable
	const[carcost,setcarcostvalue] = useState(100)
	const[bikecost,setbikecost] = useState(330)
	const[planecost,setplanecost] = useState(430)
	const[yachtcost,setyachtcost] = useState(100)
	const[segwaycost,setsegwaycost] = useState(330)
	const[total_cost,settotalcost] = useState(1290)
	function totalvalue(){
		var sumcost = Number(carcost) + Number(bikecost) + Number(planecost) + Number(yachtcost) + Number(segwaycost)
		settotalcost(sumcost)
		
	}

	//profit value varible
	const[carprofit,setcarprofit] = useState(200)
	const[bikeprofit,setbikeprofit] = useState(240)
	const[planeprofit , setplaneprofit] = useState(540)
	const[yachtprofit,setyachtprofit] = useState(200)
	const[segwayprofit , setsegwayprofit] = useState(240)
	const[total_profit , settotalprofit] = useState(1420)
	function totalprofit(){
		var sumprofit = Number(carprofit) + Number(bikeprofit) + Number(planeprofit) + Number(yachtprofit) + Number(segwayprofit)
		settotalprofit(sumprofit)
	}

	//Fun value varible
	const[carfun,setcarfun] = useState(0)
	const[bikefun,setbikefun] = useState(1)
	const[planefun , setplanefun] = useState(3)
	const[yachtfun,setyachtfun] = useState(0)
	const[segwayfun , setsegwayfun] = useState(1)
	const[total_fun , settotalfun] = useState(5)
	function totalFun(){
		var sumfun = Number(carfun) + Number(bikefun) + Number(planefun) + Number(yachtfun) + Number(segwayfun)
		settotalfun(sumfun)
	}
	
	
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Table Editable</h5>
				<div className='editable-table bg-color p-3'>
					<h4 className='mx-1 mb-4'>Examples</h4>
					<div className='editable mx-1'>
						<table className='table-striped'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Cost</th>
									<th>Profit</th>
									<th>Fun</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									
									<td>
										<input type='text' className='input-width' placeholder='car'/>
									</td>
									<td>
										
										<input type='text'  onBlur={totalvalue} value={carcost} onChange={(e)=>{setcarcostvalue(e.target.value)}}/>
										
									</td>
									<td>
										<input type='text' onBlur={totalprofit} value={carprofit} onChange={(e)=>{setcarprofit(e.target.value)}}/>
									</td>
									<td>
										<input type='text' onBlur={totalFun} value={carfun} onChange={(e)=>{setcarfun(e.target.value)}}/>
									</td>
								</tr>
								<tr>
									<td>
										<input type='text' placeholder='Bike'/>
									</td>
									<td>
										
										<input type='text' onBlur={totalvalue} value={bikecost} onChange={(e)=>{setbikecost(e.target.value)}}/>
									
									</td>
									<td>
										<input type='text' onBlur={totalprofit} value={bikeprofit} onChange={(e)=>{setbikeprofit(e.target.value)}}/>
									</td>
									<td>
										<input type='text' onBlur={totalFun} value={bikefun} onChange={(e)=>{setbikefun(e.target.value)}}/>
									</td>
								</tr>
								<tr>
									<td>
										<input type='text' placeholder='plane'/>
									</td>
									<td>
										
										<input type='text' onBlur={totalvalue} value={planecost} onChange={(e)=>{setplanecost(e.target.value)}}/>
										
									</td>
									<td>
										<input type='text' onBlur={totalprofit} value={planeprofit} onChange={(e)=>{setplaneprofit(e.target.value)}}/>
									</td>
									<td>
										<input type='text' onBlur={totalFun} value={planefun} onChange={(e)=>{setplanefun(e.target.value)}}/>
									</td>
								</tr>
								<tr>
									
									<td>
										<input type='text' placeholder='Yacht'/>
									</td>
									<td>
										
										<input type='text' onBlur={totalvalue} value={yachtcost} onChange={(e)=>{setyachtcost(e.target.value)}}/>
										
									</td>
									<td>
										<input type='text' onBlur={totalprofit} value={yachtprofit} onChange={(e)=>{setyachtprofit(e.target.value)}}/>
									</td>
									<td>
										<input type='text' onBlur={totalFun} value={yachtfun} onChange={(e)=>{setyachtfun(e.target.value)}}/>
									</td>
								</tr>
								<tr>
									
									<td>
										<input type='text' placeholder='Segway'/>
									</td>
									<td>
										
										<input type='text' onBlur={totalvalue} value={segwaycost} onChange={(e)=>{setsegwaycost(e.target.value)}}/>
										
									</td>
									<td>
										<input type='text' onBlur={totalprofit} value={segwayprofit} onChange={(e)=>{setsegwayprofit(e.target.value)}}/>
									</td>
									<td>
										<input type='text' onBlur={totalFun} value={segwayfun} onChange={(e)=>{setsegwayfun(e.target.value)}}/>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>TOTAL</td>
									<td>{total_cost}</td>
									<td>{total_profit}</td>
									<td>{total_fun}</td>
								</tr>
							</tfoot>
							
						</table>
					</div>
					
				</div>
			</div>
		</div>	

		)
}

export default Editable;