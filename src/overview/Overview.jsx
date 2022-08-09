import React from 'react'
import star from '../Navbar/star.png'
import bstar from '../Navbar/star2.png'
import tg from '../five.png'
import pic from '../content/wallpaperbetter.jpg'
import MapContainer from '../Maps'
import tick from './accept.png'
import '../style.css'
const Overview = () => {
  return (
    <div class='pt'>
    <h1 style ={{marginBottom: '55px',marginTop:'55px', fontFamily:'Nunito'}}> Overview</h1>
    <p style={{fontSize: '20px'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
    <div style={{ width: '280px',
    height: '290px',
    borderRadius: '10%',
    backgroundColor: 'black',
    position: 'relative',
    left: '990px',
    bottom: '110px'}}>
        <ul style={{color:'#fff', position: 'relative', top: '60px', fontSize: '1.2rem', listStyle: 'none'}}>
            <li class='or'> Overview </li>
            <li class='or'> Include </li>
            <li class='or'> Location </li>
            <li class='or'> Stories </li>
            <li class='or'> Reviews </li>
        </ul>
    </div>
    <div>
        <h1 style ={{marginBottom: '55px',marginTop:'55px', fontFamily:'Nunito'}}> Included </h1>
        <ul class='inc'>
            <li><img  class='mki' src={tick} alt="" height="48.2px" width="48.2px"/>  <span class='incc'> Flight by Plane</span><span style={{paddingLeft:'110px' , paddingRight:'110px'}}></span><img  class='mki' src={tick} alt="" height="48.2px" width="48.2px"/> <span class='incc'>Wi-fi</span> <br /><span class='inc2'>Flight and transfer to the hotel</span><span style={{paddingLeft:'110px' , paddingRight:'51px'}}></span> <span class='inc2'>Free wi-fi in the reception</span></li>
            <li><img  class='mki' src={tick} alt="" height="48.2px" width="48.2px"/>  <span class='incc'> Smorgasbord</span><span style={{paddingLeft:'110px' , paddingRight:'129px'}}></span><img  class='mki' src={tick} alt="" height="48.2px" width="48.2px"/> <span class='incc'>Pool</span> <br /><span class='inc2'>But i must explain to you how all</span><span style={{paddingLeft:'110px' , paddingRight:'19px'}}></span> <span class='inc2'>Beautiful and large swimming pool at your service</span></li>
        </ul>
    </div>
    <div>
    <h1 style ={{marginBottom: '55px',marginTop:'55px', fontFamily:'Nunito'}}> Location </h1>
    <p style={{paddingBottom:'510px'}}>
        <MapContainer  style={{   boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.3)'
}}/>
    </p>
    </div>
    <div>
        <h1 style ={{marginBottom: '55px',marginTop:'55px', fontFamily:'Nunito'}}> Stories </h1>
       <ul class='poxx' style ={{marginBottom: '55px'}}>
        <li > <img src="https://images.unsplash.com/photo-1599229526921-4f29d42b0b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJmcm9udHxlbnwwfHwwfHw%3D&w=1000&q=80"  alt=''/> </li>
        <li > <img src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80"  alt='' /></li>
        <li > <img src="https://images.unsplash.com/photo-1606246054829-dae150209c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  alt='' /> </li>
        <li > <img src="https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"  alt='' /></li>
       </ul>
    </div>
    <div>
        <h1 style ={{marginBottom: '55px',marginTop:'55px', fontFamily:'Nunito'}}> <img class="mki" src={tg} alt=""  height="49px" width="49px" /> Reviews </h1>
        <p style={{fontSize: '20px', backgroundColor:'#d2d1d3', borderRadius: '7px',  padding: '10px', marginBottom:'45px'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
        <p style ={ {marginBottom: '45px'}}> <img class='mki'src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg" alt="" border-radius="50px" height="45px" width="45px" /> 21.09.2019 by Maya Delia <span style={{textAlign: "right", position:'relative', left: '445px'}}><img src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={bstar} alt="" height='20px' width='20px' margin-left='4px' /><img src={bstar} alt="" height='20px' width='20px' margin-left='4px' />  <span style={{fontSize:'23px',backgroundColor: '#d2d1d3'}}>Reply</span> <span style={{fontSize:'23px',backgroundColor: '#d2d1d3'}}>Permalink</span></span> </p>
        <p style={{fontSize: '20px',color:'#fff', backgroundColor:'#0030D0', borderRadius: '7px',  marginLeft: '80px', padding: '20px', marginBottom:'45px'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
        <p style ={ {marginBottom: '45px', marginLeft: '80px'}}> <span style={{fontSize:'23px',backgroundColor: '#d2d1d3'}}>Reply </span> <span style={{ fontSize: '15px',color:'black', textAlign: "right", position:'relative', left: '600px'}}>21.09.2019 by Maya Delia <img class='mki' src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg" alt="" border-radius="50px" height="45px" width="45px" /> </span> </p>
        <p style={{fontSize: '20px', backgroundColor:'#d2d1d3', borderRadius: '7px',  padding: '10px', marginBottom:'45px'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. <br /><img src="https://i.pinimg.com/originals/ac/8c/8e/ac8c8ebf23dd6cb07e3d57e47ed29eec.jpg" alt="" border-radius="10px" height="150px" width="150px"/><img src="https://cdn.wallpapersafari.com/79/22/2aEnGA.jpg" alt="" border-radius="10px" height="150px" width="150px"  margin-left="25px" margin-right="15px"/> <img src={pic} alt="" border-radius="10px" height="150px" width="150px"/></p>
        <p style ={ {marginBottom: '45px'}}> <img  class='mki' src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg" alt="" border-radius="50px" height="45px" width="45px" /> 21.09.2019 by Maya Delia <span style={{textAlign: "right", position:'relative', left: '445px'}}><img  src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={star} alt="" height='20px' width='20px' margin-left='4px' /><img src={bstar} alt="" height='20px' width='20px' margin-left='4px' /><img src={bstar} alt="" height='20px' width='20px' margin-left='4px' />  <span style={{fontSize:'23px',backgroundColor: '#d2d1d3'}}>Reply</span> <span style={{fontSize:'23px',backgroundColor: '#d2d1d3'}}>Permalink</span></span> </p>           
    </div>
   </div>
  )
}

export default Overview