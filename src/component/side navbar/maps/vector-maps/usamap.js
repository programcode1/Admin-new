import React,{useRef} from 'react'
import { VectorMap } from "react-jvectormap";
function Usa_map(){
	
	const r = useRef("map")
	return (
		<div className='mx-auto' style={{width:470, height: 400}}>
            <VectorMap map={'us_aea'}
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

export default Usa_map;