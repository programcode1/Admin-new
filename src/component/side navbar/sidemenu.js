import React ,{useState} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

// //fontaswome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGem } from '@fortawesome/free-regular-svg-icons';


import './sidemenu.css'
import {Home ,Album ,Layers,TableChart ,PieChart,Opacity ,Add,Map,Event,Pages,Share,Assistant,Remove} from '@material-ui/icons/';
import {Badge} from '@material-ui/core';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';



function Sidemenu(){

    
    //toggle1 
    const [toggle,settoggle]=useState(false)
    //toggle2
    const [toggle2,settoggle2]=useState(false)
   //toggle3
    const [toggle3,settoggle3]=useState(false)
    //toggle4
    const [toggle4,settoggle4]=useState(false)
    //toggle5
    const [toggle5,settoggle5]=useState(false)
    //toggle6
    const [toggle6,settoggle6]=useState(false)
    //toggle7
    const [toggle7,settoggle7]=useState(false)
    //toggle8
    const [toggle8,settoggle8]=useState(false)
    //toggle9
    const [toggle9,settoggle9]=useState(false)
    //toggle10
    const [toggle10,settoggle10]=useState(false)

    const[Badge1 , setBadge1] = useState(false)
    const[Badge2 , setBadge2] = useState(false)
    const[Badge3 , setBadge3] = useState(false)
   
    return (
       
          
            
            
                
                <div className='left-side'>
                    <div className ='links-menu-scorll'>
                   
                            <ul>
                                {/* menu compnent */}
                                <li className='menu-title'>Menu</li>
                                
                                <li className={Badge1 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle(false);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(!Badge1)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <Link to='/'>                                 
                                        <div className='link-list padding-badge'>
                                            <a href=''className='link-name'>
                                                <Home style={{ fontSize:19}}/>
                                                <span>Dashboard</span>
                                                
                                            </a>
                                           <span className='badge'>1</span>
                                        </div>
                                    </Link>

                                </li>

                                


                                <li className={toggle ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle(!toggle);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                
                                    <div className=' link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <Album style={{ fontSize:19}}/>
                                            <span>UI ELements</span>
                                            
                                        </a>
                                        {
                                            (()=> {
                                                if (!toggle){
                                                    
                                                   
                                                    return <Add style={{ fontSize:16}}/>
                                                    
                                                }else{
                                                    
                                                     return  <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            

                                            })()
                                        }
                                        
                                      
                                    </div>
                                    
                                </li>

                                {/*submenu UI*/}
                                {
                                    toggle?  <ul class='submenu-list'>
                                        <Link to='/ui-componets'><li>Components</li></Link>
                                        <Link to='/ui-buttons'><li>Buttons</li></Link>
                                        <Link to='/ui-panels'><li>panels</li></Link>
                                        <Link to='/ui-tabs&accordions'><li>Tabs & Accordions</li></Link>
                                        <Link to='/ui-modals'><li>Modals</li></Link>
                                        <Link to='/ui-progressbar'><li>Progress Bars</li></Link>
                                        <Link to='/ui-alerts'><li>Alerts</li></Link>
                                        <Link to='/ui-sweet-alert'><li>Sweet-Alert</li></Link>
                                        <Link to='/ui-grid'><li>Grid</li></Link>
                                        
                                </ul>:null
                                }
                                

                                <li className={toggle2 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle2(!toggle2);
                                                                    settoggle(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className=' link-list padding-plus'>
                                        <a href=''  className='link-name'>
                                            <Layers style={{ fontSize:19}}/>
                                            <span>Forms</span>
                                            
                                        </a>
                                         {
                                            (()=>{
                                                if (!toggle2){
                                                    
                                                    return <Add style={{ fontSize:16}}/>
                                                    
                                                }else{
                                                    
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                </li>

                                 {/*submenu Forms*/}
                                  {
                                    toggle2?  <ul class='submenu-list'>
                                     <Link to='/forms-element'><li>General Elements</li></Link>
                                     <Link to='/forms-validation'><li>Form Validation</li></Link>
                                     <Link to='/forms-advance'> <li>Advanced Form</li></Link>
                                     <Link to='/forms-wysiwyg'><li>WYSIWYG Editor</li></Link>
                                     <Link to='/forms-uploads'><li>Multiple File Upload</li></Link>
                                    
                                   
                                    
                                        
                                        
                                    </ul>:null

                                }
                                
                                
                                <li className={Badge2 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle3(false)
                                                                    settoggle2(false);
                                                                    settoggle(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(false)
                                                                    setBadge2(!Badge2)
                                                                    setBadge3(false)}}>
                                    <Link to='/typography'>
                                        <div className=' link-list padding-badge'>
                                            
                                            <a href='' className='link-name'>
                                                        <FontAwesomeIcon icon={faGem} />
                                                        <span>Typography</span>
                                            </a> 
                                             <span className='badge'>4</span>
                                        </div>
                                     </Link>
                                </li>
                                
                                <li className={toggle3 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle3(!toggle3)
                                                                    settoggle2(false);
                                                                    settoggle(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className='link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <TableChart style={{ fontSize:19}}/>
                                            <span>Tables</span>
                                            
                                        </a>
                                         {
                                            (()=>{
                                                if (!toggle3){
                                                    return <Add style={{ fontSize:16}}/>
                                                   
                                                    
                                                }else{
                                                     return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                    
                                </li>
                                {/*sub menu table */}
                                  {
                                    toggle3?   <ul class='submenu-list'>
                                        <Link to='/tables-basic'><li>Basic Tables</li></Link>
                                        <Link to='/tables-data'><li>Data Tables</li></Link>
                                        <Link to='/tables-responsive'><li>Responsive Table</li></Link>
                                        <Link to='/tables-editable'><li>Editable Table</li></Link>
                                        
                                        
                                        


                                </ul>:null

                                }
                               
                                <li className={toggle4 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle4(!toggle4);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                    setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className='link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <PieChart style={{ fontSize:19}}/>
                                            <span>Charts</span>
                                        </a>
                                         {
                                            (()=>{
                                                if (!toggle4){
                                                    return <Add style={{ fontSize:16}}/>
                                                }else{
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                       
                                    </div>    
                                </li>
                                {
                                    toggle4? <ul class='submenu-list'>
                                    // <Link to='charts-morris'><li>Morris Chart</li></Link>
                                    <Link to='charts-chartjs'><li>Chartjs</li></Link>
                                    // <Link to='charts-float'><li>Flot Chart</li></Link>
                                    <Link to='charts-others'><li>Other Chart</li></Link>
                                    </ul>:null

                                }
                               


                                
                               
                               

                            
                                {/* features compnent */}
                                <li className='menu-title'>Features</li>
                                
                                <li className={toggle6 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle6(!toggle6);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className='link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <Map style={{ fontSize:19}}/>
                                            <span>Maps</span>
                                        </a>
                                        {
                                            (()=>{
                                                if (!toggle6){
                                                    return <Add style={{ fontSize:16}}/>
                                                }else{
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                    
                                </li>
                                {/*map sub menu*/}
                                 {
                                    toggle6? <ul class='submenu-list'>
                                    <Link to='/maps-google'><li>Google Map</li></Link>
                                    <Link to='/maps-vector'><li>Vector Map</li></Link>
                                            
                                </ul>:null

                                }
                               
                                

                                <li className={Badge3 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle7(false);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(!Badge3)}}>
                                    <Link to='/calendar'>
                                        <div className='link-list padding-plus'>
                                            <a href='' className='link-name'>
                                                <Event style={{ fontSize:19}}/>
                                                <span>Calendar</span>
                                            </a>
                                             <span className='badge'>new</span>
                                       
                                        </div>
                                    </Link>
                                    
                                </li>
                                <li className={toggle7 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle7(!toggle7);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>

                                    <div className='link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <Assistant style={{ fontSize:19}}/>
                                            <span>Layout</span>
                                        </a>
                                        {
                                            (()=>{
                                                if (!toggle7){
                                                    return <Add style={{ fontSize:16}}/>
                                                }else{
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                </li>
                                {/*layout sub menu*/}
                                {
                                    toggle7?  <ul class='submenu-list'>
                                        <li>Menu Collapse</li>
                                        <li>Menu Small</li>
                                        <li>Menu Style 2</li>
                                            
                                </ul>:null

                                }
                              
                                <li className={toggle8 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle8(!toggle8);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle(false)
                                                                    settoggle9(false)
                                                                    settoggle10(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className='link-list padding-plus'>
                                        <a href='' className='link-name'>
                                            <Pages style={{ fontSize:19}}/>
                                            <span>Pages</span>
                                        </a>
                                        {
                                            (()=>{
                                                if (!toggle8){
                                                    return <Add style={{ fontSize:16}}/>
                                                }else{
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                    
                                </li>
                                {/*sub menu of pages*/}
                                 {
                                    toggle8?  <ul class='submenu-list'>
                                            <Link to='login-page'><li>Login</li></Link>
                                            <Link to='register-page'><li>Register</li></Link>
                                            <Link to='recover-password-page'><li>Recover Password</li></Link>
                                            <Link to='lock-screen-page'><li>Lock Screen</li></Link>
                                            <Link to='blank-page'><li>Blank Page</li></Link>
                                            <Link to='404-page'><li>Error 404</li></Link>
                                            <Link to='500-page'><li>Error 500</li></Link>
                                            <Link to='timeline-page'><li>Timeline</li></Link>
                                            <Link to='invoice-page'><li>Invoice</li></Link>
                                            <Link to='directory-page'><li>Directory</li></Link>
                                </ul>:null

                                }
                               
                                <li className={toggle9 ? 'active':''} onClick={(e)=>{e.preventDefault();settoggle9(!toggle9);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle(false)
                                                                    settoggle10(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                    <div className='link-list padding-plus'>
                                            <a href='' className='link-name'>
                                                <Share style={{ fontSize:19}}/>
                                                <span>Multi Menu</span>
                                            </a>
                                             {
                                            (()=>{
                                                if (!toggle9){
                                                    return <Add style={{ fontSize:16}}/>
                                                }else{
                                                    return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                }
                                            })()
                                        }
                                    </div>
                                </li>
                                {/* sub menu share */}
                                {
                                    toggle9?  <ul class='submenu-list'>
                                    <li onClick={(e)=>{e.preventDefault();settoggle10(!toggle10);
                                                                    settoggle2(false);
                                                                    settoggle3(false)
                                                                    settoggle4(false);
                                                                    settoggle5(false)
                                                                    settoggle6(false);
                                                                    settoggle7(false)
                                                                    settoggle8(false)
                                                                    settoggle9(false)
                                                                    settoggle(false)
                                                                     setBadge1(false)
                                                                    setBadge2(false)
                                                                    setBadge3(false)}}>
                                                
                                        <div className=' link-list p-0 padding-plus'>
                                            <a href='' className='link-name'>
                                                    <span className='p-0'>Menu Item 1.1</span>
                                            </a>
                                                {
                                                    (()=>{
                                                        if (!toggle10){
                                                            return <Add style={{ fontSize:16}}/>
                                                        }else{
                                                            return    <Remove style={{ fontSize:16 , color:'white'}}/>
                                                        }
                                                    })()
                                                }
                                        </div>
                                        {/*Menu Item 1.1 sub menu*/}
                                         {
                                                toggle10?  <ul class='submenu-list'>
                                                    <li>Menu Item 2.1</li>
                                                    <li>Menu Item 2.2</li>
                                                </ul>:null

                                        }
                                                   
                                    </li>
                                        
                                       
                                    <li>Menu Item 1.2</li>

                                </ul>:null

                                }
                               
                                
                            </ul>
                   
                    </div>
                </div>
                
      
   
    )
}

export default Sidemenu;