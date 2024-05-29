import React,{useEffect} from 'react'
import './home.scss'
import video from '../../Assets/vid1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTripadvisor} from 'react-icons/fa'
import {FaList} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  //react hook for animation
  useEffect(()=>{
    Aos.init({duration:2000})

  },[])



  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter Name Here...' />
              <GrLocation  className="icon"/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date"  />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">৳ 5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={20000} min={3000} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>

          </div>

        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebookF className="icon"/>
            <FaInstagram className="icon"/>
            <FaTripadvisor className="icon"/>

          </div>

          <div className="leftIcons">
            <FaList className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home