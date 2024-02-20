import React, { useState } from 'react';
import './Template.css'
import {Link} from 'react-router-dom'
// import ScrollToTop from "react-scroll-to-top";
// import { Link as Scroll } from 'react-scroll';
// Import the Link component
import { Link as ScrollLink } from 'react-scroll';
import user from '../Assests/user.png'
import backtotop from '../Assests/backtotop.png'
import navya from '../Assests/navya.png'
import malleeswari from '../Assests/malleeswari.png'
import poojitha from '../Assests/poojitha.png'
//  import img1 from '../Assests/img1.jpeg'
import wifi from '../Assests/wifi.gif'
import service from '../Assests/service.gif'
import balcony from '../Assests/balcony.png'
import bedroom from '../Assests/bedroom.gif'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Template() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };
  const [showDropdown2, setShowDropdown2] = useState(false);
  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };


  const images = [
    {
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg',
      title: 'Exterior',
      category:'Cinematic Design',
    },
    {
      src: 'https://i.pinimg.com/originals/a7/37/d5/a737d5fa80c03b588f41c71bc2bc79bd.jpg',
      title: 'Room',
      category: 'Interior',
    },
    {
      src: 'https://www.berjayahotel.com/sites/default/files/colombo_30.jpg',
      title: 'Tea Talk',
      category: 'Composite',
    },
    {
      src: 'https://e0.pxfuel.com/wallpapers/390/533/desktop-wallpaper-luxurious-interior-bedroom-classic-design-luxury-hotel-room-for-with-resolution-high-quality.jpg',
      title: 'Luxorius',
      category: 'Landscape',
    },
    {
      src: 'https://wallpaperaccess.com/full/6688084.jpg',
      title: 'Sea',
      category: 'Cityscape',
    },
    {
      src: 'https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg',
      title: 'Vintage',
      category: 'Cinematic',
    },
  ];


  
  return (
    <div>
    <div className='main'>
      {/* <nav>
        <ul>
        <li><a href="#" className=''>Home</a></li>
          <li><a href="#" className='gal'>Gallery</a></li>
          <li><a href="#" className='res'>Reserve</a></li>
          <li className="user-profile" onClick={toggleDropdown}>
            <a href="#"><img className="user" src={user} alt="Logo"/></a>
            {showDropdown && (
              <ul className="dropdown">
                <li><a href="#">Account</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav> */}
<nav className='nav-bar'>
  <ul>
  {/* <li className='sun'>SUN <span>RISE</span></li> */}
    <li>
      <ScrollLink to="home" smooth={true} duration={500} className='home'>
        HOME
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="about" smooth={true} duration={500} className='about'>
        ABOUT
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="team" smooth={true} duration={500} className='team'>
          TEAM
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="gallery" smooth={true} duration={500} className='gal'>
        GALLERY
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="rooms" smooth={true} duration={500} className='rooms'>
        ROOMS
      </ScrollLink>
    </li>
    <li><Link to="/book">BOOK</Link></li>
    <li className="user-profile" onClick={toggleDropdown}>
      <a href="#"><img className="user" src={user} alt="Logo"/></a>
      {showDropdown && (
        <ul className="dropdown">
          {/* <li><a href="#" Link to="/account">Account</a></li> */}
          <li><Link to='/account'>Account</Link></li>
          <li><a href="#">Settings</a></li>
          <li><Link to='/login'>Logout</Link></li>
        </ul>
      )}
    </li>
  </ul>
</nav>

    </div>
    {/* ------------------This is Home page---------------------- */}
    <div id="home">
    <nav className='nav-bar'>
  <ul>
  {/* <li className='sun'>SUN <span>RISE</span></li> */}
    <li>
      <ScrollLink to="home" smooth={true} duration={500} className='home'>
        HOME
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="about" smooth={true} duration={500} className='about'>
        ABOUT
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="team" smooth={true} duration={500} className='team'>
          TEAM
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="gallery" smooth={true} duration={500} className='gal'>
        GALLERY
      </ScrollLink>
    </li>
    <li>
      <ScrollLink to="rooms" smooth={true} duration={500} className='rooms'>
        ROOMS
      </ScrollLink>
    </li>
    <li><Link to="/book">BOOK</Link></li>
    <li className="user-profile" onClick={toggleDropdown}>
      <a href="#"><img className="user" src={user} alt="Logo"/></a>
      {showDropdown && (
        <ul className="dropdown">
          {/* <li><a href="#" Link to="/account">Account</a></li> */}
          <li><Link to='/account'>Account</Link></li>
          <li><a href="#">Settings</a></li>
          <li><Link to='/login'>Logout</Link></li>
        </ul>
      )}
    </li>
  </ul>
</nav>

    <div class="letter-space">
        <span>P</span><span>A</span><span>R</span><span>A</span><span>D</span><span>I</span><span>S</span><span>E</span><span>&nbsp;</span><span>C</span><span>O</span><span>V</span><span>E</span><br></br><strong className='dream'><span>D</span><span>R</span><span>E</span><span>A</span><span>M</span><span>&nbsp;</span><span>R</span><span>E</span><span>A</span><span>L</span><span>I</span><span>T</span><span>Y</span></strong>
    </div>
    <button className='learn'><ScrollLink to="about" smooth={true} duration={500} >
        LearnMore
      </ScrollLink></button>

    
    </div>
    <div id="about">
      <h5 className='abth1'>AbOuT PaRaDiSe CoVe</h5>
      {/* <br></br><span>E</span><span>X</span><span>P</span><span>I</span><span>E</span><span>R</span><span>E</span><span>N</span><span>C</span><span>E</span><span>&nbsp;</span><span>A</span><span>&nbsp;</span><span>G</span><span>O</span><span>O</span><span>D</span><span>&nbsp;</span><span>S</span><span>T</span><span>A</span><span>Y</span><span>&nbsp;</span><span>&</span><span>&nbsp;</span><span>E</span><span>N</span><span>J</span><span>O</span><span>Y</span></h5> */}
       {/* <h6 className='abth2'><span>E</span><span>X</span><span>P</span><span>I</span><span>E</span><span>R</span><span>E</span><span>N</span><span>C</span><span>E</span><span>A</span><span>G</span><span>O</span><span>O</span><span>D</span><span>S</span><span>T</span><span>A</span><span>Y</span><span>&</span><span>E</span><span>N</span><span>J</span><span>O</span><span>Y</span></h6>  */}
      <div className='one'>
          <div className='one-one'>
             <img src={bedroom} alt="Bedroom" className='bedroom-img'/> 
          <h2>Master<br></br>bedroom</h2>
          </div>
          <div className='one-two'>
            <img src={wifi} alt="wifi" className='wifi-img'/>
          <h2>WiFi<br></br>Coverage</h2>
          </div>
          <div className='one-three'>
            <img src={balcony} alt="terrace" className='balcony-img'/>
          <h2>Extrodinary<br></br>Terrace<br></br>View</h2>
          </div>
          <div className='one-four'>
            <img src={service} al="service" className='service-img'/>
          <h2>24/7 Security &<br>
          </br>Service</h2>
          </div>
      </div>
    
    </div>
    <div id="team">
      <img src={poojitha} alt="Poojitha" className='poojitha' onClick={toggleDropdown}/>
      {/* {showDropdown && (
        <p className='pooji'>This is Poojitha kotipalli</p>
      )} */}
      <img src={navya} alt="Navya" className='navya' onClick={toggleDropdown1}/>
      {/* {showDropdown1 && (
        <p className='pooji'>This is navya videla</p>
      )} */}
      <img src={malleeswari} alt="Malleeswari" className='malleeswari' onClick={toggleDropdown2}/>
      {/* {showDropdown2 && (
        <p className='pooji'>This is kola malleeswari</p>
      )} */}
      {showDropdown && (
        <>
        <div className="poojitha-card">
        <h2>Name: kotipalli Poojitha</h2>
        <p>Role: Planner & Designer</p>
         <p>ID No:2200030088</p>
       </div></>
      )}
      {showDropdown1 && (
         <>
         <div className="poojitha-card">
         <h2>Name: Videla Navya</h2>
         <p>Role: Front end developer</p>
          <p>ID No: 2200030540</p>
        </div></>
      )}
      {showDropdown2 && (
         <>
         <div className="poojitha-card">
         <h2>Name: Kola Naga Malleeswari</h2>
         <p>Role:Designer & Backend</p>
          <p>ID No:2200030350</p>
        </div></>
      )}
  
   
    </div>

   

    {/* -------------------This is Gallery Page-------------------- */}
    {/* <div className='gallery'>
   <img src={img1} alt="Image1" className='images'/>
   <img src={img1} alt="Image1" className='images'/>
   <img src={img1} alt="Image1" className='images'/>
   <img src={img1} alt="Image1" className='images'/>
   <img src={img1} alt="Image1" className='images'/>
   <img src={img1} alt="Image1" className='images'/>
    </div> */}
    <div id="gallery">
   <div className="Gallery-header">
    
  {/* <h1>
    Journey Through Time: <span>Unveiling Unforgettable Memories in Our Gallery</span>
  </h1> */}
</div>
<div className="Gallery-one">
  {images.map((image, index) => (
    <div className="img-box" key={index}>
      <img src={image.src} alt="" />
      <div className="transparent-box">
        <div className="caption">
          <p>{image.title}</p>
          <p className="opacity-low">{image.category}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
<div id="rooms">
<Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="shs-swiper-module">
          <img src={'https://images.luxuryescapes.com/q_auto:eco/zl13bxz82id6jtvcfve'} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shs-swiper-module">
          <img src={'https://images.luxuryescapes.com/q_auto:eco/zl13bxz82id6jtvcfve'} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shs-swiper-module">
          <img src={'https://images.luxuryescapes.com/q_auto:eco/zl13bxz82id6jtvcfve'} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="shs-swiper-module">
          <img src={'https://images.luxuryescapes.com/q_auto:eco/zl13bxz82id6jtvcfve'} alt="" />
        </div>
      </SwiperSlide>

      {/* Navigation Controls */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
</Swiper>

    </div>
{/* <div id="reserve">
</div> */}
    <ScrollLink to="home" smooth={true} duration={500} className='home'>
    <img src={backtotop} alt="" className='backtotop'></img>
      </ScrollLink>

      <div className='footer'>
  <h3 className='copyright'>@2024 copyright by Videla Navya</h3>
</div>
</div>

  )
}