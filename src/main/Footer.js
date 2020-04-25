import React, { Component } from 'react'
import './section2.css'
import { Grid ,Cell } from 'react-mdl'

export default class Footer extends Component {
    render() {
        return (
            <div>
                   <div className="footer">
        <Grid>
            <Cell col={6}>
           <div className="img-footer" >
         <img className="img-footer1" 
         src={'https://cdn.imgbin.com/1/6/16/imgbin-torch-computer-icons-symbol-torch-iATzQeaH0WdUK8T2kcTaBzQZt.jpg'}/>

           </div>

              <div className="left-footer">
              <h4 className="line12">Address</h4>
             <p className="line10"> The Ours School, Jg Road, Halwat, India </p>
             <p className="line10">    Fax No.(HM Secretariat): +91-135-457474,</p>

             <p className="line10">     Email: info@Ourschool.com</p>

             <p className="line10">     For all admissions enquiries, </p>

             <p className="line10">      Please contact admissions@Ourschool.com or </p>

             <p className="line10">    Telephone – +91-112-3635747453 </p> 
                    </div>

            </Cell>
            
            <Cell col={6}>
            <div className="right-footer"> 
            <h4 className="line11">Useful Links</h4>
            <p className="line10"> AboutUs &emsp; | &emsp;    Events  &emsp;  | &emsp;    Academic Life  &emsp;|&emsp; Offline Form &emsp;</p>
            <p className="line10"> Sports &emsp;| &emsp;Admissions&emsp; |&emsp; Alumini &emsp;|&emsp; News &emsp;|&emsp; Tender Forms &emsp;</p>
            
            <p className="line10">Donar Payments &emsp;|&emsp; Fee Payments &emsp;| &emsp;ContactUs  </p>
                </div>
             <h5 className="text-inp"> NewsLetter</h5>   
             <input type='search' className="footer-srch"/> 
             <button style={{backgroundColor:'#DE3163' , color:'white',padding: '7px', marginTop: '-20%',border: 'none'}}> Submit</button>        
            <div style={{marginLeft:'40%', marginTop:'-7%'}} >
       <i style={{padding: '9px',fontSize:'33px'}} class="fa fa-facebook-official" aria-hidden="true"></i>    
       <i style={{padding: '9px',fontSize:'33px'}} class="fa fa-twitter-square" aria-hidden="true"></i>

        <i style={{padding: '9px',fontSize:'33px'}} class="fa fa-instagram" aria-hidden="true"></i>
        </div>
            </Cell>
            
            
            </Grid>             
      <div style={{borderTop:'1px solid gray', borderTopWidth:"10%" ,marginTop:'4%'}}/>
     <div style={{marginTop:'3%'}}>
   <p className="line10" style={{color:'lightgray'}}>© The our School, 2019. All rights reserved.   &emsp;  &emsp;Disclaimer  &emsp;| &emsp; Privacy policy  &emsp;| &emsp;Sitemap  &emsp;| &emsp; Vacancies at Doon  </p>
<p className="line10" style={{color:'lightgray'}}>The Our School website has been designed by The Our School in conjunction with Me </p>
<p className="line10 " style={{color:'lightgray'}}>
Disclaimer : The Our School, Halwat is not affiliated and/or associated, directly or indirectly with any other school and/or educational institute using the word ‘Our’ as a part of its name.

</p>





     </div>
   
   
   
    </div>
        
        
        
            </div>
        
        )
    }
}
