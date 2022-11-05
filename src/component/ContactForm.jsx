import React,{useState} from "react";
import  contactForm from "../styles/contactForm.module.css";
export const ContactForm = () => {
    const [first, setfirst] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [lastName, setLasrtname] = useState('')


const firstNameHandler = (e)=>{
    setFirstname(e.target.value)

}

    const formHandler = (e) => {
    e.preventDefault()
    if (firstname.length <= 0 && lastname.length <= 0) {
        setfirst(true)

    } else{
        setfirst(false)

    }
}

  return (
    <div className={contactForm.container}>
      <form onSubmit={formHandler}>
      <h2>Contact Me</h2>

       <div className={contactForm.name__div}>

       <div id={contactForm.firstName}>
        <label htmlFor={contactForm.first_name}>First Name
            <input id={contactForm.first_name} type='text' value={firstname} onChange={firstNameHandler}
            style={{borderColor:  first?'red' :''}} placeholder="Enter your first name" />
            <p style={{fontSize:'10px',color:'red',marginTop:'-15px',}}>{first ? <h3>You need to fill in a name</h3>: ''}</p>
        </label>
       </div>


        <div>
        <label  htmlFor={contactForm.last_name}> Last Name
        <input id={contactForm.last_name} type='text' placeholder="Enter your last name" />
        </label>

       </div>

       </div>
        <label htmlFor={contactForm.email}>Email
        <input id={contactForm.email} type='email' placeholder="yourname@email.com" />
        </label>

        <label htmlFor={contactForm.message }>Message</label>
        <textarea id={contactForm.message} rows='3' cols='40' type='text'
        placeholder="Send me a message and i'll reply you as soon as possible"/>


       <div style={{display:'flex',alignItems:'center',}}>
       <input type='checkbox' id={contactForm.checkbox__check} />
        <label  htmlFor={contactForm.checkbox__check}>
     You agree to providing your data to Joseph who may contact you</label>
       </div>


        <button id={contactForm.button} style={{backgroundColor:'blue'}}>Send Message</button>
      </form>
    </div>
  );
};
