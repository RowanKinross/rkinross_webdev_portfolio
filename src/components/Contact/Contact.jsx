  import { useState } from 'react';
  import './contact.css'
  
  function Contact() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      const value = event.target.value;
      const name = event.target.name;
  
      // Updating the input's state
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
      if(!formData.firstName || !formData.lastName || !formData.email || !formData.message){
      alert(`Please fill out all fields`)
      } else {
      alert(`Thank you! Your message has been sent`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      }
    }


    return (
      <div className='contact'>
        <p className='m-0'>
          If you'd like to get in touch, please fill out the form below:
        </p>
        <form className="form container">

          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col-sm-12 col-lg-9">
              <input
              value={formData.firstName}
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-sm-12 col-lg-9">
              <input
                value={formData.lastName}
                name="lastName"
                id="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-sm-12 col-lg-9">
              <input
                value={formData.email}
                name="email"
                id="email"
                onChange={handleInputChange}
                type="text"
                placeholder="email"
              />
            </div>
         </div>

         <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label htmlFor="message">Message</label>
            </div>
            <div className="col-sm-12 col-lg-9">
                <textarea className='message'
                value={formData.message}
                name="message"
                id="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                />
            </div>
         </div>

          <br/>
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
  
export default Contact;

//// [ ] Contact:
// [ ] Must have contact information
//// [ ] Have a contact form for handling events

