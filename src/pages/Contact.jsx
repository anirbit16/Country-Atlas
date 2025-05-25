import React from 'react'
import "../App.css"
export default function Contact() {
  const handleFormSubmit=(formData)=>{
    console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }
  return <section className="section-contact">
    <h2 className="container-title">
      Contact Us
    </h2>
    <div className="contact-wrapper container">
      

    <form action={handleFormSubmit}>
      <input 
        type="text" 
        required autoComplete="false"  
        placeholder="Enter Your Name"
        name="username"
             
             /> 
                <input 
        type="text" 
        required autoComplete="false"  
        placeholder="Enter Your Email"
        name="email"
             
             /> 
             <textarea
             className="form-control"
             rows="10"
             placeholder="Enter your message"
             name="message"
             required
             autoComplete="false"
             >

             </textarea>
             <button>Send</button>
    </form>
        </div>

  </section>
}
