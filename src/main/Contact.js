import React, { Component } from 'react'
import Rte from './Rte'
import { Route , Link } from 'react-router-dom'
import Header from './Header'
import NavLinks from './NavLinks'
import { Grid ,Cell} from 'react-mdl'
import { Card, CardTitle,Tabs,Tab, CardActions, CardMedia, CardText, CardMenu,Button } from 'react-mdl'
import Footer from './Footer'

import './section3.css'
export default class Contact extends Component {
    render() {
        return (
              <div>     
                <Header/>      
              <NavLinks/>   
       <h3 className='contact-header'> Contact Us</h3>
       
         
       <div>

<Grid>  
 <Cell col={4}>

<div className='contact-card'>
<Card  shadow= {5} style={{minWidth:'550',margin: 'auto' ,background:'url(https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Minimalist-Crumpled-Paper-Simple-Background-Image.jpg)'}}>

<CardTitle style={{color:'black', height:'150px',textAlign:'center'}}>
<h5 style={{textAlign:'center'}}> Address  </h5>
</CardTitle>
<CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>

<p class="contact-card2">
India International School 
26/1, Chikkabellandur, Carmelaram Post,
Opp. Wipro SEZ, Sarjapur Road
Bangalore – 560035
</p>     
</CardText>     
</Card>
</div>
</Cell>

<Cell col={4}>
<div className='contact-card'>
<Card  shadow= {5} style={{minWidth:'450',margin: 'auto',background:'url(https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Minimalist-Crumpled-Paper-Simple-Background-Image.jpg)'}}>

<CardTitle style={{color:'black', height:'150px',textAlign:'center'}}>
<h5 style={{textAlign:'center'}}>Contact For Addimission  </h5>
</CardTitle>
<CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
<p class="contact-card2">
Email id : admission@iisbangalore.org <br/>
Contact No. : +91 6366416842  <br/>  

Fairfax VA , USA <br/>
Contact No. : 5714352267 <br/>
Email Id : vermakbala@gmail.com <br/>
</p>
       </CardText>   

<CardActions border>
<Route><Link to='/UserForm'>
<Button className="cardbutton" > EnRoll Now </Button> 
</Link></Route>
</CardActions>

</Card>
</div>
</Cell>
<Cell col={4}>

<div className='contact-card'>
<Card  shadow= {5} style={{minWidth:'450',margin: 'auto',background:'url(https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Minimalist-Crumpled-Paper-Simple-Background-Image.jpg)'}}>

<CardTitle style={{color:'black', height:'150px',textAlign:'center'}}>
<h5 style={{textAlign:'center'}}>CONTACT SCHOOL: </h5>
</CardTitle>
<CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
<p class="contact-card2">
EFront Office : +91 6366416834
Transport Dept.: +91 6366416844
Email Id : school@iisbangalore.org

Web site: www.iisbangalore.org
</p>
       </CardText>  </Card></div>
           </Cell>


</Grid>                         

</div>         
 <div className='maps'>        
<Grid> 
<Cell col={12}>
<h4 className='header-tablink2'>  Where We are ?  </h4>         
         <iframe src="https://i.stack.imgur.com/V1VH7.png"
          style={{width:'800px', height:'600px' ,scrollbars:'none'  }} />
           </Cell>
           </Grid>
           </div>

           <Footer/>            </div>


)
    }
}
