import React, { Component } from 'react'
import Rte from './Rte'
import Header from './Header'
import NavLinks from './NavLinks'
import { Grid , Cell } from 'react-mdl'
import Footer from './Footer'

export default class Sports extends Component {
    render() {
        return (
            <div>
                   <Header/>      
              <NavLinks/> 
            <div className="">
            <h2 className='about-heading'> Sports At Our school  </h2> 
          <div className="first-content">          <p className="sports-line"> "What can be learned on the ground cannot be learned in the classroom" </p>

<p className="sports-para">At Our School, we lay a strong emphasis on sports and physical development. Our sports curriculum is planned and designed for students to develop and enhance skills like strength, speed, endurance, agility, flexibility, control, balance etc. Sports today has also evolved as a form of entertainment and also offers promising careers.

We believe in mass participation, exposing our students to a number of sports events at inter-school, state, national and international level. Every student is encouraged to join at least one school sports team. The P.E. teachers we employ are young and energetic with a good amount of expertise in sports and provide coaching for sports like football, basketball, throwball etc.

We have weekly achievable goals for the different skills required for a particular sport and train students accordingly. Intersection matches are conducted every four months.


</p>
</div>
<Grid>
<Cell col={6}>
    <div className="sports-img-wrapper">
<img className="sports-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfpiXbpJGvTj6d3XJ75fytgeuNVubo5cU3VwCTevkVVqu3UoIC&usqp=CAU"}/>
<img className="sports-img" style={{marginTop:'-1.5%'}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRip5o3GeWZ0jXmMj8UT8lN3P6PSSiy5g0tftoGR2hH7m8NZTUX&usqp=CAU"}/>
</div>
</Cell>
<Cell col={6}>
<div className="text-sports">    
<h3 className="headings"> Swimming  </h3>
<p className="sports-para1">  Swimming is a great workout because you need to move your whole body against the resistance of the water. Swimming is a good all-round activity because it: keeps your heart rate up but takes some of the impact stress off your body. builds endurance, muscle strength and cardiovascular fitness.       </p>
</div>
</Cell>
</Grid>

<Grid>

<Cell col={6}>
<div className="text-sports">    
<h3 className="headings1"> VolleyBall </h3>
<p className="sports-para1">  Volleyball is a team sport played with a ball and a net. There are teams on each side of the net. One team hits the ball over the net and into the other team's court, the other team must then hit the ball back over the net and in bounds within three tries without letting the ball touch the ground.       </p>
</div>
</Cell>
<Cell col={6}>
    <div className="sports-img-wrapper" style={{marginTop:'-1%'}}>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://qph.fs.quoracdn.net/main-qimg-e0c2d21bfabf78cda0edc5f11199385b.webp"}/>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://cf.ltkcdn.net/kids/images/std/257761-596x450-Primary_girl_volleyball.jpg"}/>
</div>
</Cell>
</Grid>
<Grid>
<Cell col={6}>
    <div className="sports-img-wrapper">
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://i.ytimg.com/vi/fIZR5Ib1p_w/maxresdefault.jpg"}/>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://i.ytimg.com/vi/sXUN9jHLIpY/maxresdefault.jpg"}/>
</div>
</Cell>
<Cell col={6}>
<div className="text-sports">    
<h3 className="headings"> Football  </h3>
<p className="sports-para1">   Football, the game that we know today, is played between two teams with 11 players in each team. It is played with a big circular ball which is kicked by the players with the aim to hit the goal. It takes a lot of energy and enthusiasm to win the game.

</p>
</div>
</Cell>
</Grid>
<Grid>

<Cell col={6}>
<div className="text-sports">    
<h3 className="headings1"> Cricket  </h3>
<p className="sports-para1">  Cricket is a sport which is played between two teams of eleven players each who score runs (points). This is done by hitting the ball across the boundary, or by running between two sets of three small, wooden posts called wickets. the wickets are at each end of a rectangle of short grass called 'the pitch'.     </p>
</div>
</Cell>
<Cell col={6}>
    <div className="sports-img-wrapper" style={{marginTop:'-1%'}}>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq-ds6MaReTtEtK_QdFePSl7BdssmY1rOhQJ3l4_Mpwal80abk&usqp=CAU"}/>
<img className="sports-img"  style={{width: '250px', height:'200px'}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs2afrcMuDSIaXi-u2ZXozvIibk1KbKwyWPuZUN3TQ-Dfs7c8u&usqp=CAU"}/>
</div>
</Cell>
</Grid>
<Grid>
<Cell col={6}>
    <div className="sports-img-wrapper">
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://jnanagangainternationalschool.com/img/Karate.jpg"}/>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://i.ytimg.com/vi/Mc0da-vIcxg/hqdefault.jpg"}/>
</div>
</Cell>
<Cell col={6}>
<div className="text-sports">    
<h3 className="headings"> Taekwondo  </h3>
<p className="sports-para1">  Taekwondo is a national sport in South Korea, kyeorugi is a sport event in the Olympic Games. ... Taekwondo can therefore be translated as "way of the foot and of the fist". Taekwondo refers to a great tradition of Korean martial arts (higher or under 2000 years), but exists in its current form only near 50 years.     </p>
</div>
</Cell>
</Grid>
<Grid>
<Cell col={6}>
<div className="text-sports" style={{marginTop:'-1%'}}>    
<h3 className="headings1"> Chess  </h3>
<p className="sports-para1">  Chess is a board game for two players. It is played in a square board, made of 64 smaller squares, with eight squares on each side. Each player starts with sixteen pieces: eight pawns, two knights, two bishops, two rooks, one queen and one king. ... The player with white pieces always makes the first move.      </p>
</div>
</Cell>
<Cell col={6}>
    <div className="sports-img-wrapper">
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://www.cityguideny.com/columnpic/chess-kids-ny.jpg"}/>
<img className="sports-img" style={{width: '250px', height:'200px'}} src={"https://kidtivity.com/wp-content/uploads/2019/09/ChessForChildren2.jpg"}/>
</div>
</Cell>

</Grid>
            </div>
            <Footer/>
            </div>
        )
    }
}
