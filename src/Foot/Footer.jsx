import React from 'react';
import '../style.css'
import Line from './Line';
import Loc from './icons/Location.png';
import ig from './icons/Instagram.png';
import meta from './icons/Meta.png';
import  pin from './icons/Pinterest.png';
import YT from './icons/YT.png';
import Tw from './icons/Twitter.png';
const Footsec = () =>
{
  return (
    <div class='fontcontt'>
    <h1>Contacts</h1> 
    <ul class="uu">
      <li>
      <p class='idd'>+91 7717725909  </p>
      <a href="#"> Round the clock support</a>
      </li>
      <li>
      <p class='idd'> info@nikhillumesh  </p>
      <a href="#"> For any questions</a>
      </li>
    </ul>
    <br />
    <br />
    <br />
     <p class='tt'><img src={Loc} alt="txt"  width="16px" height="16px"/> BV (DU) COEP, Katraj, Pune, Maharastra - 411037 </p>
     <br />
     <ul class='ut'>
      <li>
       <a href="#"> <img src={meta} alt="ig" width="31px" height="31px" /></a>
      </li>
      <li>
      <a  href='#'><img src={ig} alt="ig" width="31px" height="31px" /></a>

      </li>
      <li>
    <a href='#'><img src={pin} alt="ig" width="31px" height="31px" /></a>
     </li> 
     <li>
      <a href='#'> <img src={Tw} alt="ig" width="31px" height="31px" /></a>
     </li>
      <li>
  <a href="#">    <img src={YT} alt="ig" width="31px" height="31px" /></a>
      </li>
     </ul>
     


  
    </div>
  )
}

const FootCont = () =>
{
  return (
  <ul class="fc">

    <li>
    <Line head="Travel list" 
    l1="Travel list Fullwidth"
    l2="Tavel list Right Sidebar"
    l3="Travel list Lefft Sidebar"
    l4="Travel list Fullwidth Image"
    l5=" Search Result"
    l6="Search Nothing Found"
    l7="Tour page Right Sidebar"
    l8="Tour page Left Sidebar"
    l9="Tour page with reply form" />
    <br />
    </li>

    <li>
    <Line head="Page" 
    l1="Stories Fullwidth"
    l2="Stories Single"
    l3="Stories Right Sidebar"
    l4="Stories Left Sidebar"
    l5="Gallery"
    l6="Gallery Single"
    l7="page"
    l8="Static Page Right Sidebar"
    l9="Static Page Left Sidebar" />
    </li>
    
    <li>
    <Line head="Blog" 
    l1="Blog Fullwidth"
    l2="Blog Right Sidebar"
    l3="Blog Left Sidebar"
    l4="Search Result"
    l5=" Search Nothing Found"
    l6="Blog Sidebar"
    l7="Blog Single Right Sidebar"
    l8="Blog Single Left Sidebar"
    l9="" /> 
    </li>
    
    <li>
      <Footsec />
    </li>
  </ul>
  )
}

const Footer = () => {


  return (
  <div class="set content">
        <FootCont />
        <br /> <br /> <br />
        <p class="txt"> Privacy Policy </p>
        <p class="txtt">Copyright © 2022 by ThinkPen Media Private Limited </p>
    </div>
  )
}

export default Footer