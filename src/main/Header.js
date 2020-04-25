import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'


export default class Header extends Component {

    render() {
        return (
            <div>
   <header > 
     
     <div className="mono-content" style={{background: 'url()'}}>
       <div className="mono-img">
		    <img style={{height: '150px' , width:'100px'}}src={'https://www.pngitem.com/pimgs/m/116-1164415_olympic-torch-png-picture-olympic-torch-logo-png.png'} /> 
        </div>   
        <hgroup className="two1"> 
 		        <h1 className="two2">THE OUR SCHOOL</h1>
                 <div className="top-border"> <p className="main-border" > </p> </div>
        	      
				   </hgroup>
                   
                   
                          
		      	  <b className="search-input">	<input type="search" placeholder="Search site...." style={{ size:"20"}} className="two5" /> </b>  
                           
                <Link to='/' style={{backgroundColor:'#00cc99', color:'white' }} > <button className='home-main'><i className='fa fa-home'/> Home </button></Link> 	       
      
                  	
                 <div class="dropdown">
             <button class="dropbtn">Menu 
             <i style={{marginLeft:'6%'}}class="fa fa-bars" aria-hidden="true"></i>
        </button>
    <div class="dropdown-content">
    <Route> <Link to='/Aboutus'> <a> <i class="fa fa-info" aria-hidden="true"style={{marginRight:'3%'}}></i>About Us</a> </Link>
    <Link to='/Sports'> <a className="inside-menu">
<i class="fa fa-futbol-o" aria-hidden="true" style={{marginRight:'3%'}}></i>Sports</a> </Link> 
    <Link to='/About'>  <a className="inside-menu1" >
                         <i class="fa fa-money" aria-hidden="true" style={{marginRight:'3%'}}></i> Fee Payment</a></Link>
    <Link to='/Alumini'>    <a className="inside-menu1"><i class="fa fa-handshake-o" aria-hidden="true" style={{marginRight:'3%'}}></i>Donate Us </a></Link>
    <Link to='/Syllabus'>  <a className="inside-menu1"><i class="fa fa-book" aria-hidden="true" style={{marginRight:'3%'}}></i>Library</a></Link>
    <Link to='/Academiclife'>   <a className="inside-menu1">
<i class="fa fa-building" aria-hidden="true" style={{marginRight:'3%'}}></i>Departments</a> </Link>
      </Route> </div>
  </div>  
              
              </div>
              
              
              
               
     </header>       
       </div>
     )
    }
}
