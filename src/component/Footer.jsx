import React from 'react'
import Zuri from "../assets/Zuri.Internship_Logo.png";
import I4G from "../assets/I4G.png";
import FooterStyle from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div id={FooterStyle.footer__border}>
    <div id={FooterStyle.footer__div}>
<img src={Zuri}/>
<h3>HNG Internship 9 Frontend Task</h3>
<img src={I4G}/></div>

    </div>
  )
}

export default Footer
