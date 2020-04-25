import React, { Component } from 'react'
import { Link ,Route,Switch} from 'react-router-dom'
import { Grid ,Cell,Card, CardTitle,Tabs,Tab, CardActions, CardMedia, CardText, CardMenu,Button } from 'react-mdl'
export default class NavLinks extends Component {
    render() {
        return (
            <div>
       <div className="tab-style">
    <Grid>

     <Cell col={12}>
          <div className='div-nav-link'>      
          
          <Link className='nav-links' to="/About">About Us</Link>
          <Link className='nav-links' to="/Addmission">Admission</Link>
          <Link className='nav-links'to="/Academiclife ">Academics</Link>
          <Link className='nav-links'to="/Syllabus">Syllabus</Link>
          <Link className='nav-links'to="/Contact">Contact</Link>
          <Link className='nav-links'to="/Alumini">Alumini</Link>
          </div>
  
     </Cell>
   </Grid>
     

    </div>
 
            </div>
        )
    }
}
