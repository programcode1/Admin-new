import React ,{useState} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import '../top-navbar.css'
//fontaswome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGem } from '@fortawesome/free-regular-svg-icons';


import './sidemenu.css'
import {Home ,Album ,Layers,TableChart ,PieChart,Opacity ,Add,Map,Event,Pages,Share,
    Assistant,Remove,
Notifications ,Menu , Fullscreen} from '@material-ui/icons/';
import {Avatar ,Badge} from '@material-ui/core';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';
import small_logo from '../../img/logo_sm.png';


function Sidemenu(){

    //show submenu on small screen 
    const[toggle,settoggle] = useState(false)

    //links all
    let isactive = window.location.pathname
    const[dashboard , setdashboard_path] = useState('/')
    const[UI_ELements ,UI_ELements_getpath] = useState('')
    const[forms,forms_getpath] = useState('')
    const[typo , typo_getpath] = useState('')
    const[table , table_getpath] = useState('')
    const[charts , charts_getpath] = useState('')
    const[icons , icons_getpath] = useState('')
    const[maps , maps_getpath] = useState('')
    const[calendar , calendar_getpath] = useState('')
    const[layout , layout_getpath] = useState('')
    const[pages , pages_getpath] = useState('')


    //show to submenu
    const[obj , setobj] = useState({
            'id1':false,
            'id2':false,
            'id3':false ,
            'id4':false,
            'id5':false,
            'id6':false,
            'id7':false,
            'id8':false,
            'id9':false,
    })
    
    return (
       
          
            
            
            <div>    
                <div className={toggle?'visible left-side':'left-side'}>
                    <div className ='links-menu-scorll'>
                   
                            <ul>
                                {/* menu compnent */}
                                <li className='menu-title'>Menu</li>
                                
                                <li className={dashboard == isactive ? 'active':''}>
                                    <Link to='/'>                                 
                                        <div className='link-list ' onClick={()=>setdashboard_path("/")}>
                                            <span><Home style={{ fontSize:14}}/></span>
                                            <span>Dashboard</span>
                                            <span className='badge'>1</span>
                                        </div>
                                    </Link>

                                </li>

                                

                                {/* UI elements*/}
                                <li className={UI_ELements == isactive ? 'active':''} 
                                    onClick = {()=>setobj({
                                        "id1":!(obj.id1), 
                                        "id2":false,
                                        'id3':false ,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                
                                    <div className={obj.id1 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Album style={{ fontSize:14}}/></span>
                                        <span>UI ELements</span>
                                     
                                    </div>
                                     {/*submenu UI*/}
                                    <ul className={obj.id1 ? 'submenu-list show':'submenu-list hide'}>
                                            <Link to='/ui-componets'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-componets');settoggle(false)}}>Components</li>
                                            </Link>
                                            <Link to='/ui-buttons'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-buttons');settoggle(false)}}>Buttons</li>
                                            </Link>
                                            <Link to='/ui-panels'>
                                                 <li onClick={()=>{UI_ELements_getpath('/ui-panels');settoggle(false)}}>panels</li>
                                            </Link>
                                            <Link to='/ui-tabs&accordions'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-tabs&accordions');settoggle(false)}}>Tabs & Accordions</li>
                                            </Link>
                                            <Link to='/ui-modals'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-modals');settoggle(false)}}>Modals</li>
                                            </Link>
                                            <Link to='/ui-progressbar'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-progressbar');settoggle(false)}}>Progress Bars</li>
                                            </Link>
                                            <Link to='/ui-alerts'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-alerts');settoggle(false)}}>Alerts</li>
                                            </Link>
                                            <Link to='/ui-sweet-alert'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-sweet-alert');settoggle(false)}}>Sweet-Alert</li>
                                            </Link>
                                            <Link to='/ui-grid'>
                                                <li onClick={()=>{UI_ELements_getpath('/ui-grid');settoggle(false)}}>Grid</li>
                                            </Link>
                                                
                                    </ul>
                                    
                                </li>

                               
                               
                                
                                {/* forms elements*/}
                                <li className={forms == isactive ? 'active':''}
                                    onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":!(obj.id2),
                                        'id3':false ,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                                                    
                                    <div className={obj.id2 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Layers style={{ fontSize:14}}/></span>
                                        <span>Forms</span>
                                    </div>
                                     <ul className={obj.id2 ? 'submenu-list show':'submenu-list hide'}>
                                         <Link to='/forms-element'>
                                            <li onClick={()=>{forms_getpath('/forms-element');settoggle(false)}}>General Elements</li>
                                        </Link>
                                         <Link to='/forms-validation'>
                                            <li onClick={()=>{forms_getpath('/forms-validation');settoggle(false)}}>Form Validation</li>
                                        </Link>
                                        <Link to='/forms-advance'> 
                                            <li onClick={()=>{forms_getpath('/forms-advance');settoggle(false)}}>Advanced Form</li>
                                        </Link>
                                        <Link to='/forms-wysiwyg'>
                                            <li onClick={()=>{forms_getpath('/forms-wysiwyg');settoggle(false)}}>WYSIWYG Editor</li>
                                        </Link>
                                        <Link to='/forms-uploads'>
                                            <li onClick={()=>{forms_getpath('/forms-uploads');settoggle(false)}}>Multiple File Upload</li>
                                        </Link>
                                    </ul>
                                </li>

                                 
                                
                                {/*typography*/}
                                <li className={typo == isactive ? 'active':''} 
                                    onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false ,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                    <Link to='/typography'>
                                        <div className='link-list' onClick={()=>typo_getpath('/typography')}>
                                            <span><FontAwesomeIcon icon={faGem} /></span>
                                            <span>Typography</span>
                                            <span className='badge'>4</span>
                                        </div>
                                     </Link>
                                </li>

                                {/*table elements*/}
                                <li className={table == isactive ? 'active':''} 
                                    onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':!(obj.id3),
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                    <div className={obj.id3 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><TableChart style={{ fontSize:14}}/></span>
                                        <span>Tables</span>

                                    </div>
                                     {/*sub menu table */}
                                    <ul className={obj.id3 ? 'submenu-list show':'submenu-list hide'}>
                                        <Link to='/tables-basic'>
                                            <li onClick={()=>{table_getpath('/tables-basic');settoggle(false)}}>
                                                Basic Tables
                                            </li>
                                        </Link>
                                        <Link to='/tables-data'>
                                            <li onClick={()=>{table_getpath('/tables-data');settoggle(false)}}>
                                                Data Tables
                                            </li>
                                        </Link>
                                        <Link to='/tables-responsive'>
                                            <li onClick={()=>{table_getpath('/tables-responsive');settoggle(false)}}>
                                                Responsive Table
                                            </li>
                                        </Link>
                                        <Link to='/tables-editable'>
                                            <li onClick={()=>{table_getpath('/tables-editable');settoggle(false)}}>
                                                Editable table
                                            </li>
                                        </Link>
                                    </ul>
                                </li>
                               
                               
                                {/*charts element */}
                                <li className={charts == isactive ? 'active':''} 
                                      onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':!(obj.id4),
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                    <div className={obj.id4 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><PieChart style={{ fontSize:14}}/></span>
                                        <span>Charts</span>
                                    </div> 

                                    {/*submenu list */}
                                    <ul className={obj.id4 ? 'submenu-list show':'submenu-list hide'}>
                                        <Link to='charts-morris'>
                                            <li onClick={()=>{charts_getpath('/charts-morris');settoggle(false)}}>Morris Chart</li>
                                        </Link>
                                        <Link to='charts-chartjs'>
                                            <li onClick={()=>{charts_getpath('/charts-chartjs');settoggle(false)}}>Chartjs</li>
                                        </Link>
                                        <Link to='charts-float'>
                                            <li onClick={()=>{charts_getpath('/charts-float');settoggle(false)}}>Flot Chart</li>
                                        </Link>
                                        <Link to='charts-others'>
                                            <li onClick={()=>{charts_getpath('/charts-others');settoggle(false)}}>Other Chart</li>
                                        </Link>
                                    </ul>

                                   
                                </li>
                               
                               

                                {/*icons elements */}
                                <li className={icons == isactive ? 'active':''} 
                                         onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':!(obj.id5),
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                >
                                    <div className={obj.id5 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Opacity style={{ fontSize:14}}/></span>
                                        <span>Icons</span>
                                    </div>
                                    {/*submenu list */}
                                    <ul className={obj.id5 ? 'submenu-list show':'submenu-list hide'}>
                                        <Link to='/icons-matrial'>
                                            <li onClick={()=>{icons_getpath('/icons-matrial');settoggle(false)}}>Material Design</li>
                                        </Link>
                                        <Link to='/icons-ion'>
                                            <li onClick={()=>{icons_getpath('/icons-ion');settoggle(false)}}>Ion Icons</li>
                                        </Link>
                                        <Link to='/icons-fontawesome'>
                                            <li onClick={()=>{icons_getpath('/icons-fontawesome');settoggle(false)}}>Font awesome</li>
                                        </Link>
                                        <Link to='/icons-themify'>
                                            <li onClick={()=>{icons_getpath('/icons-themify');settoggle(false)}}>Themify Icons</li>
                                        </Link>
                                    </ul>

                             
                                </li>
                               
                               
                               

                            
                        

                                {/* features compnent */}
                                <li className='menu-title'>Features</li>
                                
                                
                                {/*Maps elements*/}
                                <li className={maps == isactive ? 'active':''} 
                                     onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':false,
                                        'id6':!(obj.id6),
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}
                                    >
                                    <div className={obj.id6 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Map style={{ fontSize:14}}/></span>
                                        <span>Maps</span>
                                    </div>
                                     {/*map sub menu*/}
                                    <ul className={obj.id6 ? 'submenu-list show':'submenu-list hide'}>
                                        <Link to='/maps-google'>
                                            <li onClick={()=>{maps_getpath('/maps-google');settoggle(false)}}>Google Map</li>
                                        </Link>
                                        <Link to='/maps-vector'>
                                            <li onClick={()=>{maps_getpath('/maps-vector');settoggle(false)}}>Vector Map</li>
                                        </Link>
                                                
                                    </ul>
                                </li>
                               
                               
                                
                                {/*calendar*/}
                                <li className={calendar == isactive ? 'active':''} 
                                        onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':false

                                    })}

                                    >
                                    <Link to='/calendar'>
                                        <div className='link-list ' onClick={()=>calendar_getpath('/calendar')}>
                                            <span><Event style={{ fontSize:14}}/></span>
                                            <span>Calendar</span>
                                            <span className='badge'>New</span>
                                        </div>
                                    </Link>
                                    
                                </li>

                                {/*layout */}
                                <li className={layout == isactive ? 'active':''}
                                        onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':!(obj.id7),
                                        'id8':false,
                                        'id9':false

                                    })}

                                    >
                                    <div className={obj.id7 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Assistant style={{ fontSize:14}}/></span>
                                        <span>Layout</span>
                                    </div>
                                     {/*layout sub menu*/}
                                    <ul className={obj.id7 ? 'submenu-list show':'submenu-list hide'}>
                                        <li>Menu Collapse</li>
                                        <li>Menu Small</li>
                                        <li>Menu Style 2</li>
                                    </ul>
                                </li>
                               
                                
                                {/*pages element */}
                                <li className={pages == isactive ? 'active':''}
                                        onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':!(obj.id8),
                                        'id9':false

                                    })}
                                    >
                                    <div className={obj.id8 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Pages style={{ fontSize:14}}/></span>
                                        <span>Pages</span>
                                    </div>
                                    {/*sub menu of pages*/}
                                    <ul className={obj.id8 ? 'submenu-list show':'submenu-list hide'}>
                                            <Link to='login-page'>
                                                <li onClick={()=>{pages_getpath('/login-page');settoggle(false)}}>Login</li>
                                            </Link>
                                            <Link to='register-page'>
                                                <li onClick={()=>{pages_getpath('/register-page');settoggle(false)}}>Register</li>
                                            </Link>
                                            <Link to='recover-password-page'>
                                                <li onClick={()=>{pages_getpath('/recover-password-page');settoggle(false)}}>Recover Password</li>
                                            </Link>
                                            <Link to='lock-screen-page'>
                                                <li onClick={()=>{pages_getpath('/lock-screen-page');settoggle(false)}}>Lock Screen</li>
                                            </Link>
                                            <Link to='blank-page'>
                                                <li onClick={()=>{pages_getpath('/blank-page');settoggle(false)}}>Blank Page</li>
                                            </Link>
                                            <Link to='404-page'>
                                                <li onClick={()=>{pages_getpath('/404-page');settoggle(false)}}>Error 404</li>
                                            </Link>
                                            <Link to='500-page'>
                                                <li onClick={()=>{pages_getpath('/500-page');settoggle(false)}}>Error 500</li>
                                            </Link>
                                            <Link to='timeline-page'>
                                                <li onClick={()=>{pages_getpath('/timeline-page');settoggle(false)}}>Timeline</li>
                                            </Link>
                                            <Link to='invoice-page'>
                                                <li onClick={()=>{pages_getpath('/invoice-page');settoggle(false)}}>Invoice</li>
                                            </Link>
                                            <Link to='directory-page'>
                                                <li onClick={()=>{pages_getpath('/directory-page');settoggle(false)}}>Directory</li>
                                            </Link>
                                    </ul>
                                </li>
                              
                                {/*mutli menu*/}
                                <li className={obj.id9 ? 'active':''} 
                                      onClick = {()=>setobj({
                                        "id1":false, 
                                        "id2":false,
                                        'id3':false,
                                        'id4':false,
                                        'id5':false,
                                        'id6':false,
                                        'id7':false,
                                        'id8':false,
                                        'id9':!(obj.id9)

                                    })}
                                    >
                                    <div className={obj.id9 ? 'link-list content-show':'link-list content-hide'}>
                                        <span><Share style={{ fontSize:14}}/></span>
                                        <span>Multi Menu</span>
                                          
                                    </div>
                                    {/* sub menu share */}
                                    <ul class='submenu-list'>
                                        <li>
                                                
                                            <div className=' link-list p-0 '>
                                                <span className='p-0'>Menu Item 1.1</span>
                                            </div>
                                       
                                        </li>
                                        <li>Menu Item 1.2</li>

                                    </ul>
                                </li>
                            </ul>
                   
                    </div>
                </div>
                <div className='d-flex navbar-top'>
                    <Link to='/'>  
                           <picture className="logo_img">
                                <source srcset={small_logo} className = "logo_small" media="(max-width:795px)"/>
                                <img srcset={logo} className="logo"/>

                            </picture>
                        </Link>
                    <div className='top-nav'>
                        <ul className='left'>
                        
                            <li className='toggle ' onClick={()=>settoggle(!toggle)}>
                                <Menu className='bar-toogle' style={{fontSize:25}}/>
                            </li>
                            <li>
                                <input type='text' class="form-control search-bar" placeholder="Search.." />
                            </li>
                        </ul>
                        

                        

                        <ul className='right'>
                                    
                                <li className='round-circle'>
                                    <span><Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                                        <Notifications style={{fontSize:20}}/>
                                    </Badge></span>
                                </li>
                                <li className='round-circle'>
                                    <span><Fullscreen style={{fontSize:16}}/></span>
                                </li>
                                <li >
                                    <Avatar alt="s" src="/static/images/avatar/1.jpg" className='avtar' style={{fontSize:16}}/>
                                </li>
                        </ul>
                    </div>
                
            </div>
        </div>
                
      
   
    )
}

export default Sidemenu;
