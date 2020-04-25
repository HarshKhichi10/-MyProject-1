import React, { Component } from 'react'
import { Link ,Route,Switch} from 'react-router-dom'
import { Grid ,Cell,Card, CardTitle,Tabs,Tab, CardActions, CardMedia, CardText, CardMenu,Button } from 'react-mdl'
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import './section1.css'
import './section2.css'
import Rte from './Rte'
import About from './About'
import Header from './Header'
import NavLinks from './NavLinks'
import UserForm from './form/UserForm'
import Footer from './Footer'





class main extends Component {

   
    render() {
        return (
         <div> 
      <Header/>
      <NavLinks/>

     <div>
	 <Grid className="main-content">
     <Cell col={4}>
     <div className="left-content">
                               
                <button  className="collapsible"> Montessori Program</button>
                    				
		         <button className="collapsible"> Lower School</button>
              
                 
		        <button className="collapsible"> Middle School</button>
                
                
                 
                 
                 
				 <button className="collapsible"> Upper School</button>
                
                
    
                 
		
				<button className="collapsible"> Summit Summer</button>
                </div>
                
                
                 
			
		     
		


     </Cell>
   
   <Cell col={8}>
          <div className="main-img" >
                 <img src={"https://previews.123rf.com/images/nosua/nosua1708/nosua170800157/83721399-empty-class-in-school-lesson-back-to-school-background-3d-render-perspective.jpg"} className="four3"/>
                				 


      	</div>
          <h2 className='about-heading'> Menu </h2>
         	 </Cell></Grid>
            </div>
	    <div className='allcards'>
      <Grid>
     <Cell col={4}>
     <Card  shadow= {5} style={{minWidth:'450',margin: 'auto'}}> 
     <CardTitle style={{color:'#fff', height:'170px',
       background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShEo-FhXGmM9YymBXUbAc8J4XzbNV2YrnO1HqZzPYRX2MIqreS&usqp=CAU'}}
     
     ></CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
             <p className='cardtext'> Growth </p>
         <p className='incardtext'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500  </p>    </CardText>     
         <CardActions border>
         <Route><Link to='/UserForm'>
         <Button> EnRoll </Button> 
         </Link></Route>
     </CardActions>
        
      </Card>

     </Cell>
     <Cell col={4}>
     <Card  shadow= {5} style={{minWidth:'450',margin: 'auto'}}> 
     <CardTitle style={{color:'#fff', height:'170px',background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdfQbYKNX4_zU-OjyLGv7s59TJSwWCzrWhy00bRM_QeNgeTj7&usqp=CAU'}}
     
     ></CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
             <p className='cardtext'> Sports </p>
        <p className='incardtext'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500   </p> 
           </CardText>     
          <CardActions border>
          <Route><Link to='/Sports'>            
         <Button > Events </Button> 
         </Link></Route>
     </CardActions>
        
      </Card>  
     </Cell>
     <Cell col={4}>
     <Card  shadow= {5} style={{minWidth:'450',margin: 'auto'}}> 
     <CardTitle style={{color:'#fff', height:'170px',background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzENuGvaevfdpY2ewjWpQylGoWuoIbyfXd7Tmg8DEwayOCb1mA&usqp=CAU'}}
     
     ></CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
             <p className='cardtext'>  Curiculam </p>
         <p className='incardtext'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500    </p> 
           </CardText>     
          <CardActions border>
          <Route><Link to='/Syllabus'> 
         <Button  > Books </Button> 
         </Link> </Route>       
     </CardActions>  
      </Card>  
     </Cell>
      </Grid>

      </div>
      <h2 className='about-heading'> News & Events  </h2>       	
     <div className="middle-block">

   <div className='first-block' style={{width:'500px', height:'300px'}}><p className="firsthedg"> Read About Our 
   School in Print Media </p>
   
   <img className="news-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeGCiTMDEvy18CCvwaWRLNsRPvzxvV-RARVD1Od_R7IRKus_Jo&usqp=CAU"}/>
   <div className="button-img"> <h6 className="textinside">Read More </h6></div> </div>
   
   
   
   <div className='second-block' style={{width:'500px', height:'300px'}}><p className="firsthedg1"> The Our school weekely issue </p> 

   <img className="news-img1" src={"https://user-assets.sharetribe.com/images/listing_images/images/1514572/big/daily_issue.jpg?1525907080"}/>

   <div>   <h6 className='inner-text'> Published On : 25th March 2020</h6>
   <h6 className='inner-text'>  Fifteenth issue</h6>
   </div></div>
                   
   
   
   
   
   <div className='third-block' style={{width:'500px', height:'300px'}}><p className="hedg">The Our School Induction 2020 </p>
   <h6 className="inner-text1">   Due to covid'19  the induction program is pospond to an unkonwn date. For Further Queries Please contact the respective admistrator  </h6>
   <button className="middle-btn"> Download Form </button>  
   
   </div> 
   <div className='fourth-block' style={{width:'500px', height:'300px'}}><p className="hedg">The Our school Updates</p> 
    <ul className="whl">
    <p className="last-text" style={{marginLeft:'-13.9%'}}> 
      <i class="fa fa-laptop" aria-hidden="true" style={{marginRight:'3%'}}></i>We will Continue Our Online Classes untill 29th May, then after the summer vacations starts till 16th July  </p>
    <p className="last-text" style={{marginLeft:'-26%'}}><i class="fa fa-calendar" aria-hidden="true" style={{marginRight:'3%'}}></i>The schedule of classes will be display on your Erp acccount  </p>
    <p className="last-text" style={{marginLeft:'-9%'}}><i class="fa fa-user" aria-hidden="true" style={{marginRight:'3%'}}></i> Any Other information will be display on website so be in touch with the site</p>
          </ul> 
   
    </div> 
      
     </div>

     
    <Footer/>
     	   
      
      	   
    
    
	
   	 
    
            </div>
        )
    }
}
export default main;