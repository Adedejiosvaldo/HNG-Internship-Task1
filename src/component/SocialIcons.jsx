import React from 'react'
import SocialMediaIcon from "../assets/Social icon.png";
import SocialMediaIcon2 from "../assets/slack_logo-ebd02d1.svg";
const SocialIcons = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
<img style={{padding:'10px'}} src={SocialMediaIcon}/>
<img style={{padding:'10px',width:'5rem',height:'auto'}} src={SocialMediaIcon2}/>
    </div>
  )
}

export default SocialIcons
