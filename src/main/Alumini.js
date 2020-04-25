import React, { Component } from 'react'
import Rte from './Rte'
import Header from './Header'
import NavLinks from './NavLinks'
import { Cell, Grid, Tab, Tabs, Button,Card ,CardTitle,CardText, CardActions } from 'react-mdl'
import Footer from './Footer'


export default class Alumini extends Component {
  constructor(props) {
    super(props)

    this.state = { activeTab: 0 } 
}
   
changealumini(){

if(this.state.activeTab===0){
return(

<div className="img-box">
<div className="container">
<img src={"https://images3.alphacoders.com/853/thumb-1920-85305.jpg"} 
                style={{width:'500px',height:'450px', marginLeft:"0em"}}
                className="image"/>
  <div class="middle">
  <Button  raised colored style={{marginTop:"25em", marginLeft:'60em'}}>About Mr. XYZ</Button>
  </div>
</div>
 <p style={{ marginTop:"1em"}}> Mr. XYZ ABC UUU </p>
</div>
   )} 
else if(this.state.activeTab===1){
  return(
  
  <div className="img-box">  
  <div className="container">
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRybr4U_RK1NrJM0JXSwnC_qBtlPk_tXajsO40L0ulQq0LSYTS8&usqp=CAU"} 
                  style={{width:'500px',height:'450px', marginLeft:"0em"}}
                  className="image"/>
    <div class="middle">
    <Button raised colored style={{marginTop:"25em", marginLeft:'60em'}}> About Mr. XYZ ABC UUU</Button>
    </div>
  </div>
   <p style={{ marginTop:"1em"}}> Mr. XYZ ABC UUU </p>
   </div>  )
 }
 else if(this.state.activeTab===2){
  return(
  
    <div className="img-box">  
    <div className="container">
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv56WwXBnmFS8JKFUq4bvA3QxJHTxyk5p8FqzI_38Kuz5oJuq0&usqp=CAU"} 
                    style={{width:'500px',height:'450px', marginLeft:"0em" }}
                    className="image"/>
      <div class="middle">
        <Button raised colored style={{marginTop:"25em", marginLeft:'60em'}}>About Mr. XYZ ABC UUU</Button>
      </div>
    </div>
     <p style={{ marginTop:"1em"}}> Mr. XYZ ABC UUU </p>
     </div> 
  
  
  )
}
else if(this.state.activeTab===3){
  return(
  
    <div className="img-box">  
    <div className="container">
    <img src={"https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg"} 
                    style={{width:'500px',height:'450px', marginLeft:"0em" }}
                    className="image"/>
      <div class="middle">
        <Button raised colored style={{marginTop:"25em", marginLeft:'60em'}}>About Mr. XYZ ABC UUU</Button>
      </div>
    </div>
     <p style={{ marginTop:"1em"}}> Mr. XYZ ABC UUU </p>
     </div> 
  
  
  )
}




}
  render() {
        return (
            <div>
                 <Header/>      
                <NavLinks/>   
                <h2 className='academic-header'> Academic Life</h2>                                           
             <div className="upperbox"> 
             <Card  shadow= {5} style={{minWidth:'450',margin: 'auto', marginLeft:'3%',marginTop:'10%'}}> 
     <CardTitle style={{color:'#fff', height:'170px',backgroundColor:'#5792CF'}}> 
     <p className='cardtext'style={{color:'white', marginTop:'-3%'}}>  ReUnion  2020 </p>
     </CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
             <p className='cardtext'style={{color:'red'}}>Covid' 19 </p>
        <p className='incardtext' style={{color:'red'}}> Due to Covid 19 the  Renuion Ceremony has been delayed.Please contact to the school for further Query Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500   </p> 
           </CardText>     
          
      </Card>        

               </div>  

    <div className="img-box2">
    

    <Card  shadow= {5} style={{height:'400px',width:'750px',margin: 'auto', marginLeft:'9%',marginTop:'8.7%'}}> 
     <CardTitle style={{color:'#fff', height:'170px',backgroundColor:'#5792CF'}}>
     <p className='cardtext'style={{color:'white', marginTop:'-3%'}}>  SUPPORT US </p>
   
      </CardTitle>
                <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
                     <p className='incardtext' style={{color:'blakc',backgroundColor:'Dark' }}> In today's economic climate, your support is as important as ever in helping us to achieve our goals and, as a donor, you can have a say in how the University spends your contribution.

Your contributions will allow us to continue offering learning opportunities to those who need them.  </p> 
           </CardText>     
         <CardActions>
           <button className='card2-btn' style={{width:'250px', height:'40px'}}> Support The Alumini</button>
                    </CardActions>
      </Card>     
    </div> 
    <Grid style={{marginTop:'-9%',padding: '6px',marginLeft: '3%'}}>
    <Cell col={4}>
    <Card  shadow= {5} style={{minWidth:'450',margin: 'auto', marginLeft:'3%',marginTop:'10%'}}> 
     <CardTitle style={{color:'#fff', height:'100px',backgroundColor:'#5792CF'}}> 
     <p className='cardtext'style={{color:'white', marginTop:'-3%'}}>  Your Impact </p>
     </CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
        <p className='incardtext' style={{color:'black'}}>  Your Donation Can Make A big Differsnce in Our School   </p> 
           </CardText>     
          
      </Card>        
      </Cell>
     
      <Cell col={4}>

     
      <Card  shadow= {5} style={{minWidth:'450',margin: 'auto', marginLeft:'3%',marginTop:'10%'}}> 
     <CardTitle style={{color:'#fff', height:'100px',backgroundColor:'#5792CF'}}> 
     <p className='cardtext'style={{color:'white', marginTop:'-3%'}}> Alumini Networks </p>
     </CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
        <p className='incardtext' style={{color:'black'}}>  Your Donation Can Make A big Differsnce in Our School   </p> 
           </CardText>     
          
      </Card> 
      </Cell>
       
      <Cell col={4}>
         <Card  shadow= {5} style={{minWidth:'450',margin: 'auto', marginLeft:'3%',marginTop:'10%'}}> 
     <CardTitle style={{color:'#fff', height:'100px',backgroundColor:'#5792CF'}}> 
     <p className='cardtext'style={{color:'white', marginTop:'-3%'}}> How alumini Can Help the Students </p>
     </CardTitle>
         <CardText style={{fontFamily:"'Open Sans Condensed',sans-Serif", fontWeight:'bold'}}>
        <p className='incardtext' style={{color:'black'}}>  Your Donation Can Make A big Differsnce in Our School   </p> 
           </CardText>     
          
      </Card> 
      </Cell>
      </Grid>
     
                 <div className="img-box1">
            <Tabs  style={{width:'60%',marginLeft:'19%'}}
             activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab:tabId})} ripple>
          <Tab> Mrs . XYZ ABC </Tab> 
          <Tab> Mr . XYZ AB</Tab>
          <Tab> Mr. XYZ ABC</Tab>
          <Tab> Mr.</Tab> 
         </Tabs>
         </div>
        
         <div >
           
           {this.changealumini()}
            </div>
              
            <Footer/>         
                            </div>


)
    }
}
