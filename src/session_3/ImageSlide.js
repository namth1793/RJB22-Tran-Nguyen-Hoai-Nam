import React from 'react';
import Slider from "react-slick";
import img1 from './img/00-best-backgrounds-and-wallpaper-apps-for-android.jpg';
import img2 from './img/310084.jpg';
import img3 from './img/350451.jpg';
import img4 from './img/469917-snow-street_light-lake.jpg';
import img5 from './img/99f049a4ac2b31bd2e68e2e88bec07bc.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlide() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='block'>
        <Slider {...settings}>
          <div style={{margin:"50%"}}>
            <img style={{width:"350px",height:"350px",margin:"0 auto"}} src={img1} />
          </div>
          <div>
            <img style={{width:"350px",height:"350px",margin:"0 auto"}} src={img2} />
          </div>
          <div>
            <img style={{width:"350px",height:"350px",margin:"0 auto"}} src={img3} />
          </div>
          <div>
            <img style={{width:"350px",height:"350px",margin:"0 auto"}} src={img4} />
          </div>
          <div>
            <img style={{width:"350px",height:"350px",margin:"0 auto"}} src={img5} />
          </div>
        </Slider>
      </div>
    );
}
