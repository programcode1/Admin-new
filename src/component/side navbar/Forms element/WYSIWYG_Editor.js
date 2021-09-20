import React from 'react'
import './WYSIWYG_Editor.css'
import ReactSummernote from 'react-summernote';
import '../../../../node_modules/react-summernote/dist/react-summernote.css'; // import styles

function Weditor(){
	return (

		<div className='text-white mt-5'>
			  <ReactSummernote
		                   

                focus = {true}

		        />
		</div>
		)
}

export default Weditor;