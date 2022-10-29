import React ,{PropTypes} from "react";
import ProfileHeaderStyle from "../styles/ProfileHeader.module.css";
import Avatar from "../assets/Device=Web, State=Default (1).png";
import MoreButton from "../assets/_Avatar share button (1).png";
import ShareButton from "../assets/Icon.png";
const ProfileHeader = ({twitterId,slackId}) => {
  return <>

<div id={ProfileHeaderStyle.container}>
<div>
<img id={ProfileHeaderStyle.profile__img} src={Avatar}/>
<h3 id={ProfileHeaderStyle.twitter}>{twitterId}</h3>
<h3 id={ProfileHeaderStyle.slack}>{slackId}</h3>

</div>
<div id={ProfileHeaderStyle.divStyle}>
<a><img  id={ProfileHeaderStyle.more__button} src={MoreButton}/></a>

</div>

</div>
<div id={ProfileHeaderStyle.tooltip}>
<span id={ProfileHeaderStyle.tooltiptext}>Share Link</span>
<img id={ProfileHeaderStyle.share__button} src={ShareButton}/>
</div>
  </>;
};


ProfileHeader.defaultProps = {
    twitterId:'Anna Black',
    slackId:'0xArize',
}

export default ProfileHeader;
