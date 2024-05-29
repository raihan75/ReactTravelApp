import React from 'react'
import './footer.scss'

import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import { FiChevronRight } from "react-icons/fi";

import video2 from '../../Assets/vid2.mp4'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv felx">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND<FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />Travel.
              </a>
            </div>

            <div className="footerParagraph">
              <p>The very basic core of a man's living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, 
                and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun.
              </p>
            </div>

            <div className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <FaFacebookF className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <AiOutlineYoutube className="icon"/>
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group 01 */}
            <div className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* Group 02 */}
            <div className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Rent a Car
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Hotels
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            {/* Group 03 */}
            <div className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Saint Martin
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Cox's Bazar
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Sajek Vally
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Sundarban
              </li>

              <li className="FooterList flex">
                <FiChevronRight className='icon' />
                Sylhet
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>You will have best travel experiences here</small>
            <small>Copyrights Reserved @  <a href="#">RAIHAN</a></small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer