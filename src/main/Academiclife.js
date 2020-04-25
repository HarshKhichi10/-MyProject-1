import React, { Component } from 'react'
import Rte from './Rte'
import Header from './Header'
import NavLinks from './NavLinks'
import './section4.css'
import {Grid ,Cell } from 'react-mdl'
import Footer from './Footer'

export default class Academiclife extends Component {

    


    render() {
        return (
            <div className="aca">
               <Header/>      
              <NavLinks/>   
       
              <h2 className='academic-header'> Academic Life</h2>
     <p className='academic-para'>  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.


Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>
<h5 className='academic-header'> Academic Ethos </h5>

<p className='academic-para'>

The Our School’s academic ethos focuses on encouraging the boys to utilise their talents, and develop their intellectual and creative interests so that they remain interesting and interested young men for the rest of their professional and personal lives. The boys need to understand their own culture and history, as well as their own geographical, scientific and spiritual theory and language. The school’s academic environment is constructed such that the boys are able to develop their knowledge and interest in these areas in an international context and around the global world in which they are born and will live.

Boys at The Our School are expected to be independent thinkers, develop first class critical reading, writing and analysis skills, learn to understand the value of research across all areas of the curriculum and be self-motivated and self-driven through a genuine love of the subject and not only by intrinsic rewards. Boys should be aware of other boys’ weaknesses and strengths and be able to develop an understanding for them. Service and an understanding of each other’s cultural backgrounds and religions is a crucial aspect of academic and wider life at The Our School.

</p>
<h2 className='academic-header'> Curriculam</h2>
<h4 className='header-tablink1' style={{textAlign:'center',marginLeft:'-3%'}}> Subjects </h4>
<Grid>< Cell col={2}>
      <div><ul className='ul-content'>
        <li className='ul-content'> Maths </li> <br className='li'/> 
        <li className> Science </li><br/>
        <li> English </li><br/>
        <li>Chemistry </li><br/>
        <li> Social Science </li> <br/>
        <li> Hindi </li> <br/>
        <li> SansKrit </li>  <br/>
          
          </ul> 
          </div>
    </Cell>
    <Cell col={4}>
   
    <ul className='ul-content1'>
        <li > Design And Technology </li>  <br className="li-content"/>
        <li > Physics </li><br />
        <li > Biology </li><br ></br >
        <li >Human Development</li> <br />
        <li > Environment </li><br />
        <li > Physical Education </li> <br />
        <li > Yoga </li> <br /> 
          
          </ul> 
          </Cell>
      <Cell col={6}>
      <div className='alldepartments'>     
     
      <h4 className='header-tablink1' style={{textAlign:'center', width: '100%', marginLeft: '-1%'}}> Departments </h4>
       <div className="indepartements">
      <p className="designations1"> <p className="text-dep"></p> Maths   </p> 
      <p className="designations1">  <p className="text-dep"></p> Arts And Commerce   </p> 
      <p className="designations1">  <p className="text-dep"></p> sports   </p>
      <p className="designations1">  <p className="text-dep"></p>Biology  </p>
      
      </div>
      </div>


    </Cell>
    
    </Grid>

    <div> 
    <h2 className='academic-header'> University Designation</h2>
    <div className="indepartements" >
      <p className="designations" > 
      <p className="text-des"> India</p> 
       <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" className="text-des1"/>
       <p className='sign'> +</p> 
        </p> 
      


      <p className="designations" > 
      <p className="text-des"> Uk</p> 
         <img src="https://cdn.webshopapp.com/shops/94414/files/54956666/the-united-kingdom-flag-icon-free-download.jpg" className="text-des1"/> 
         <p className='sign'> +</p> 
         </p> 
           
     
     
      <p className="designations"> 
      <p className="text-des"> Canada</p>  
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe3MDpgIgkKSdewsPGDAuPPk_5c5Q4XUsFweBgLczkS3cdTUoY&usqp=CAU" className="text-des1"/> 
       <p className='sign'> +</p> 
       </p>
      
      
      
      
      
      <p className="designations"> 
      <p className="text-des"> Singapore</p>  
       <img src="https://pngimage.net/wp-content/uploads/2018/06/singapore-flag-png-1.png" className="text-des1"/> 
       <p className='sign'> +</p>
       </p>
      
      <p className="designations"> <p className="text-des"> USA</p>   
      <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" className="text-des1"/> 
      <p className='sign'> +</p>
       </p>
        
      <p className="designations"> <p className="text-des"> Hong kong</p>  
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/800px-Flag_of_Hong_Kong.svg.png" className="text-des1"/> 
      <p className='sign'> +</p>
      </p>

        

      <p className="designations"> <p className="text-des"> Netherlands</p> 
       <img src="https://cdn.countryflags.com/thumbs/netherlands/flag-400.png" className="text-des1"/> 
       <p className='sign'> +</p> 
       </p>
         
       </div>  

       </div>
      </div>
   
        )
    }
}
