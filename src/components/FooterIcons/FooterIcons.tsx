import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function FooterIcons() {
  return (
    <div className='flex gap-3'>
      <CiLinkedin />
     <FaFacebookSquare />
     <FaInstagram />
     <FaSkype />
     <FaTwitter />
     <FaPinterest />
    </div>
  )
}

export default FooterIcons
