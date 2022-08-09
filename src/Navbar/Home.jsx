import React from 'react'
import "../style.css"
import "../style2.css"
import star from './star.png'
import bstar from './star2.png'
import { useState } from 'react';
import SLide from '../content/SLide'
const Home = () => {

  let [adult, setadult] = useState(2);
  let [child, setchild] = useState(2);
   
  return ( 
      <div class='contentt'>
      <p class='a'>Home/Tour Page Right Sidebar</p>
      <p class="pp"> <span>.</span> Northern pole</p>
      <p class='titu'>Tour to the arctic is an exotic journey <br /> on the verge of extreme</p>
       <SLide />
       <ul class='sm' >
        <li> <p class="tango"> Check In   </p>  <p class="chng"> 7</p> <h2 class="mng"> August</h2> <p class='dng'> 2022 </p></li>
        <li> <p class='tango'> Check Out  </p>  <p class="chng"> 8</p> <h2 class="mng"> August</h2> <p class='dng'> 2022 </p></li>
        <li> <p class='tango'> Adults     </p>  <button class="plus" onMouseEnter={{backgroundColor:'grey'}} onClick ={ () => {setadult(adult+1)}}> + </button> <p class="us"> {adult}</p> <button class="minus" onMouseLeave={{background: 'transparent'}} onClick={ () => { (adult>0) && setadult(adult-1) }}> -</button></li>
        <li> <p class='tango'> Children   </p>  <button class="plus" onMouseEnter={{backgroundColor:'grey'}} onClick ={ () => {setchild(child+1)}}> + </button> <p class="us"> {child}</p> <button class="minus" onMouseLeave={{background: 'transparent'}} onClick={()=> {(child>0) && setchild(child-1)}}> -</button></li>
       </ul>
       <div class='book'>
       <p class='ddd'>5 days | from  $256 </p>
       <button class='bt' onClick ={()=>{}}> Book now</button>
       <p><img src={star} alt="" height="22px" width="22px" /><img src={star} alt=""  height="22px"  width="22px"/><img src={star} alt=""  height="22px" width="22px"/><img src={star} alt=""  height="22px" width="22px"/><img src={bstar} alt="" height="22px" width="22px" /></p>
       
       </div>
       
      </div>
    )
}

export default Home