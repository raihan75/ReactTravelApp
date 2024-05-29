import React from 'react'
import './main.scss'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle: 'Sajek',
    location: 'Rangamati',
    grade: 'Cultural Relax',
    fees: '৳ 7000',
    description: 'Sajek valley is known as the Queen of Hills & Roof of Rangamati. The valley is surrounded by mountains, dense forest, grasslands hilly tracks. Many small rivers flow through the mountains among which Kachalong and Machalong are notable. The road to Sajek has high picks and falls.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Boga Lake',
    location: 'Bandarban',
    grade: 'Adventure Tour',
    fees: '৳ 5000',
    description: 'Bogakain Lake, also called Baga Lake or Boga Lake, is a lake located in Ruma Upazila in the hill district Bandarban, Bangladesh. It is a natural sweet and deep water lake. Its height from sea level is nearly 1,246 feet (380 m). Geologists believe that it was created by collection of rain water in summer.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Sundarban',
    location: 'Khulna',
    grade: 'Adventure Tour',
    fees: '৳ 8000',
    description: 'The Sundarbans is a cluster of low-lying islands in the Bay of Bengal, spread across India and Bangladesh, famous for its unique mangrove forests. This active delta region is among the largest in the world, measuring about 40,000 sq km..'
  },

  {
    id:4,
    imgSrc:img4,
    destTitle: 'Ratargul',
    location: 'Sylhet',
    grade: 'Adventure Tour',
    fees: '৳ 4000',
    description: 'Ratargul is the only freshwater swamp forest in our country. The distance from Sylhet to this country only recognized swamp forest is about 20 kilometers. The location of this water forest is Khadimnagar union of Sadar Upazila of Sylhet district and Fatehpur union of bordering Upazila Gowainghat.'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle: 'Ratargul',
    location: 'Sylhet',
    grade: 'Adventure Tour',
    fees: '৳ 4000',
    description: 'Ratargul is the only freshwater swamp forest in our country. The distance from Sylhet to this country only recognized swamp forest is about 20 kilometers. The location of this water forest is Khadimnagar union of Sadar Upazila of Sylhet district and Fatehpur union of bordering Upazila Gowainghat.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle: 'Ratargul',
    location: 'Sylhet',
    grade: 'Adventure Tour',
    fees: '৳ 4000',
    description: 'Ratargul is the only freshwater swamp forest in our country. The distance from Sylhet to this country only recognized swamp forest is about 20 kilometers. The location of this water forest is Khadimnagar union of Sadar Upazila of Sylhet district and Fatehpur union of bordering Upazila Gowainghat.'
  },

  {
    id:7,
    imgSrc:img7,
    destTitle: 'Ratargul',
    location: 'Sylhet',
    grade: 'Adventure Tour',
    fees: '৳ 4000',
    description: 'Ratargul is the only freshwater swamp forest in our country. The distance from Sylhet to this country only recognized swamp forest is about 20 kilometers. The location of this water forest is Khadimnagar union of Sadar Upazila of Sylhet district and Fatehpur union of bordering Upazila Gowainghat.'
  },

  {
    id:8,
    imgSrc:img8,
    destTitle: 'Ratargul',
    location: 'Sylhet',
    grade: 'Adventure Tour',
    fees: '৳ 4000',
    description: 'Ratargul is the only freshwater swamp forest in our country. The distance from Sylhet to this country only recognized swamp forest is about 20 kilometers. The location of this water forest is Khadimnagar union of Sadar Upazila of Sylhet district and Fatehpur union of bordering Upazila Gowainghat.'
  },



]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destination</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">DETAILS <HiOutlineClipboardCheck className='icon' /></button>
                  </div>

                </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main