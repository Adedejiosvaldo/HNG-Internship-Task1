import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProfileHeader from './component/ProfileHeader'
import Button from './libs/Button'
import Footer from './component/Footer'
import SocialIcons from './component/SocialIcons'
import "./App.css";
import { BrowserRouter , Routes, Route, Link
 } from "react-router-dom";
import { ContactForm } from './component/ContactForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/'  element={
        <div className="App">
    <ProfileHeader/>
    <Button heading='Twitter Link' customName='twitter'  webAddress='https://twitter.com/0xArize'/>
    <Button  heading='Zuri Team'  customName='btn__zur' webAddress='https://training.zuri.team'/>
    <Button heading='Zuri Books:' subText=' Books that transforms your design and coding experience' customName='books' webAddress='http://books.zuri.team'/>
    <Button heading='Python Books:' subText=' A ZeroToHero Python Course Like Never Before' customName='book__python' webAddress='https://books.zuri.team/python-for-beginners?ref_id=<josephAdedeji>'/>
    <Button heading='Background Check For Coders' subText=' Find Out Who You Are Working With!!' customName='pitch' webAddress='https://background.zuri.team'/>
    <Button heading='Design Books:' subText=' Free Design Ebook by the Number 1 Design Firm In Nigeria' customName='book__design' webAddress='https://books.zuri.team/design-rules'/>
    <Link to='/contact'><Button heading='Contact Me'/></Link>
    <SocialIcons/>
    <Footer/>
</div>
    }/>

    <Route path='/contact' element={<ContactForm/>}/>
    </Routes>

  )
}

export default App
