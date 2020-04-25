import React, { Component } from 'react'
import Rte from './Rte'
import Header from './Header'
import NavLinks from './NavLinks'
import { Grid , Cell } from 'react-mdl'
import Footer from './Footer'
import { Card, CardTitle,Tabs,Tab, CardActions, CardMedia, CardText, CardMenu,Button } from 'react-mdl'
import { Link , Route } from 'react-router-dom'
import './section3.css'
import './section4.css'



export default class Addmission extends Component {
    constructor(props) {
        super(props)
    
        this.state = { activeTab: 0 } 
    }
    toggloChange(){

        if(this.state.activeTab===0){
          return( 
          <div className="tablink">
          <h2 className='header-line'> Chariman's Message </h2> 
          <h4 className='header-tablink1'> Message From The Chariman of the Board </h4>
          <div className='box1-content'>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKMs72-DrM3jtZ0AnEpa0YsTbydA-SUjQ4YUETaqCLbKTGw1lm&usqp=CAU"}
           /> 
          
          <p>Dear Prospective Parents,<br/>
   <br/>

An investment made in a Our School education pays many dividends through life. From the moment he enters the school gates as a 12-year old, a child gets to realise who he is; and where his potential lies. Irrespective of his background or calibre, he is groomed and nurtured in a way that he can stride into the adult world, confidently, responsibly and independently. Multiple generations of successful students are living proof that this unique learning system works, and works well.

Yet, in today’s world, no institution of repute and quality can afford to sit on its laurels. So, a decisive shift is being engineered that will help India’s best school gain a global reputation, and go where no school from India has ever gone.

In the next five years, therefore, the focus will to be on academic excellence. This will help students get into the finest higher education institutions in India and around the world. Initiatives are also being put in place that will allow students to fit into a rapidly changing adult world. At the same time, the school’s big strength — pedagogy balanced with pastoral care — will be supported in equal measure to enhance the school’s standing as the Best School in India.

Unfortunately, when it comes to quality and excellence, there are no free lunches, nor can there be any compromises. To ensure that The Ou School scales newer peaks, fees will necessarily need to be raised from time to time. As our potential parent partners, we look forward to your support on this. Of course, for an institution with a mission to find and develop exceptional boys from all backgrounds we also have the means to offer financial assistance in the form of needs-based scholarships.

Should you require any financial clarification or assistance, please do not hesitate to contact the school in advance of your son’s arrival to further understand the financial assistance on offer and how the school can assist you in this matter.
<br/>
<br/>
With all good wishes,
<br/><br/>
sign <br/><br/>

Mr. ABC Xyz
<br/>

</p> 
  </div>
       
  </div>
          );
          }else if(this.state.activeTab===1){
            return( 
                <div className="tablink">
           <h2 className='header-line' >Scholarships </h2> 
          <h4 className='header-tablink1' style={{textAlign:'center'}}> Scholarships </h4>
          <p className="box2-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>    
        <h6 style={{textAlign:'left', fontWeight: 'bold'}}>   Q1 . What are the criteria aplylying i get sscholarship0p ? </h6> 
       <p className='scholr-text'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

  
          <h4 className='header-tablink1' style={{textAlign:'center'}}>Scholarships Providedare </h4>
          <p className="box2-content"> <b> First  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Second  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Third  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Third  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>  
          <h4 className='header-tablink1'>Merit Based Scholarships  </h4>
          <p className="box2-content"> <b> First  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Second  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Third  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Third  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>  
          <h4 className='header-tablink1'>Scholarships Army Peole  </h4>
          <p className="box2-content"> <b> First  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Second  jvbsvsbsssjb </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>
          

 </div>
            );
             } 
     else if(this.state.activeTab===2){
                return( 
                    <div className="tablink">
                   <h2 className='header-line'> Enrollment </h2> 
          <h4 className='header-tablink1'> Entry To School  </h4>
          <p className="box2-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>      
          <h4 className='header-tablink1'>  Our School  Entrance Examination  </h4>     
          <p className="box2-content">   We have Conducted varouis Exam s For addiimision processs xgknd
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham
         <br/><br/>
         For More Query Contact Us <br/>
         <a href="/" > OurSchool@gmail.com</a> 
          </p>
            </div>
                                        );
                }
    else if(this.state.activeTab===3){
                    return( 
                        <div className="tablink">
                    <h2 className='header-line'> Apply Our School </h2> 
          <h4 className='header-tablink1'> Offline Student Registration Form  </h4>
          <p className="box2-content"> <b> Step First </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b>Step Secong </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Step Third </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rckham</p>
          <p className="box2-content"> <b> Step Fouth  </b>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p> 
         <button className='button-form'> Download Form</button>
          
          
          </div>
                                         
                                         
                                         
                                         
                                         );
                    }            
    else if(this.state.activeTab===4){
                        return( 
                            <div className="tablink">
                        <div>
                        <h2 className='header-line'> Contact Us </h2>
         
                
           <div>

<Grid>  
 <Cell col={8}>

<div className="contact-block"  >
<h4 className='contact-tablink'> Important Notice For Admission </h4>

<ul ><li>
1. For prospective parents looking for Class VII or Class VIII admission for their ward, the person to contact is the Head of Admissions,<span>Mr xya xabs nmvnmf</span> .
</li> <br/> <br/>
<li>
2. <span>How to register your son?</span> You may register your son any time after his birth. Please note that the registration fees are current fees.
</li> <br/> <br/>
<li>
3. <span>Registration Form: </span>To download the Registration Form, or to apply online please  click here
</li><br/> <br/>
<li>
4. The Our School is easily accessible by road, rail and air. The school is situated in the cantonment area of the city and has multiple trains from Delhi and other large and small cities in India. The station is about 15mins drive away. The school is easily accessible by air with multiple flights daily and all day from Delhi with many different airlines and a direct flight from Kerala and Bangalore. It has never been easier to travel to The Our School.
</li> <br/> <br/>
<li>   
5. We strongly urge all prospective parents to visit the school with their sons so that the whole family can see the school and the opportunities on offer for themselves. For your own convenience, you are requested to make an appointment to visit the school. The school welcomes visitors at 10.00 a.m. on most mornings.
</li></ul>
</div>
</Cell>  
<Cell col={4}>
<div style={{borderBottom: '2px solid gray'}}>
<h4 className='contact-tablink1'>Address </h4>
<p class="contact-card3">
India International School <br/>
26/1, Chikkabellandur, Carmelaram Post, <br/>
Opp. Wipro SEZ, Sarjapur Road <br/>
Bangalore – 560035<br/>
</p>   
</div>
<div style={{borderBottom: '2px solid gray'}}>
<h4 className='contact-tablink1'>Contact For Addimission </h4>
<p class="contact-card3">
Email id : admission@iisbangalore.org <br/>
Contact No. : +91 6366416842  <br/>  
Fairfax VA , USA <br/>
Contact No. : 5714352267 <br/>
Email Id : vermakbala@gmail.com <br/>
</p>   
</div>
<div style={{borderBottom: '2px solid gray'}}>
<h4 className='contact-tablink1'>Contact School </h4>
<p class="contact-card3">
EFront Office : +91 6366416834 <br/>
Transport Dept.: +91 6366416844 <br/>
Email Id : school@iisbangalore.org <br/>

Web site: www.iisbangalore.org <br/>
</p>
</div>



</Cell>

</Grid>                         

</div>         
<div className='maps'>        
<Grid> 
<Cell col={12}>
<h4 className='header-tablink2'> Where We are ?  </h4>
         <iframe src="https://i.stack.imgur.com/V1VH7.png"
          style={{width:'800px', height:'600px' ,scrollbars:'none'  }} />
           </Cell>
           </Grid>
           </div>
         
</div>
                    </div>                         
                    
                    );
                        }
   
                }
    render() {
        return (
            <div>
               
              <Header/>      
              <NavLinks/>     
       <Grid > 
           <Cell col={12}>
               <div className="display">           
               <Tabs 
                  activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab:tabId})} ripple>
               <Tab style={{height:'120px',textAlign:'center'}}>   
              <div className="img1" >   
            
            <i id="icons" className="fa fa-pencil " aria-hidden="true"/>
             <h3> Principal Message</h3>
           
             </div>
               
          </Tab>
       
            <Tab style={{height:'120px'}}>  
              <div className="img1">   
              <i id="icons" className="fa fa-plus " aria-hidden="true"/> 
              
              <h3> ScholarShips</h3> 
              </div>
             </Tab>
                 
          <Tab style={{height:'120px',textAlign:'center'}}>   
              <div className="img1" >   
            
            <i id="icons" className="fa fa-graduation-cap" aria-hidden="true"/>
             <h3> Entry to School</h3>
           
             </div>
               
          </Tab> 
             <Tab style={{height:'120px',textAlign:'center'}}>   
              <div className="img1" >   
            
            <i id="icons" className="fa fa-university" aria-hidden="true"/>
             <h3> Apply Now</h3>
           
             </div>
               
          </Tab>

          <Tab style={{height:'120px',textAlign:'center'}}>
             <div className="img1">    
              <i id="icons" className="fa fa-envelope-o  " aria-hidden="true"/> 
             <h3> Contact Us</h3>
              </div>
            </Tab>
           </Tabs>
           </div>

               </Cell>  
               
                  
  <Cell col={12}> 
          <div className='mi'> {this.toggloChange()} </div>    
         </Cell>
         </Grid>        
         <Footer/>
                
         </div>

        )
    }
}
 


