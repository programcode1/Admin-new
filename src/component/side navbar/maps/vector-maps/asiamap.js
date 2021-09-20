import React,{useRef} from 'react'
import { VectorMap } from "react-jvectormap";
function Asia_map(){
	
	const r = useRef("map")
	return (
		<div className='mx-auto' style={{width: 470, height:400}}>
            <VectorMap map={'asia_mill'}
            			ref={r}
            			backgroundColor='transparnt'
            			regionStyle = {{initial: { fill: '#dcdcdc'}}}
                       containerStyle={{
                           width: '100%',
                           height: '100%'
                       }}
                       containerClassName="map"
            />
        </div>

		)
}

export default Asia_map;