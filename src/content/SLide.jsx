import Carousel from "react-multi-carousel";
import React from 'react';
import pic from './wallpaperbetter.jpg'
import "react-multi-carousel/lib/styles.css";
import "../style.css"
function SLide () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
      return (
        
<Carousel responsive={responsive}>
  <div class="boxx"><img src="https://i.pinimg.com/originals/ac/8c/8e/ac8c8ebf23dd6cb07e3d57e47ed29eec.jpg"  alt="" /></div>
  <div class="boxx"><img src="https://cdn.wallpapersafari.com/79/22/2aEnGA.jpg"  alt=""  /></div>
  <div class="boxx"><img src={pic}  alt="" /></div>
  <div class="boxx"><img src="https://cdn.wallpapersafari.com/80/33/qyeS8d.jpg"  alt="" /></div>
</Carousel>
      )
}

export default SLide

