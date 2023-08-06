import React from 'react'
import Slider from 'react-slick'
import Directcard from './direct-testimonial-card'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'
import { Link } from 'react-router-dom';
function Testimonial() {
    const settings = {
        dots: true,
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
              breakpoint: 1198,
              settings: {
                slidesToShow: 1,
                centreMode: true
              }
            }
            
          ]
    };
    const obj1 = { name: 'Randeep Singh', casen: '1', details: 'A lady who was obsessed with cleanliness and orderliness to such an extent, that it was causing trouble to her; along with severe headache and migraine was relieved with homeopathy....' };
    const obj2 = { name: 'Jawahar J. Shah', casen: '2', details: 'A leading female artiste was completely distressed by Migraine since a long time. She would get an episode every time she travelled for performances. With regular homeopathic treatment, she could travel stress-free and migraine-free...' };
    /*const obj3 = { name: 'Shah Rukh', casen: '3', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj4 = { name: 'Sam Young', casen: '4', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj5 = { name: 'Iris Yang', casen: '5', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };
    const obj6 = { name: 'Iris Yang', casen: '6', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...' };*/

    return (
        <>
            <div className='testimonial_cont'>
                <h1 id='Heading'>Direct Testimonials</h1>
                <div className='slider'>
                <Slider {...settings} className='Slider_css'>
                    <Directcard {...obj2} />
                    <Directcard {...obj1} />
                    <Directcard {...obj2} />
                    <Directcard {...obj1} />
                    <Directcard {...obj2} />
                    { <Directcard {...obj1} /> }
                </Slider>
                </div>
                <Link className='view_more' to='/pathy/homeopathy/direct-testimonials'>View More...</Link>
            </div>
        </>
    )
}

export default Testimonial
